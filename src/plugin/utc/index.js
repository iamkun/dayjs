import { MILLISECONDS_A_MINUTE, MIN } from '../../constant'

export default (option, Dayjs, dayjs) => {
  const localOffset = (new Date()).getTimezoneOffset()
  const proto = Dayjs.prototype
  dayjs.utc = function (date, format) {
    const cfg = { date, utc: true, format }
    return new Dayjs(cfg) // eslint-disable-line no-use-before-define
  }

  proto.utc = function () {
    return dayjs(this.toDate(), { locale: this.$L, utc: true })
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
    if (!this.$utils().u(cfg.$lo)) {
      this.$lo = cfg.$lo
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
  proto.utcOffset = function (input) {
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
    const offset = Math.abs(input) <= 16 ? input * 60 : input
    const newD = this.add(offset + (this.$u ? 0 : localOffset), MIN)
    newD.$offset = offset
    newD.$lo = this.$u ? 0 : localOffset
    newD.$u = input === 0 // UTC mode
    return newD
  }

  const oldFormat = proto.format
  const UTC_FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ss[Z]'
  proto.format = function (formatStr) {
    const str = formatStr || (this.$u ? UTC_FORMAT_DEFAULT : '')
    return oldFormat.call(this, str)
  }

  proto.valueOf = function () {
    const addedOffset = !this.$utils().u(this.$offset)
      ? this.$offset + this.$lo : 0
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
}
