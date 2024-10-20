import { MILLISECONDS_A_MINUTE, MILLISECONDS_A_SECOND, MIN, MS } from '../../constant'

export default (o, c, d) => {
  let defaultTimezone
  const proto = c.prototype

  // Cache time-zone lookups from Intl.DateTimeFormat,
  // as it is a *very* slow method.
  const dtfCache = { __proto: null }
  const getDateTimeFormat = (timezone, timeZoneName) => {
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

  const makeFormatParts = (timestamp, timezone, timeZoneName) => {
    const date = new Date(timestamp)
    const dtf = getDateTimeFormat(timezone, timeZoneName)
    const formatResult = dtf.formatToParts(date)
    return formatResult
  }

  const tzOffset = (timestamp, timezone) => {
    const formatResult = makeFormatParts(timestamp, timezone)
    let Y
    let M
    let D
    let h
    let m
    let s
    formatResult.forEach((r) => {
      switch (r.type) {
        case 'year':
          Y = r.value
          break
        case 'month':
          M = r.value - 1
          break
        case 'day':
          D = r.value
          break
        case 'hour':
          h = r.value
          break
        case 'minute':
          m = r.value
          break
        case 'second':
          s = r.value
          break
        default:
          break
      }
    })
    const utcTs = Date.UTC(Y, M, D, h, m, s)
    const asTS = timestamp
    const over = asTS % MILLISECONDS_A_SECOND
    return (utcTs - (asTS - over)) / MILLISECONDS_A_MINUTE
  }

  const tzToFirstOffsetCache = { __proto__: null }
  const initialValue = +d()
  const tzToFirstOffset = (timezone) => {
    let offset = tzToFirstOffsetCache[timezone]
    if (offset == null) {
      offset = tzOffset(initialValue, timezone)
      tzToFirstOffsetCache[timezone] = offset
    }
    return offset
  }

  // find the right offset a given local time. The o input is our guess, which determines which
  // offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
  // https://github.com/moment/luxon/blob/master/src/datetime.js#L76
  const fixOffset = (localTS, tz) => {
    let o0 = tzToFirstOffset(tz)
    let utcGuess
    let o2
    // Our UTC time is just a guess because our offset is just a guess
    utcGuess = localTS - (o0 * MILLISECONDS_A_MINUTE)
    // Test whether the zone matches the offset for this ts
    o2 = tzOffset(utcGuess, tz)
    // If so, offset didn't change and we're done
    if (o0 !== o2) {
      // If not, change the ts by the difference in the offset
      o0 = o2
      utcGuess = localTS - (o0 * MILLISECONDS_A_MINUTE)
      o2 = tzOffset(utcGuess, tz)
      // If that gives us the local time we want, we're done
      // If it's different, we're in a hole time.
      // The offset has changed, but the we don't adjust the time
      if (o0 > o2) {
        // swap o2 and o0
        utcGuess = o0
        o0 = o2
        o2 = utcGuess
        utcGuess = localTS - (o0 * MILLISECONDS_A_MINUTE)
      }
    }
    return d(utcGuess).utcOffset(o2)
  }

  proto.tz = function (timezone = defaultTimezone, keepLocalTime) {
    const date = this.toDate()
    const target = this.isValid()
      ? new Date(getDateTimeFormat(timezone).format(date))
      : NaN
    const diff = Math.round((date - target) / MILLISECONDS_A_MINUTE)
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    const offset = (-Math.round(date.getTimezoneOffset() / 15) * 15) - diff
    const isUTC = !offset
    let ins
    if (isUTC) { // if utcOffset is 0, turn it to UTC mode
      ins = this.utcOffset(0, keepLocalTime)
    } else {
      ins = d(target, { locale: this.$L }).$set(MS, this.$ms)
        .utcOffset(offset, true)
      if (keepLocalTime) {
        const oldOffset = this.utcOffset()
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
    const result = makeFormatParts(+this, zone, type || 'short').find(i => i.type === 'timeZoneName').value
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
    const timezone = arg2 || arg1 || defaultTimezone
    if (typeof input !== 'string') {
      // timestamp number || js Date || Day.js
      return d(input).tz(timezone)
    }
    const parseFormat = arg2 && arg1
    const localTs = +d.utc(input, parseFormat)
    const ins = fixOffset(localTs, timezone)
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
