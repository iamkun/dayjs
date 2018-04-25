import * as C from './constant'
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

  startOf(units, isStartOf = true) { // isStartOf -> endOf
    const unit = Utils.prettyUnit(units)
    switch (unit) {
      case C.Y:
        if (isStartOf) {
          return new Dayjs(new Date(this.$y, 0, 1))
        }
        return new Dayjs(new Date(this.$y, 11, 31)).endOf('day')
      case C.M:
        if (isStartOf) {
          return new Dayjs(new Date(this.$y, this.$M, 1))
        }
        return new Dayjs(new Date(this.$y, this.$M + 1, 0)).endOf('day')
      case C.W:
        if (isStartOf) {
          return new Dayjs(new Date(this.$y, this.$M, this.$D - this.$W))
        }
        return new Dayjs(new Date(this.$y, this.$M, this.$D + (6 - this.$W))).endOf('day')
      case C.D:
        if (isStartOf) {
          return new Dayjs(this.toDate().setHours(0, 0, 0, 0))
        }
        return new Dayjs(this.toDate().setHours(23, 59, 59, 999))
      case C.H:
        if (isStartOf) {
          return new Dayjs(this.toDate().setMinutes(0, 0, 0))
        }
        return new Dayjs(this.toDate().setMinutes(59, 59, 999))
      case C.MIN:
        if (isStartOf) {
          return new Dayjs(this.toDate().setSeconds(0, 0))
        }
        return new Dayjs(this.toDate().setSeconds(59, 999))
      case C.S:
        if (isStartOf) {
          return new Dayjs(this.toDate().setMilliseconds(0, 0))
        }
        return new Dayjs(this.toDate().setMilliseconds(59, 999))
      default:
        return this.clone()
    }
  }

  endOf(arg) {
    return this.startOf(arg, false)
  }

  mSet(units, int) {
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
    return new Dayjs(nextTimeStamp)
  }

  subtract(number, string) {
    return this.add(number * -1, string)
  }

  format(formatStr = 'YYYY-MM-DDTHH:mm:ssZ') {
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return formatStr.replace(/Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|m{1,2}|s{1,2}|Z{1,2}/g, (match) => {
      switch (match) {
        case 'YY':
          return String(this.$y).slice(-2)
        case 'YYYY':
          return String(this.$y)
        case 'M':
          return String(this.$M + 1)
        case 'MM':
          return Utils.padStart(String(this.$M + 1), 2, '0')
        case 'MMM':
          return months[this.$M].slice(0, 3)
        case 'MMMM':
          return months[this.$M]
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

  diff(input, units, float = false) {
    const unit = Utils.prettyUnit(units)
    const that = input instanceof Dayjs ? input : new Dayjs(input)
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

  clone() {
    return new Dayjs(this)
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

export default config => (new Dayjs(config))
