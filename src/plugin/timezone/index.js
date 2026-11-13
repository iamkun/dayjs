import { D, W, M, Y, MILLISECONDS_A_DAY } from '../../constant'

const WALL_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSS'
const CALENDAR_UNITS = [D, W, M, Y]

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

  // Build an instance in `timezone` from a wall-clock time expressed as a UTC timestamp.
  // `guess` picks the side of an ambiguous (fall-back) wall time.
  const fromWallClock = (wallTs, timezone, guess, locale) => {
    const [ts, offset] = fixOffset(wallTs, guess, timezone)
    let ins
    if (offset === 0) {
      ins = d(ts, { locale }).utc()
    } else {
      // Start from a host-local Date whose fields already show the zone's wall clock, so the
      // utc plugin never shifts it across a host DST change, then attach the zone offset.
      const w = new Date(ts + (offset * 60 * 1000))
      const local = new Date(
        w.getUTCFullYear(), w.getUTCMonth(), w.getUTCDate(),
        w.getUTCHours(), w.getUTCMinutes(), w.getUTCSeconds(), w.getUTCMilliseconds()
      )
      ins = d(local, { locale }).utcOffset(offset, true)
    }
    ins.$x.$timezone = timezone
    return ins
  }
  // The instance's wall clock as a UTC-mode instance, so calendar math never sees a DST change
  const wallClock = ins => d.utc(ins.format(WALL_FORMAT)).locale(ins.$L)

  proto.tz = function (timezone = defaultTimezone, keepLocalTime) {
    if (!this.isValid()) return this
    if (keepLocalTime) {
      // resolve the offset at the *target* wall-clock time, not at the current instant
      return fromWallClock(wallClock(this).valueOf(), timezone, tzOffset(+this, timezone), this.$L)
    }
    // Convert the instant: read the zone's offset at it, then build from the zone's wall clock
    const offset = tzOffset(+this, timezone)
    return fromWallClock(+this + (offset * 60 * 1000), timezone, offset, this.$L)
  }

  // Calendar arithmetic (day/week/month/year) and setters operate on the wall clock of the zone,
  // then the zone offset is re-resolved. Exact units (h/m/s/ms) move the instant.
  const oldAdd = proto.add
  proto.add = function (number, units) {
    const timezone = this.$x && this.$x.$timezone
    if (!timezone || !this.isValid()) return oldAdd.call(this, number, units)
    if (CALENDAR_UNITS.indexOf(this.$utils().p(units)) > -1) {
      const wall = oldAdd.call(wallClock(this), number, units)
      return fromWallClock(wall.valueOf(), timezone, this.utcOffset(), this.$L)
    }
    // elapsed time: add to the real instant (as UTC, so no host DST applies), then convert back
    const instant = oldAdd.call(d.utc(this.valueOf()), number, units).valueOf()
    return d(instant, { locale: this.$L }).tz(timezone)
  }

  const oldSet = proto.set
  proto.set = function (unit, value) {
    const timezone = this.$x && this.$x.$timezone
    if (!timezone || !this.isValid()) return oldSet.call(this, unit, value)
    const wall = oldSet.call(wallClock(this), unit, value)
    return fromWallClock(wall.valueOf(), timezone, this.utcOffset(), this.$L)
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

    const wall = oldStartOf.call(wallClock(this), units, startOf)
    return fromWallClock(wall.valueOf(), this.$x.$timezone, this.utcOffset(), this.$L)
  }

  d.tz = function (input, arg1, arg2) {
    const parseFormat = arg2 && arg1
    const timezone = arg2 || arg1 || defaultTimezone
    if (typeof input !== 'string') {
      // timestamp number || js Date || Day.js
      return d(input).tz(timezone)
    }
    const localTs = d.utc(input, parseFormat).valueOf()
    if (Number.isNaN(localTs)) {
      const ins = d(NaN)
      ins.$x.$timezone = timezone
      return ins
    }
    // Guess with the offset in force a day earlier: an ambiguous fall-back time then resolves to
    // the earlier instant (like moment), regardless of today's date.
    const previousOffset = tzOffset(localTs - MILLISECONDS_A_DAY, timezone)
    return fromWallClock(localTs, timezone, previousOffset)
  }

  d.tz.guess = function () {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  d.tz.setDefault = function (timezone) {
    defaultTimezone = timezone
  }
}
