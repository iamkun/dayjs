import {
  MILLISECONDS_A_DAY,
  MILLISECONDS_A_MINUTE,
  MS
} from '../../constant'

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
const getDateTimeFormat = (timezone, options) => {
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

  // Read the target zone's wall clock directly from Intl. Interpreting those
  // fields as UTC lets us derive the offset without involving the host timezone.
  const tzWall = (timestamp, timezone) => {
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
    const wallTimestamp = Date.UTC(
      filled[0],
      filled[1] - 1,
      filled[2],
      fixedHour,
      filled[4],
      filled[5]
    )
    let asTS = +timestamp
    const over = asTS % 1000
    asTS -= over
    return {
      wallTimestamp,
      offset: (wallTimestamp - asTS) / MILLISECONDS_A_MINUTE
    }
  }

  const tzOffset = (timestamp, timezone) => tzWall(timestamp, timezone).offset

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
  const WALL = 'YYYY-MM-DD HH:mm:ss:SSS'

  // Zoned instances store their wall clock in $d as UTC and keep the real
  // offset separately. This prevents host DST rules from altering the clock.
  const isUtcWall = (x, utc, offset) => x && x.$timezone
    && x.$localOffset === 0 && !utc && offset !== undefined

  const withLocale = (ins, locale) => {
    ins.$L = locale
    return ins
  }

  // Calendar operations preserve both the wall clock and the current side of
  // an overlap. The existing offset disambiguates repeated DST hours.
  const fromWall = (ins, timezone, offset) => {
    const localTs = d.utc(ins.format(WALL)).valueOf()
    const [targetTs] = fixOffset(localTs, offset, timezone)
    return withLocale(d(targetTs).tz(timezone), ins.$L)
  }

  // Duration operations preserve the instant before displaying it in the zone.
  const fromInstant = (ins, timezone) =>
    withLocale(d(ins.valueOf()).tz(timezone), ins.$L)

  proto.tz = function (timezone = defaultTimezone, keepLocalTime) {
    if (!this.isValid()) {
      return this.clone()
    }
    const { wallTimestamp, offset } = tzWall(this.valueOf(), timezone)
    let ins
    if (!offset) { // if utcOffset is 0, turn it to UTC mode
      ins = this.utcOffset(0, keepLocalTime)
    } else if (keepLocalTime) {
      // Keep wall clock and stamp the target offset at this instant (moment semantics).
      ins = this.utcOffset(offset, true)
      if (this.$u) {
        ins.$x.$localOffset = 0
      }
    } else {
      // Build the target wall clock in UTC to avoid parsing it in the host zone.
      ins = d.utc(wallTimestamp).$set(MS, this.$ms).utcOffset(offset, true)
      ins.$x.$localOffset = 0
    }
    ins.$x.$timezone = timezone
    return withLocale(ins, this.$L)
  }

  // Parse utc-wall clones in UTC, then expose them as fixed-offset instances.
  const oldParse = proto.parse
  proto.parse = function (cfg) {
    const useUtcWall = isUtcWall(cfg.x, cfg.utc, cfg.$offset)
    if (useUtcWall) {
      cfg.utc = true
    }
    oldParse.call(this, cfg)
    if (useUtcWall) {
      this.$u = false
    }
  }

  // $d stores wall clock in UTC; mutate with UTC setters so host DST cannot skip an hour.
  const oldSet = proto.$set
  proto.$set = function (units, int) {
    const useUtcWall = isUtcWall(this.$x, this.$u, this.$offset)
    if (useUtcWall) {
      this.$u = true
    }
    const result = oldSet.call(this, units, int)
    if (useUtcWall) {
      this.$u = false
    }
    return result
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

    // Operate on the wall clock in UTC so the host DST gap cannot skip an hour.
    const withoutTz = d.utc(this.format(WALL))
    withoutTz.$L = this.$L
    const startOfWithoutTz = oldStartOf.call(withoutTz, units, startOf)
    return fromWall(startOfWithoutTz, this.$x.$timezone, this.utcOffset())
  }

  const oldPublicSet = proto.set
  proto.set = function (string, int) {
    const result = oldPublicSet.call(this, string, int)
    const timezone = this.$x && this.$x.$timezone
    if (!timezone) {
      return result
    }
    // A calendar field change may cross a target-zone DST boundary.
    return fromWall(result, timezone, this.utcOffset())
  }

  const oldAdd = proto.add
  proto.add = function (number, units) {
    const result = oldAdd.call(this, number, units)
    const timezone = this.$x && this.$x.$timezone
    if (!timezone) {
      return result
    }
    const unit = this.$utils().p(units)
    const calendar = unit === 'year' || unit === 'month' || unit === 'day'
      || unit === 'week'
    if (calendar) {
      // Calendar additions already pass through the timezone-aware set method.
      return result
    }
    // Hours/minutes/seconds: add to the instant, then convert (matches moment across DST).
    return fromInstant(result, timezone)
  }

  d.tz = function (input, arg1, arg2) {
    const parseFormat = arg2 && arg1
    const timezone = arg2 || arg1 || defaultTimezone
    if (typeof input !== 'string') {
      // timestamp number || js Date || Day.js
      return d(input).tz(timezone)
    }
    // Treat the input as a wall clock first, then resolve its real zone offset.
    const localDate = d.utc(input, parseFormat)
    if (!localDate.isValid()) {
      return localDate
    }
    const localTs = localDate.valueOf()
    // Sampling before the requested wall clock makes overlaps deterministic:
    // like Moment, an ambiguous input selects the earlier occurrence.
    const previousOffset = tzOffset(localTs - MILLISECONDS_A_DAY, timezone)
    const [targetTs] = fixOffset(localTs, previousOffset, timezone)
    return d(targetTs).tz(timezone)
  }

  d.tz.guess = function () {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  d.tz.setDefault = function (timezone) {
    defaultTimezone = timezone
  }
}
