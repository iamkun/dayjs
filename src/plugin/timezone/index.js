import { INVALID_DATE_STRING, MILLISECONDS_A_MINUTE, MILLISECONDS_A_SECOND, MIN, MS } from '../../constant'

const types = ['year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName']

// Cache time-zone lookups from Intl.DateTimeFormat,
// as it is a *very* slow method.
const dtfCache = { __proto: null }
const getDateTimeFormat = (timezone, options = {}) => {
  const { timeZoneName } = options
  const key = `${timezone}|${timeZoneName}`
  let dtf = dtfCache[key]
  if (!dtf) {
    dtf = new Intl.DateTimeFormat('en-US', {
      hourCycle: 'h23',
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

export default (o, c, d) => {
  let defaultTimezone

  const makeFormatParts = (timestamp, timezone, options) => {
    const date = new Date(timestamp)
    const dtf = getDateTimeFormat(timezone, options)
    const formatResult = dtf.formatToParts(date)
    const filled = []
    formatResult.forEach(({ type, value }) => {
      const i = types.indexOf(type)
      if (i >= 0) {
        filled[i] = value
      }
    })
    return filled
  }

  const tzOffset = (timestamp, timezone) => {
    const [Y, M, D, h, m, s] = makeFormatParts(timestamp, timezone)
    const utcString = `${Y}-${M}-${D} ${h}:${m}:${s}`
    const utcTs = +d.utc(utcString)
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
    const utcGuess = offset => localTS - (offset * MILLISECONDS_A_MINUTE)
    const next = offset => tzOffset(utcGuess(offset), tz)
    // Test whether the zone matches the offset for this ts
    let o2 = next(o0)
    let o3 = next(o2)
    // If o2 !== o3, we're in a hole time.
    // The offset has changed, but the we don't adjust the time
    if (o2 > o3) {
      const tmp = o2
      o2 = o3
      o3 = tmp
    }
    return d(utcGuess(o2)).utcOffset(o3)
  }

  const proto = c.prototype

  proto.tz = function (timezone = defaultTimezone, keepLocalTime) {
    const oldOffset = this.utcOffset()
    const date = this.toDate()
    const target = this.isValid()
      ? getDateTimeFormat(timezone).format(date)
      : INVALID_DATE_STRING
    const diff = Math.round((date - new Date(target)) / MILLISECONDS_A_MINUTE)
    const offset = -date.getTimezoneOffset() - diff
    const isUTC = !offset
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
    const result = makeFormatParts(+this, zone, { timeZoneName: type || 'short' })[6]
    return result
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
    const localTs = +d.utc(input, parseFormat)
    const ins = fixOffset(localTs, previousOffset, timezone)
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
