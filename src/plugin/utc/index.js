import { MILLISECONDS_A_MINUTE, MIN } from '../../constant'

const REGEX_VALID_OFFSET_FORMAT = /[+-]\d\d(?::?\d\d)?/g
const REGEX_OFFSET_HOURS_MINUTES_FORMAT = /([+-]|\d\d)/g

function offsetFromString(value = '') {
  const offset = value.match(REGEX_VALID_OFFSET_FORMAT)

  if (!offset) {
    return null
  }

  const [indicator, hoursOffset, minutesOffset] = `${offset[0]}`.match(REGEX_OFFSET_HOURS_MINUTES_FORMAT) || ['-', 0, 0]
  const totalOffsetInMinutes = (+hoursOffset * 60) + (+minutesOffset)

  if (totalOffsetInMinutes === 0) {
    return 0
  }

  return indicator === '+' ? totalOffsetInMinutes : -totalOffsetInMinutes
}


export default (option, Dayjs, dayjs) => {
  const proto = Dayjs.prototype
  dayjs.utc = function (date) {
    const cfg = { date, utc: true, args: arguments } // eslint-disable-line prefer-rest-params
    return new Dayjs(cfg) // eslint-disable-line no-use-before-define
  }

  proto.utc = function (keepLocalTime) {
    const ins = dayjs(this.toDate(), { locale: this.$L, utc: true })
    if (keepLocalTime) {
      return ins.add(this.utcOffset(), MIN)
    }
    return ins
  }

  proto.local = function () {
    return dayjs(this.toDate(), { locale: this.$L, utc: false })
  }

  const oldParse = proto.parse
  proto.parse = function (cfg) {
    if (cfg.utc) {
      this.$u = true
    }
    if (!this.$utils().u(cfg.$offset)) {
      this.$offset = cfg.$offset
    }
    oldParse.call(this, cfg)
  }

  const oldInit = proto.init
  proto.init = function () {
    if (this.$u) {
      const { $d } = this
      this.$y = $d.getUTCFullYear()
      this.$M = $d.getUTCMonth()
      this.$D = $d.getUTCDate()
      this.$W = $d.getUTCDay()
      this.$H = $d.getUTCHours()
      this.$m = $d.getUTCMinutes()
      this.$s = $d.getUTCSeconds()
      this.$ms = $d.getUTCMilliseconds()
    } else {
      oldInit.call(this)
    }
  }

  const oldUtcOffset = proto.utcOffset
  proto.utcOffset = function (input, keepLocalTime) {
    const { u } = this.$utils()
    if (u(input)) {
      if (this.$u) {
        return 0
      }
      if (!u(this.$offset)) {
        return this.$offset
      }
      return oldUtcOffset.call(this)
    }
    if (typeof input === 'string') {
      input = offsetFromString(input)
      if (input === null) {
        return this
      }
    }
    const offset = Math.abs(input) <= 16 ? input * 60 : input

    if (offset === 0) {
      return this.utc(keepLocalTime)
    }

    let ins = this.clone()

    if (keepLocalTime) {
      ins.$offset = offset
      ins.$u = false
      return ins
    }

    const localTimezoneOffset = this.$u
      ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset()
    ins = this.local().add(offset + localTimezoneOffset, MIN)

    // Fix DST transition offset mismatch
    // Problem: After adding offset, DST transition can cause timezone offset to change
    // Example: dayjs.tz('2012-03-11 02:59:59', 'America/New_York').format()
    // Expected: '2012-03-11T03:59:59-04:00'
    // Actual: '2012-03-11T04:59:59-04:00'
    // Solution: Recalculate offset after add() and adjust for any DST-induced changes
    const newLocalTimezoneOffset = ins.$u
      ? ins.toDate().getTimezoneOffset() : (-1 * ins.utcOffset())
    ins = ins.local().add(newLocalTimezoneOffset - localTimezoneOffset, MIN)

    ins.$offset = offset
    ins.$x.$localOffset = newLocalTimezoneOffset

    return ins
  }

  const oldFormat = proto.format
  const UTC_FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ss[Z]'
  proto.format = function (formatStr) {
    const str = formatStr || (this.$u ? UTC_FORMAT_DEFAULT : '')
    return oldFormat.call(this, str)
  }

  proto.valueOf = function () {
    const addedOffset = !this.$utils().u(this.$offset)
      ? this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset()) : 0
    return this.$d.valueOf() - (addedOffset * MILLISECONDS_A_MINUTE)
  }

  proto.isUTC = function () {
    return !!this.$u
  }

  proto.toISOString = function () {
    return this.toDate().toISOString()
  }

  proto.toString = function () {
    return this.toDate().toUTCString()
  }

  const oldToDate = proto.toDate
  proto.toDate = function (type) {
    if (type === 's' && this.$offset) {
      return dayjs(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
    }
    return oldToDate.call(this)
  }
  const oldDiff = proto.diff
  proto.diff = function (input, units, float) {
    if (input && this.$u === input.$u) {
      return oldDiff.call(this, input, units, float)
    }
    const localThis = this.local()
    const localInput = dayjs(input).local()
    return oldDiff.call(localThis, localInput, units, float)
  }
}
