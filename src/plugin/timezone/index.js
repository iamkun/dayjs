import { MILLISECONDS_A_MINUTE, MILLISECONDS_A_SECOND, MIN, MS } from '../../constant'

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

export default (option, Dayjs, dayjs) => {
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
    const utcTs = dayjs.utc(utcString).valueOf()
    let asTS = +timestamp
    const over = asTS % MILLISECONDS_A_SECOND
    asTS -= over
    return (utcTs - asTS) / MILLISECONDS_A_MINUTE
  }

  // find the right offset a given local time. The o input is our guess, which determines which
  // offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
  // https://github.com/moment/luxon/blob/master/src/datetime.js#L76
  const fixOffset = (localTS, o0, tz) => {
    // Our UTC time is just a guess because our offset is just a guess
    let utcGuess = localTS - (o0 * MILLISECONDS_A_MINUTE)
    // Test whether the zone matches the offset for this ts
    const o2 = tzOffset(utcGuess, tz)
    // If so, offset didn't change and we're done
    if (o0 === o2) {
      return [utcGuess, o0]
    }
    // If not, change the ts by the difference in the offset
    utcGuess -= (o2 - o0) * MILLISECONDS_A_MINUTE
    // If that gives us the local time we want, we're done
    const o3 = tzOffset(utcGuess, tz)
    if (o2 === o3) {
      return [utcGuess, o2]
    }
    // If it's different, we're in a hole time.
    // The offset has changed, but the we don't adjust the time
    return [localTS - (Math.min(o2, o3) * MILLISECONDS_A_MINUTE), Math.max(o2, o3)]
  }

  const proto = Dayjs.prototype

  proto.tz = function (timezone = defaultTimezone, keepLocalTime) {
    const oldOffset = this.utcOffset()
    const date = this.toDate()
    const target = date.toLocaleString('en-US', { timeZone: timezone })
    const diff = Math.round((date - new Date(target)) / MILLISECONDS_A_MINUTE)
    let ins = dayjs(target).$set(MS, this.$ms)
      .utcOffset((-Math.round(date.getTimezoneOffset() / 15) * 15) - diff, true)
    if (keepLocalTime) {
      const newOffset = ins.utcOffset()
      ins = ins.add(oldOffset - newOffset, MIN)
    }
    ins.$x.$timezone = timezone
    return ins
  }

  proto.offsetName = function (type) {
    // type: short(default) / long
    const zone = this.$x.$timezone || dayjs.tz.guess()
    const result = makeFormatParts(this.valueOf(), zone, { timeZoneName: type }).find(m => m.type.toLowerCase() === 'timezonename')
    return result && result.value
  }

  const oldStartOf = proto.startOf
  proto.startOf = function (units, startOf) {
    if (!this.$x || !this.$x.$timezone) {
      return oldStartOf.call(this, units, startOf)
    }

    const withoutTz = dayjs.utc(this.format('YYYY-MM-DD HH:mm:ss:SSS'))
    const startOfWithoutTz = oldStartOf.call(withoutTz, units, startOf)
    return startOfWithoutTz.tz(this.$x.$timezone, true)
  }

  dayjs.tz = function (input, arg1, arg2) {
    const parseFormat = arg2 && arg1
    const timezone = arg2 || arg1 || defaultTimezone
    const previousOffset = tzOffset(+new Date(), timezone)
    if (typeof input !== 'string') {
      // timestamp number || js Date || Day.js
      return dayjs(input).tz(timezone)
    }
    const localTs = dayjs.utc(input, parseFormat).valueOf()
    const [targetTs, targetOffset] = fixOffset(localTs, previousOffset, timezone)
    const ins = dayjs(targetTs).utcOffset(targetOffset)
    ins.$x.$timezone = timezone
    return ins
  }

  dayjs.tz.guess = function () {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  dayjs.tz.setDefault = function (timezone) {
    defaultTimezone = timezone
  }

  const oldParse = proto.parse
  proto.parse = function (cfg) {
    oldParse.call(this, cfg)
    if (cfg.utc || typeof cfg.date === 'number' || cfg.date instanceof Date) {
      return
    }
    const date = this.toDate()
    const target = date.toLocaleString('en-US', { timeZone: defaultTimezone })
    const diff = Math.round((date - new Date(target)) / MILLISECONDS_A_MINUTE)
    const offset = (-Math.round(date.getTimezoneOffset() / 15) * 15) - diff
    this.$d = date
    this.init()
    this.$offset = offset
    this.$u = offset === 0
    this.$x.$timezone = defaultTimezone
  }
}
