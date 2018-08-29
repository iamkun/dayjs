import * as C from './constant'
import U from './utils'

let L = 'en' // global locale
const Ls = {} // global loaded locale
Ls[L] = C.en

const isDayjs = d => d instanceof Dayjs // eslint-disable-line no-use-before-define

const parseLocale = (preset, object, isLocal) => {
  let l
  if (!preset) return null
  if (typeof preset === 'string') {
    if (Ls[preset]) {
      l = preset
    }
    if (object) {
      Ls[preset] = object
      l = preset
    }
  } else {
    const { name } = preset
    Ls[name] = preset
    l = name
  }
  if (!isLocal) L = l
  return l
}

const dayjs = (date, c) => {
  if (isDayjs(date)) {
    return date.clone()
  }
  const cfg = c || {}
  cfg.date = date
  return new Dayjs(cfg) // eslint-disable-line no-use-before-define
}

const wrapper = (date, instance) => dayjs(date, { locale: instance.$L })

const Utils = U // for plugin use
Utils.parseLocale = parseLocale
Utils.isDayjs = isDayjs
Utils.wrapper = wrapper

const parseDate = (date) => {
  let reg
  if (date === null) return new Date(NaN) // Treat null as an invalid date
  if (Utils.isUndefined(date)) return new Date()
  if (date instanceof Date) return date
  // eslint-disable-next-line no-cond-assign
  if ((typeof date === 'string')
    && (/.*[^Z]$/i.test(date)) // looking for a better way
    && (reg = date.match(C.REGEX_PARSE))) {
    // 2018-08-08 or 20180808
    return new Date(
      reg[1], reg[2] - 1, reg[3] || 1,
      reg[5] || 0, reg[6] || 0, reg[7] || 0, reg[8] || 0
    )
  }
  return new Date(date) // timestamp
}

class Dayjs {
  constructor(cfg) {
    this.parse(cfg) // for plugin
  }

  parse(cfg) {
    this.$d = parseDate(cfg.date)
    this.init(cfg)
  }

  init(cfg) {
    this.$y = this.$d.getFullYear()
    this.$M = this.$d.getMonth()
    this.$D = this.$d.getDate()
    this.$W = this.$d.getDay()
    this.$H = this.$d.getHours()
    this.$m = this.$d.getMinutes()
    this.$s = this.$d.getSeconds()
    this.$ms = this.$d.getMilliseconds()
    this.$L = this.$L || parseLocale(cfg.locale, null, true) || L
  }

  // eslint-disable-next-line class-methods-use-this
  $utils() {
    return Utils
  }

  isValid() {
    return !(this.$d.toString() === 'Invalid Date')
  }

  $compare(that) {
    return this.valueOf() - dayjs(that).valueOf()
  }

  isSame(that) {
    return this.$compare(that) === 0
  }

  isBefore(that) {
    return this.$compare(that) < 0
  }

  isAfter(that) {
    return this.$compare(that) > 0
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
    const instanceFactory = (d, m) => {
      const ins = wrapper(new Date(this.$y, m, d), this)
      return isStartOf ? ins : ins.endOf(C.D)
    }
    const instanceFactorySet = (method, slice) => {
      const argumentStart = [0, 0, 0, 0]
      const argumentEnd = [23, 59, 59, 999]
      return wrapper(this.toDate()[method].apply( // eslint-disable-line prefer-spread
        this.toDate(),
        isStartOf ? argumentStart.slice(slice) : argumentEnd.slice(slice)
      ), this)
    }
    switch (unit) {
      case C.Y:
        return isStartOf ? instanceFactory(1, 0) :
          instanceFactory(31, 11)
      case C.M:
        return isStartOf ? instanceFactory(1, this.$M) :
          instanceFactory(0, this.$M + 1)
      case C.W:
        return isStartOf ? instanceFactory(this.$D - this.$W, this.$M) :
          instanceFactory(this.$D + (6 - this.$W), this.$M)
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
      case C.D:
        this.$d.setDate(this.$D + (int - this.$W))
        break
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


  set(string, int) {
    return this.clone().$set(string, int)
  }

  add(number, units) {
    number = Number(number) // eslint-disable-line no-param-reassign
    const unit = Utils.prettyUnit(units)
    const instanceFactory = (u, n) => {
      const date = this.set(C.DATE, 1).set(u, n + number)
      return date.set(C.DATE, Math.min(this.$D, date.daysInMonth()))
    }
    if (unit === C.M) {
      return instanceFactory(C.M, this.$M)
    }
    if (unit === C.Y) {
      return instanceFactory(C.Y, this.$y)
    }
    let step
    switch (unit) {
      case C.MIN:
        step = C.MILLISECONDS_A_MINUTE
        break
      case C.H:
        step = C.MILLISECONDS_A_HOUR
        break
      case C.D:
        step = C.MILLISECONDS_A_DAY
        break
      case C.W:
        step = C.MILLISECONDS_A_WEEK
        break
      case C.S:
        step = C.MILLISECONDS_A_SECOND
        break
      default: // ms
        step = 1
    }
    const nextTimeStamp = this.valueOf() + (number * step)
    return wrapper(nextTimeStamp, this)
  }

  subtract(number, string) {
    return this.add(number * -1, string)
  }


  format(formatStr) {
    const str = formatStr || C.FORMAT_DEFAULT
    const zoneStr = Utils.padZoneStr(this.$d.getTimezoneOffset())
    const locale = this.$locale()
    const {
      weekdays, months
    } = locale
    const getShort = (arr, index, full, length) => (
      (arr && arr[index]) || full[index].substr(0, length)
    )
    return str.replace(C.REGEX_FORMAT, (match) => {
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
          return getShort(locale.monthsShort, this.$M, months, 3)
        case 'MMMM':
          return months[this.$M]
        case 'D':
          return String(this.$D)
        case 'DD':
          return Utils.padStart(this.$D, 2, '0')
        case 'd':
          return String(this.$W)
        case 'dd':
          return getShort(locale.weekdaysMin, this.$W, weekdays, 2)
        case 'ddd':
          return getShort(locale.weekdaysShort, this.$W, weekdays, 3)
        case 'dddd':
          return weekdays[this.$W]
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
    const that = dayjs(input)
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
      case C.H:
        result = diff / C.MILLISECONDS_A_HOUR
        break
      case C.MIN:
        result = diff / C.MILLISECONDS_A_MINUTE
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

  $locale() { // get locale object
    return Ls[this.$L]
  }

  locale(preset, object) {
    const that = this.clone()
    that.$L = parseLocale(preset, object, true)
    return that
  }

  clone() {
    return wrapper(this.toDate(), this)
  }

  toDate() {
    return new Date(this.$d)
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
    return this.toISOString()
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

dayjs.extend = (plugin, option) => {
  plugin(option, Dayjs, dayjs)
  return dayjs
}

dayjs.locale = parseLocale

dayjs.isDayjs = isDayjs

dayjs.en = Ls[L]

export default dayjs
