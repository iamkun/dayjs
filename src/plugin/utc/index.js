import UTCDate, { LOCAL_TIMEZONE_OFFSET } from './UTCDate'
import { parseTimezoneOffset } from './util'

const $superFun = {}

const dayjsAddon = {
  utc(cfg) {
    const tmpDayjs = this(cfg)
    if (typeof cfg === 'string' && parseTimezoneOffset(cfg) === null) {
      // cfg exclude UTC offset
      tmpDayjs.$d.$timezoneOffset = 0
    }
    return tmpDayjs.utc()
  }
}

const DayjsAddon = {
  utc() {
    return this.utcOffset(0)
  },
  local() {
    return this.utcOffset(-LOCAL_TIMEZONE_OFFSET)
  },
  utcOffset(arg) {
    if (arg === undefined) {
      const rTZ = this.$d.getTimezoneOffset()
      return rTZ === 0 ? 0 : -rTZ
    }
    if (parseTimezoneOffset(arg) !== null) {
      this.$d.setTimezoneOffset(-parseTimezoneOffset(arg))
      this.init()
    }
    return this
  },
  toDate() {
    return new Date(this.$d.getTime())
  },
  isLocal() {
    return this.$d.getTimezoneOffset() === LOCAL_TIMEZONE_OFFSET
  },
  isUTC() {
    return this.$d.getTimezoneOffset() === 0
  },
  parse(cfg) {
    $superFun.parse.call(this, cfg)
    const { $d } = this
    const tzOffset = typeof cfg.date === 'string' ? parseTimezoneOffset(cfg.date) : null
    this.$d = new UTCDate($d, tzOffset === null ? LOCAL_TIMEZONE_OFFSET : -tzOffset, false)
    this.init()
  }
};

['clone', 'add', 'subtract'].forEach((key) => {
  DayjsAddon[key] = function _(...arg) {
    const $utcOffset = this.utcOffset()
    return $superFun[key].call(this, ...arg).utcOffset($utcOffset)
  }
})

export default (option, Dayjs, dayjs) => {
  Object.getOwnPropertyNames(Dayjs.prototype).forEach((key) => {
    $superFun[key] = Dayjs.prototype[key]
  })
  Object.assign(dayjs, dayjsAddon)
  Object.assign(Dayjs.prototype, DayjsAddon)
}
