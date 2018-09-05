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

const wrapper = (date, instance) => dayjs(date, { locale: instance.$L, utc: instance.$u })

const Utils = U // for plugin use
Utils.parseLocale = parseLocale
Utils.isDayjs = isDayjs
Utils.wrapper = wrapper

const parseDate = (cfg) => {
  const { date } = cfg
  let reg
  if (date === null) return new Date(NaN) // Treat null as an invalid date
  if (Utils.isUndefined(date)) return new Date()
  if (date instanceof Date) return date
  // eslint-disable-next-line no-cond-assign
  if ((typeof date === 'string')
    && (/.*[^Z]$/i.test(date)) // looking for a better way
    && (reg = date.match(C.REGEX_PARSE))) {
    // 2018-08-08 or 20180808
    const year = reg[1]
    const month = reg[2] - 1
    const day = reg[3] || 1
    const hours = reg[5] || 0
    const minutes = reg[6] || 0
    const seconds = reg[7] || 0
    const milliseconds = reg[8] || 0
    return cfg && cfg.utc
      ? new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds))
      : new Date(year, month, day, hours, minutes, seconds, milliseconds)
  }
  return new Date(date) // timestamp
}

class Dayjs {
  constructor(cfg) {
    this.parse(cfg) // for plugin
  }

  parse(cfg) {
    this.$d = parseDate(cfg)
    this.init(cfg)
  }

  init(cfg) {
    const utc = cfg && !!cfg.utc
    const date = this.$d
    this.$u = utc
    if (utc) {
      this.$y = date.getUTCFullYear()
      this.$M = date.getUTCMonth()
      this.$D = date.getUTCDate()
      this.$W = date.getUTCDay()
      this.$H = date.getUTCHours()
      this.$m = date.getUTCMinutes()
      this.$s = date.getUTCSeconds()
      this.$ms = date.getUTCMilliseconds()
    } else {
      this.$y = date.getFullYear()
      this.$M = date.getMonth()
      this.$D = date.getDate()
      this.$W = date.getDay()
      this.$H = date.getHours()
      this.$m = date.getMinutes()
      this.$s = date.getSeconds()
      this.$ms = date.getMilliseconds()
    }
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
    const setMethods = this.$u
      ? ['setUTCHours', 'setUTCMinutes', 'setUTCSeconds', 'setUTCMilliseconds']
      : ['setHours', 'setMinutes', 'setSeconds', 'setMilliseconds']
    const instanceFactory = (d, m) => {
      const date = this.$u
        ? new Date(Date.UTC(this.$y, m, d))
        : new Date(this.$y, m, d)
      const ins = wrapper(date, this)
      return isStartOf ? ins : ins.endOf(C.D)
    }
    const instanceFactorySet = (slice) => {
      const argumentStart = [0, 0, 0, 0]
      const argumentEnd = [23, 59, 59, 999]
      return wrapper(this.toDate()[setMethods[slice]].apply( // eslint-disable-line prefer-spread
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
        return instanceFactorySet(0)
      case C.H:
        return instanceFactorySet(1)
      case C.MIN:
        return instanceFactorySet(2)
      case C.S:
        return instanceFactorySet(3)
      default:
        return this.clone()
    }
  }

  endOf(arg) {
    return this.startOf(arg, false)
  }

  $set(units, int) { // private set
    const unit = Utils.prettyUnit(units)
    const setMethods = this.$u
      ? {
        year: 'setUTCFullYear',
        month: 'setUTCMonth',
        date: 'setUTCDate',
        hours: 'setUTCHours',
        minutes: 'setUTCMinutes',
        seconds: 'setUTCSeconds',
        milliseconds: 'setUTCMilliseconds'
      }
      : {
        year: 'setFullYear',
        month: 'setMonth',
        date: 'setDate',
        hours: 'setHours',
        minutes: 'setMinutes',
        seconds: 'setSeconds',
        milliseconds: 'setMilliseconds'
      }
    switch (unit) {
      case C.D:
        this.$d[setMethods.date](this.$D + (int - this.$W))
        break
      case C.DATE:
        this.$d[setMethods.date](int)
        break
      case C.M:
        this.$d[setMethods.month](int)
        break
      case C.Y:
        this.$d[setMethods.year](int)
        break
      case C.H:
        this.$d[setMethods.hours](int)
        break
      case C.MIN:
        this.$d[setMethods.minutes](int)
        break
      case C.S:
        this.$d[setMethods.seconds](int)
        break
      case C.MS:
        this.$d[setMethods.milliseconds](int)
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
    const zoneStr = this.$u ? '+00:00' : Utils.padZoneStr(this.$d.getTimezoneOffset())
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

  isUTC() {
    return this.$u
  }

  utc() {
    return dayjs(this.$d.valueOf(), { locale: this.$L, utc: true })
  }

  local() {
    return dayjs(this.$d.valueOf(), { locale: this.$L, utc: false })
  }

  utcOffset() {
    return this.$u ? 0 : this.$d.getTimezoneOffset()
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
