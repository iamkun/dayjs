import * as C from './constant'
import * as Utils from './utils'
import eng from './locales/en'

const dayjs = function dayjs(date, c) {
  const cfg = c || {}
  cfg.date = date
  return new Dayjs(cfg) // eslint-disable-line no-use-before-define
}

const getDate = (date) => {
  let reg
  if (date === null) return new Date(NaN) // Treat null as an invalid date
  if (Utils.isUndefined(date)) return new Date()
  if (date instanceof Date) return date
  // eslint-disable-next-line no-cond-assign
  if (reg = String(date).match(C.REGEX_PARSE)) {
    // 2018-08-08 or 20180808
    return new Date(reg[1], reg[2] - 1, reg[3], reg[5], reg[6], reg[7], reg[8] || 0)
  }
  return new Date(date) // timestamp
}

export class Dayjs {
  constructor(cfg) {
    this.$d = getDate(cfg.date)
    this.$format = cfg.format || C.FORMAT_DEFAULT
    this.init(cfg.locale)
  }

  init(locale) {
    this.$zone = this.$d.getTimezoneOffset() / 60
    this.$zoneStr = Utils.padZoneStr(this.$zone)
    this.$y = this.$d.getFullYear()
    this.$M = this.$d.getMonth()
    this.$D = this.$d.getDate()
    this.$W = this.$d.getDay()
    this.$H = this.$d.getHours()
    this.$m = this.$d.getMinutes()
    this.$s = this.$d.getSeconds()
    this.$ms = this.$d.getMilliseconds()
    this.$L = locale || eng
  }

  // eslint-disable-next-line class-methods-use-this
  Utils() {
    return Utils
  }

  isValid() {
    return !(this.$d.toString() === 'Invalid Date')
  }

  isLeapYear() {
    return ((this.$y % 4 === 0) && (this.$y % 100 !== 0)) || (this.$y % 400 === 0)
  }

  isSame(that) {
    return this.valueOf() === that.valueOf()
  }

  isBefore(that) {
    return this.valueOf() < that.valueOf()
  }

  isAfter(that) {
    return this.valueOf() > that.valueOf()
  }

  year() {
    return this.$y
  }

  month() {
    return this.$M
  }

  day() {
    return this.$W
  }

  date() {
    return this.$D
  }

  hour() {
    return this.$H
  }

  minute() {
    return this.$m
  }

  second() {
    return this.$s
  }

  millisecond() {
    return this.$ms
  }

  unix() {
    return Math.floor(this.valueOf() / 1000)
  }

  valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime()
  }

  startOf(units, startOf) { // startOf -> endOf
    const isStartOf = !Utils.isUndefined(startOf) ? startOf : true
    const unit = Utils.prettyUnit(units)
    const instanceFactory = (d, m, y = this.$y) => {
      const ins = dayjs(new Date(y, m, d))
      return isStartOf ? ins : ins.endOf(C.D)
    }
    const instanceFactorySet = (method, slice) => {
      const argumentStart = [0, 0, 0, 0]
      const argumentEnd = [23, 59, 59, 999]
      return dayjs(this.toDate()[method].apply( // eslint-disable-line prefer-spread
        this.toDate(),
        isStartOf ? argumentStart.slice(slice) : argumentEnd.slice(slice)
      ))
    }
    switch (unit) {
      case C.Y:
        return isStartOf ? instanceFactory(1, 0) :
          instanceFactory(31, 11, this.$y)
      case C.M:
        return isStartOf ? instanceFactory(1, this.$M) :
          instanceFactory(0, this.$M + 1, this.$y)
      case C.W:
        return isStartOf ? instanceFactory(this.$D - this.$W, this.$M) :
          instanceFactory(this.$D + (6 - this.$W), this.$M, this.$y)
      case C.D:
      case C.DATE:
        return instanceFactorySet('setHours', 0)
      case C.H:
        return instanceFactorySet('setMinutes', 1)
      case C.MIN:
        return instanceFactorySet('setSeconds', 2)
      case C.S:
        return instanceFactorySet('setMilliseconds', 3)
      default:
        return this.clone()
    }
  }

  endOf(arg) {
    return this.startOf(arg, false)
  }

  $set(units, int) { // private set
    const unit = Utils.prettyUnit(units)
    switch (unit) {
      case C.DATE:
        this.$d.setDate(int)
        break
      case C.M:
        this.$d.setMonth(int)
        break
      case C.Y:
        this.$d.setFullYear(int)
        break
      case C.H:
        this.$d.setHours(int)
        break
      case C.MIN:
        this.$d.setMinutes(int)
        break
      case C.S:
        this.$d.setSeconds(int)
        break
      case C.MS:
        this.$d.setMilliseconds(int)
        break
      default:
        break
    }
    this.init()
    return this
  }


  set(unitOrDate, int) {
    if (typeof unitOrDate === 'object' &&
      unitOrDate.constructor.name.indexOf(['Date', 'Dayjs'] > -1)) {
      const self = this.clone()
      self.$d = unitOrDate.toDate ? unitOrDate.toDate() : unitOrDate
      return self
    }
    if (!Utils.isNumber(int)) return this
    return this.clone().$set(unitOrDate, int)
  }

  add(number, units) {
    const unit = (units && units.length === 1) ? units : Utils.prettyUnit(units)
    if (['M', C.M].indexOf(unit) > -1) {
      let date = this.set(C.DATE, 1).set(C.M, this.$M + number)
      date = date.set(C.DATE, Math.min(this.$D, date.daysInMonth()))
      return date
    }
    if (['y', C.Y].indexOf(unit) > -1) {
      return this.set(C.Y, this.$y + number)
    }
    let step
    switch (unit) {
      case 'm':
      case C.MIN:
        step = C.MILLISECONDS_A_MINUTE
        break
      case 'h':
      case C.H:
        step = C.MILLISECONDS_A_HOUR
        break
      case 'd':
      case C.D:
        step = C.MILLISECONDS_A_DAY
        break
      case 'w':
      case C.W:
        step = C.MILLISECONDS_A_WEEK
        break
      default: // s seconds
        step = C.MILLISECONDS_A_SECOND
    }
    const nextTimeStamp = this.valueOf() + (number * step)
    return dayjs(nextTimeStamp)
  }

  subtract(number, string) {
    return this.add(number * -1, string)
  }


  format(formatStr = this.$format, L = {}) {
    const weeks = L.WEEKDAYS || this.$L.WEEKDAYS
    const months = L.MONTHS || this.$L.MONTHS
    const str = formatStr || C.FORMAT_DEFAULT
    const zoneStr = Utils.padZoneStr(this.$d.getTimezoneOffset())
    return formatStr.replace(C.REGEX_FORMAT, (match) => {
      if (match.indexOf('[') > -1) return match.replace(/\[|\]/g, '')
      switch (match) {
        case 'YY':
          return String(this.$y).slice(-2)
        case 'YYYY':
          return String(this.$y)
        case 'M':
          return String(this.$M + 1)
        case 'MM':
          return Utils.padStart(this.$M + 1, 2, '0')
        case 'MMM':
          return months[this.$M].slice(0, 3)
        case 'MMMM':
          return months[this.$M]
        case 'D':
          return String(this.$D)
        case 'DD':
          return Utils.padStart(this.$D, 2, '0')
        case 'd':
          return String(this.$W)
        case 'dddd':
          return weeks[this.$W]
        case 'H':
          return String(this.$H)
        case 'HH':
          return Utils.padStart(this.$H, 2, '0')
        case 'h':
        case 'hh':
          if (this.$H === 0) return 12
          return Utils.padStart(this.$H < 13 ? this.$H : this.$H - 12, match === 'hh' ? 2 : 1, '0')
        case 'a':
          return this.$H < 12 ? 'am' : 'pm'
        case 'A':
          return this.$H < 12 ? 'AM' : 'PM'
        case 'm':
          return String(this.$m)
        case 'mm':
          return Utils.padStart(this.$m, 2, '0')
        case 's':
          return String(this.$s)
        case 'ss':
          return Utils.padStart(this.$s, 2, '0')
        case 'SSS':
          return Utils.padStart(this.$ms, 3, '0')
        case 'Z':
          return zoneStr
        default: // 'ZZ'
          return zoneStr.replace(':', '')
      }
    })
  }

  diff(input, units, float) {
    const unit = Utils.prettyUnit(units)
    const that = input instanceof Dayjs ? input : dayjs(input.valueOf())
    const diff = this - that
    let result = Utils.monthDiff(this, that)
    switch (unit) {
      case C.Y:
        result /= 12
        break
      case C.M:
        break
      case C.Q:
        result /= 3
        break
      case C.W:
        result = diff / C.MILLISECONDS_A_WEEK
        break
      case C.D:
        result = diff / C.MILLISECONDS_A_DAY
        break
      case C.S:
        result = diff / C.MILLISECONDS_A_SECOND
        break
      default: // milliseconds
        result = diff
    }
    return float ? result : Utils.absFloor(result)
  }

  daysInMonth() {
    return this.endOf(C.M).$D
  }

  setLocale(l = eng) {
    this.$L = l
    return this
  }

  clone() {
    return new Dayjs({
      date: this.toDate(),
      locale: this.$L,
      format: this.$format
    })
  }

  toDate() {
    return new Date(this.valueOf())
  }

  toArray() {
    return [
      this.$y,
      this.$M,
      this.$D,
      this.$H,
      this.$m,
      this.$s,
      this.$ms
    ]
  }

  toJSON() {
    return this.toISOString() // this.format()
  }

  toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.toDate().toISOString()
  }

  toObject() {
    return {
      years: this.$y,
      months: this.$M,
      date: this.$D,
      hours: this.$H,
      minutes: this.$m,
      seconds: this.$s,
      milliseconds: this.$ms
    }
  }

  toString() {
    return this.$d.toUTCString()
  }
}



const dayjs = config => new Dayjs(config)
const applyExtend = (proto, factory) => {
  factory.extend = (plugin, isNew = false) => { // eslint-disable-line no-param-reassign
    // Return a new subclass instead of the original
    if (isNew) {
      // Extend the class
      class PluginDayjs extends proto {}

      // Apply the plugin
      plugin(PluginDayjs)

      // Make a new factory
      const pluginFactory = config => new PluginDayjs(config)

      // Apply this method, so the subclass can have more plugins
      applyExtend(PluginDayjs, pluginFactory)
      return pluginFactory
    }

    // Apply the plugin
    plugin(Dayjs)
    // Return the factory so it can be chained
    return factory
  }
}
applyExtend(Dayjs, dayjs)


export default dayjs
