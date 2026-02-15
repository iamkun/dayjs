import { MIN, MS } from '../../constant'

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
}

// Cache time-zone lookups from Intl.DateTimeFormat,
// as it is a *very* slow method.
const dtfCache = {}
const getDateTimeFormat = (timezone, options = {}) => {
  const timeZoneName = options.timeZoneName || 'short'
  const key = `${timezone}|${timeZoneName}`
  let dtf = dtfCache[key]
  if (!dtf) {
    dtf = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName
    })
    dtfCache[key] = dtf
  }
  return dtf
}

/**
 * Parse US locale date string to date components
 * @param {string} str - US locale date string
 *                       (e.g., '3/9/2025, 2:00:00 AM' '3/9/2025, 2:00:00.123 AM')
 */
function parseUSLocaleDate(str) {
  const [datePart, timePartRaw] = str.split(',').map(s => s.trim())

  const [month, day, year] = datePart.split('/').map(Number)

  // Split "2:00:00.123 AM"
  const parts = timePartRaw.split(' ')
  const timePart = parts[0]
  const period = parts[1] // AM / PM

  const [h, m, sRaw] = timePart.split(':')

  let second = 0
  let millisecond = 0

  if (sRaw.includes('.')) {
    const [sec, ms] = sRaw.split('.')
    second = Number(sec)
    millisecond = Number(ms)
  } else {
    second = Number(sRaw)
  }

  let hour = Number(h)
  const minute = Number(m)

  if (period === 'PM' && hour !== 12) hour += 12
  if (period === 'AM' && hour === 12) hour = 0

  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
    millisecond
  }
}

export default (o, c, d) => {
  let defaultTimezone

  const makeFormatParts = (timestamp, timezone, options = {}) => {
    const date = new Date(timestamp)
    const dtf = getDateTimeFormat(timezone, options)
    return dtf.formatToParts(date)
  }

  const tzOffset = (timestamp, timezone) => {
    const formatResult = makeFormatParts(timestamp, timezone)
    const filled = []
    for (let i = 0; i < formatResult.length; i += 1) {
      const { type, value } = formatResult[i]
      const pos = typeToPos[type]

      if (pos >= 0) {
        filled[pos] = parseInt(value, 10)
      }
    }
    const hour = filled[3]
    // Workaround for the same behavior in different node version
    // https://github.com/nodejs/node/issues/33027
    /* istanbul ignore next */
    const fixedHour = hour === 24 ? 0 : hour
    const utcString = `${filled[0]}-${filled[1]}-${filled[2]} ${fixedHour}:${filled[4]}:${filled[5]}:000`
    const utcTs = d.utc(utcString).valueOf()
    let asTS = +timestamp
    const over = asTS % 1000
    asTS -= over
    return (utcTs - asTS) / (60 * 1000)
  }

  // find the right offset a given local time. The o input is our guess, which determines which
  // offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
  // https://github.com/moment/luxon/blob/master/src/datetime.js#L76
  const fixOffset = (localTS, o0, tz) => {
    // Our UTC time is just a guess because our offset is just a guess
    let utcGuess = localTS - (o0 * 60 * 1000)
    // Test whether the zone matches the offset for this ts
    const o2 = tzOffset(utcGuess, tz)
    // If so, offset didn't change and we're done
    if (o0 === o2) {
      return [utcGuess, o0]
    }
    // If not, change the ts by the difference in the offset
    utcGuess -= (o2 - o0) * 60 * 1000
    // If that gives us the local time we want, we're done
    const o3 = tzOffset(utcGuess, tz)
    if (o2 === o3) {
      return [utcGuess, o2]
    }
    // If it's different, we're in a hole time.
    // The offset has changed, but the we don't adjust the time
    return [localTS - (Math.min(o2, o3) * 60 * 1000), Math.max(o2, o3)]
  }

  const proto = c.prototype

  proto.tz = function (timezone = defaultTimezone, keepLocalTime) {
    const oldOffset = this.utcOffset()
    const date = this.toDate()
    const target = date.toLocaleString('en-US', { timeZone: timezone })


    // Use string parsing instead of new Date(target) to avoid DST transition errors
    const {
      day, hour, minute
    } = parseUSLocaleDate(target)
    let deltaDay = date.getDate() - day
    // Cross month adjustment
    if (Math.abs(deltaDay) > 1) deltaDay = -Math.sign(deltaDay)

    const diff = [
      deltaDay,
      (date.getHours() - hour),
      (date.getMinutes() - minute)
    ].reduce((sum, v, i) => {
      const factors = [24 * 60, 60, 1]
      return sum + (v * factors[i])
    }, 0)

    const offset = (-Math.round(date.getTimezoneOffset() / 15) * 15) - diff
    const isUTC = !Number(offset)
    let ins
    if (isUTC) { // if utcOffset is 0, turn it to UTC mode
      ins = this.utcOffset(0, keepLocalTime)
    } else {
      ins = d(target, { locale: this.$L }).$set(MS, this.$ms)
        .utcOffset(offset, true)
      if (keepLocalTime) {
        const newOffset = ins.utcOffset()
        ins = ins.add(oldOffset - newOffset, MIN)
      }
    }
    ins.$x.$timezone = timezone
    return ins
  }

  proto.offsetName = function (type) {
    // type: short(default) / long
    const zone = this.$x.$timezone || d.tz.guess()
    const result = makeFormatParts(this.valueOf(), zone, { timeZoneName: type }).find(m => m.type.toLowerCase() === 'timezonename')
    return result && result.value
  }

  const oldStartOf = proto.startOf
  proto.startOf = function (units, startOf) {
    if (!this.$x || !this.$x.$timezone) {
      return oldStartOf.call(this, units, startOf)
    }

    const withoutTz = d(this.format('YYYY-MM-DD HH:mm:ss:SSS'), { locale: this.$L })
    const startOfWithoutTz = oldStartOf.call(withoutTz, units, startOf)
    return startOfWithoutTz.tz(this.$x.$timezone, true)
  }

  d.tz = function (input, arg1, arg2) {
    const parseFormat = arg2 && arg1
    const timezone = arg2 || arg1 || defaultTimezone
    const previousOffset = tzOffset(+d(), timezone)
    if (typeof input !== 'string') {
      // timestamp number || js Date || Day.js
      return d(input).tz(timezone)
    }
    const localTs = d.utc(input, parseFormat).valueOf()
    const [targetTs, targetOffset] = fixOffset(localTs, previousOffset, timezone)
    const ins = d(targetTs).utcOffset(targetOffset)
    ins.$x.$timezone = timezone
    return ins
  }

  d.tz.guess = function () {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  d.tz.setDefault = function (timezone) {
    defaultTimezone = timezone
  }
}
