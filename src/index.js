import * as Constant from './constant'
import * as Utils from './utils'

const parseConfig = (config) => {
  if (!config) return new Date()
  if (config instanceof Date) return config
  const configStr = String(config)
  if (/^(\d){8}$/.test(configStr)) {
    const y = configStr.substr(0, 4)
    const m = configStr.substr(4, 2)
    const d = configStr.substr(6, 2)
    return new Date(y, m - 1, d)
  }
  return new Date(config) // e.g. timestamp
}

class Dayjs {
  constructor(config) {
    this.$d = parseConfig(config)
    this.init()
  }

  init() {
    this.timeZone = this.$d.getTimezoneOffset() / 60
    this.timeZoneString = Utils.padStart(String(this.timeZone * -1).replace(/^(.)?(\d)/, '$10$200'), 5, '+')
    this.$y = this.$d.getFullYear()
    this.$M = this.$d.getMonth()
    this.$D = this.$d.getDate()
    this.$W = this.$d.getDay()
    this.$H = this.$d.getHours()
    this.$m = this.$d.getMinutes()
    this.$s = this.$d.getSeconds()
    this.$ms = this.$d.getMilliseconds()
  }

  year() {
    return this.$y
  }

  month() {
    return this.$M
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

  startOf(arg, isStartOf = true) {
    switch (arg) {
      case 'year':
        if (isStartOf) {
          return new Dayjs(new Date(this.year(), 0, 1))
        }
        return new Dayjs(new Date(this.year(), 11, 31)).endOf('day')
      case 'month':
        if (isStartOf) {
          return new Dayjs(new Date(this.year(), this.month(), 1))
        }
        return new Dayjs(new Date(this.year(), this.month() + 1, 0)).endOf('day')
      case 'day':
        if (isStartOf) {
          return new Dayjs(this.toDate().setHours(0, 0, 0, 0))
        }
        return new Dayjs(this.toDate().setHours(23, 59, 59, 999))
      default:
        return this.clone()
    }
  }

  endOf(arg) {
    return this.startOf(arg, false)
  }

  mSet(string, int) {
    switch (string) {
      case 'date':
        this.$d.setDate(int)
        break
      case 'month':
        this.$d.setMonth(int)
        break
      case 'year':
        this.$d.setFullYear(int)
        break
      default:
        break
    }
    this.init()
    return this
  }

  set(string, int) {
    if (!Utils.isNumber(int)) return this
    return this.clone().mSet(string, int)
  }

  add(number, string) {
    if (['M', 'months'].indexOf(string) > -1) {
      let date = this.set('date', 1).set('month', this.month() + number)
      date = date.set('date', Math.min(this.date(), date.daysInMonth()))
      return date
    }
    let step
    switch (string) {
      case 'm':
      case 'minutes':
        step = Constant.MILLISECONDS_A_MINUTE
        break
      case 'h':
      case 'hours':
        step = Constant.MILLISECONDS_A_HOUR
        break
      case 'd':
      case 'days':
        step = Constant.MILLISECONDS_A_DAY
        break
      case 'w':
      case 'weeks':
        step = Constant.MILLISECONDS_A_WEEK
        break
      default: // s seconds
        step = Constant.MILLISECONDS_A_SECOND
    }
    const nextTimeStamp = this.valueOf() + (number * step)
    return new Dayjs(nextTimeStamp)
  }

  subtract(number, string) {
    return this.add(number * -1, string)
  }

  format(formatStr = 'YYYY-MM-DDTHH:mm:ssZ') {
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return formatStr.replace(/Y{2,4}|M{1,2}|D{1,2}|d{1,4}|H{1,2}|m{1,2}|s{1,2}|Z{1,2}/g, (match) => {
      switch (match) {
        case 'YY':
          return String(this.$y).slice(-2)
        case 'YYYY':
          return String(this.$y)
        case 'M':
          return String(this.$M + 1)
        case 'MM':
          return Utils.padStart(String(this.$M + 1), 2, '0')
        case 'D':
          return String(this.$D)
        case 'DD':
          return Utils.padStart(String(this.$D), 2, '0')
        case 'd':
          return String(this.$W)
        case 'dddd':
          return weeks[this.$W]
        case 'H':
          return String(this.$H)
        case 'HH':
          return Utils.padStart(String(this.$H), 2, '0')
        case 'm':
          return String(this.$m)
        case 'mm':
          return Utils.padStart(String(this.$m), 2, '0')
        case 's':
          return String(this.$s)
        case 'ss':
          return Utils.padStart(String(this.$s), 2, '0')
        case 'Z':
          return `${this.timeZoneString.slice(0, -2)}:00`
        default: // 'ZZ'
          return this.timeZoneString
      }
    })
  }

  diff(input, unit, float = false) {
    const that = input instanceof Dayjs ? input : new Dayjs(input)
    const diff = this - that
    let result = Utils.monthDiff(this, that)
    switch (unit) {
      case 'years':
        result /= 12
        break
      case 'months':
        break
      case 'quarters':
        result /= 3
        break
      case 'weeks':
        result = diff / Constant.MILLISECONDS_A_WEEK
        break
      case 'days':
        result = diff / Constant.MILLISECONDS_A_DAY
        break
      case 'seconds':
        result = diff / Constant.MILLISECONDS_A_SECOND
        break
      default: // milliseconds
        result = diff
    }
    return float ? result : Utils.absFloor(result)
  }

  daysInMonth() {
    return this.endOf('month').date()
  }

  clone() {
    return new Dayjs(this)
  }

  toDate() {
    return new Date(this.$d)
  }

  toArray() {
    return [
      this.year(),
      this.month(),
      this.date(),
      this.hour(),
      this.minute(),
      this.second(),
      this.millisecond()
    ]
  }

  toJSON() {
    return this.toISOString()
  }

  toISOString() {
    return this.toDate().toISOString()
  }

  toObject() {
    return {
      years: this.year(),
      months: this.month(),
      date: this.date(),
      hours: this.hour(),
      minutes: this.minute(),
      seconds: this.second(),
      milliseconds: this.millisecond()
    }
  }

  toString() {
    return this.$d.toUTCString()
  }
}

export default config => (new Dayjs(config))
