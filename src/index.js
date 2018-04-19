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
    this.$date = parseConfig(config)
    this.init()
  }

  init() {
    this.timeZone = this.$date.getTimezoneOffset() / 60
    this.timeZoneString = Utils.padStart(String(this.timeZone * -1).replace(/^(.)?(\d)/, '$10$200'), 5, '+')
    this.$year = this.$date.getFullYear()
    this.$month = this.$date.getMonth()
    this.$day = this.$date.getDate()
    this.$week = this.$date.getDay()
    this.$hour = this.$date.getHours()
    this.$minute = this.$date.getMinutes()
    this.$second = this.$date.getSeconds()
    this.$milliseconds = this.$date.getMilliseconds()
  }

  year() {
    return this.$year
  }

  month() {
    return this.$month
  }

  date() {
    return this.$day
  }

  hour() {
    return this.$hour
  }

  minute() {
    return this.$minute
  }

  second() {
    return this.$second
  }

  millisecond() {
    return this.$milliseconds
  }

  unix() {
    return Math.floor(this.valueOf() / 1000)
  }

  valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$date.getTime()
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

  set(string, int) {
    if (!Utils.isNumber(int)) return this
    switch (string) {
      case 'date':
        this.$date.setDate(int)
        break
      case 'month':
        this.$date.setMonth(int)
        break
      case 'year':
        this.$date.setFullYear(int)
        break
      default:
        break
    }
    this.init()
    return this
  }

  add(number, string) {
    if (['M', 'months'].indexOf(string) > -1) {
      const date = this.clone()
      date.set('date', 1)
      date.set('month', this.month() + number)
      date.set('date', Math.min(this.date(), date.daysInMonth()))
      return date
    }
    let step
    switch (string) {
      case 'm':
      case 'minutes':
        step = Constant.SECONDS_A_MINUTE
        break
      case 'h':
      case 'hours':
        step = Constant.SECONDS_A_HOUR
        break
      case 'd':
      case 'days':
        step = Constant.SECONDS_A_DAY
        break
      case 'w':
      case 'weeks':
        step = Constant.SECONDS_A_WEEK
        break
      default: // s seconds
        step = 1
    }
    const nextTimeStamp = this.unix() + (number * step)
    return new Dayjs(nextTimeStamp * 1000)
  }

  subtract(number, string) {
    return this.add(number * -1, string)
  }

  format(formatStr = 'YYYY-MM-DDTHH:mm:ssZ') {
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return formatStr.replace(/Y{2,4}|M{1,2}|D{1,2}|d{1,4}|H{1,2}|m{1,2}|s{1,2}|Z{1,2}/g, (match) => {
      switch (match) {
        case 'YY':
          return String(this.$year).slice(-2)
        case 'YYYY':
          return String(this.$year)
        case 'M':
          return String(this.$month + 1)
        case 'MM':
          return Utils.padStart(String(this.$month + 1), 2, '0')
        case 'D':
          return String(this.$day)
        case 'DD':
          return Utils.padStart(String(this.$day), 2, '0')
        case 'd':
          return String(this.$week)
        case 'dddd':
          return weeks[this.$week]
        case 'H':
          return String(this.$hour)
        case 'HH':
          return Utils.padStart(String(this.$hour), 2, '0')
        case 'm':
          return String(this.$minute)
        case 'mm':
          return Utils.padStart(String(this.$minute), 2, '0')
        case 's':
          return String(this.$second)
        case 'ss':
          return Utils.padStart(String(this.$second), 2, '0')
        case 'Z':
          return `${this.timeZoneString.slice(0, -2)}:00`
        default: // 'ZZ'
          return this.timeZoneString
      }
    })
  }

  diff(otherDate, unit, float = false) {
    const other = otherDate instanceof Dayjs ? otherDate : new Dayjs(otherDate)
    const returnFloat = result => (float ? result : Math.ceil(result))
    switch (unit) {
      case 'days':
        return returnFloat((this.valueOf() - other.valueOf()) / Constant.MILLISECONDS_A_DAY)
      default:
        return this.valueOf() - other.valueOf()
    }
  }

  daysInMonth() {
    return this.endOf('month').date()
  }

  clone() {
    return new Dayjs(this)
  }

  toDate() {
    return new Date(this.$date)
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
    return this.$date.toUTCString()
  }
}

export default config => (new Dayjs(config))
