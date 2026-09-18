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
      // An instance carrying a display offset keeps its wall clock in the UTC
      // fields of $d and so is flagged $u too, hence $offset is read first.
      if (!u(this.$offset)) {
        return this.$offset
      }
      if (this.$u) {
        return 0
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

    // The wall clock to show, held as the UTC fields of $d: the one this instance
    // already shows when it is being kept, the new offset's view of the same
    // instant otherwise. A host-local Date cannot serve here - it has no way to
    // hold a wall clock the host itself skips at its DST spring-forward.
    const wallClock = this.valueOf() +
      ((keepLocalTime ? this.utcOffset() : offset) * MILLISECONDS_A_MINUTE)
    const ins = dayjs(new Date(wallClock), { locale: this.$L, utc: true })
    ins.$offset = offset

    return ins
  }

  const oldFormat = proto.format
  const UTC_FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ss[Z]'
  proto.format = function (formatStr) {
    const str = formatStr || (this.isUTC() ? UTC_FORMAT_DEFAULT : '')
    return oldFormat.call(this, str)
  }

  proto.valueOf = function () {
    const { u } = this.$utils()
    const offset = u(this.$offset) ? 0 : this.$offset
    return this.$d.valueOf() - (offset * MILLISECONDS_A_MINUTE)
  }

  proto.isUTC = function () {
    // A display offset is what makes an instance not UTC; $u alone no longer says.
    return !!this.$u && this.$utils().u(this.$offset)
  }

  proto.toISOString = function () {
    return this.toDate().toISOString()
  }

  proto.toString = function () {
    return this.toDate().toUTCString()
  }

  const oldToDate = proto.toDate
  proto.toDate = function (type) {
    // 's' asks for the wall clock as a Date, which startOf/endOf then truncate
    // with the UTC setters $u selects - the fields $d already holds.
    if (type === 's' && this.$offset) {
      return new Date(this.$d)
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
