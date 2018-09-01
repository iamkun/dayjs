import UTCDate, { LOCAL_TIMEZONE_OFFSET } from './UTCDate'
import { parseTimezoneOffset } from './util'

let RETURN_LOCAL_INSTANCE = false

const injectDayjsClass = function (pluginPrototype, $super) {
  ['clone', 'add', 'subtract'].forEach((key) => {
    pluginPrototype[key] = function () {
      const $utcOffset = this.utcOffset()
      // eslint-disable-next-line prefer-rest-params
      return $super[key].apply(this, arguments).utcOffset($utcOffset)
    }
  })
  pluginPrototype.utc = function () {
    return this.utcOffset(0)
  }
  pluginPrototype.local = function () {
    return this.utcOffset(-LOCAL_TIMEZONE_OFFSET)
  }
  pluginPrototype.utcOffset = function (arg) {
    if (arg === undefined) {
      const rTZ = this.$d.getTimezoneOffset()
      return rTZ === 0 ? 0 : -rTZ
    }
    if (parseTimezoneOffset(arg) !== null) {
      this.$d.setTimezoneOffset(-parseTimezoneOffset(arg))
      this.init()
    }
    return this
  }
  pluginPrototype.toDate = function () {
    return new Date(this.$d.getTime())
  }
  pluginPrototype.isLocal = function () {
    return this.$d.getTimezoneOffset() === LOCAL_TIMEZONE_OFFSET
  }
  pluginPrototype.isUTC = function () {
    return this.$d.getTimezoneOffset() === 0
  }
  pluginPrototype.parse = function (cfg) {
    $super.parse.call(this, cfg)
    const { $d } = this
    const tzOffset = typeof cfg.date === 'string' ? parseTimezoneOffset(cfg.date) : null
    this.$d = new UTCDate($d, tzOffset === null ? LOCAL_TIMEZONE_OFFSET : -tzOffset, false)
    if (RETURN_LOCAL_INSTANCE) this.local()
    this.init()
  }
}
export default (option = {}, Dayjs, dayjs) => {
  RETURN_LOCAL_INSTANCE = !!option.parseToLocal
  const $super = Dayjs.prototype

  const PluginClass = function () { }
  PluginClass.prototype = $super
  const classPrototype = new PluginClass()

  injectDayjsClass(classPrototype, $super)

  classPrototype.constructor = Dayjs.constructor
  Dayjs.prototype = classPrototype

  dayjs.utc = function (cfg) {
    const tmpDayjs = this(cfg)
    if (typeof cfg === 'string' && parseTimezoneOffset(cfg) === null) {
      // cfg exclude UTC offset
      tmpDayjs.$d.$timezoneOffset = 0
    }
    return tmpDayjs.utc()
  }
}
