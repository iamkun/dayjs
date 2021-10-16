import {
  DEFAULT_FORMAT,
  INVALID_DATE_STRING,
  MILLISECONDS_A_HOUR,
  MILLISECONDS_A_MINUTE,
  MILLISECONDS_A_SECOND,
  REGEX_FORMAT,
  REGEX_PARSE,
} from './constants'
import { normalize as normalizeUnit } from './units'
import { cloneDate, isEmptyObject, padZoneStr, pick } from './utils'
import en from './locale/en'
import type { GetUnit, Unit, UnitBase } from './units'

import type { Locale } from './locale'
import type {
  DateInput,
  DayjsFn,
  Extend,
  FormatOption,
  ParseOptions,
  Plugin,
  PluginOption,
} from './types'

type GetterFn = {
  (value: number): Dayjs
  (): number
}

const parseDate = (date: Exclude<DateInput, Dayjs>) => {
  if (date instanceof Date) return cloneDate(date)
  // null is invalid
  else if (date === null) return new Date(Number.NaN)
  else if (date === undefined) return new Date()
  else if (isEmptyObject(date)) return new Date()
  else if (Array.isArray(date))
    return new Date(
      date[0],
      date[1],
      date[2],
      date[3],
      date[4],
      date[5],
      date[6]
    )
  else if (typeof date === 'string' && !/z$/i.test(date)) {
    const d = date.match(REGEX_PARSE)
    if (d) {
      const m = +d[2] - 1 || 0
      const ms = +(d[7] || '0').slice(0, 3)
      return new Date(
        +d[1],
        m,
        +(d[3] || 1),
        +(d[4] || 0),
        +(d[5] || 0),
        +(d[6] || 0),
        ms
      )
    }
  }
  return new Date(date)
}

export class Dayjs extends (class {} as Extend) {
  /** Date object */
  private _d: Date = new Date()
  private _options: ParseOptions

  private _year!: number
  private _month!: number
  private _date!: number
  private _hour!: number
  private _minute!: number
  private _second!: number
  private _millisecond!: number
  /** Day of week */
  private _day!: number

  year!: GetterFn
  month!: GetterFn
  date!: GetterFn
  hour!: GetterFn
  minute!: GetterFn
  second!: GetterFn
  millisecond!: GetterFn
  day!: GetterFn

  constructor(date: Exclude<DateInput, Dayjs>, options?: ParseOptions) {
    super()
    this._options = options || {}

    this.parse(date)
    this.#init()
  }

  parse(date: Exclude<DateInput, Dayjs>) {
    this._d = parseDate(date)
  }

  #init() {
    this._year = this._d.getFullYear()
    this._month = this._d.getMonth()
    this._date = this._d.getDate()
    this._hour = this._d.getHours()
    this._minute = this._d.getMinutes()
    this._second = this._d.getSeconds()
    this._millisecond = this._d.getMilliseconds()
    this._day = this._d.getDay()
  }

  valueOf() {
    return this._d.getTime()
  }

  unix() {
    return Math.floor(this.valueOf() / 1000)
  }

  isValid() {
    return !(this._d.toString() === INVALID_DATE_STRING)
  }

  private _startEndOf(unit: Unit, isStartOf: boolean) {
    const factory = ({
      year = this._year,
      month = this._month,
      date = this._date,
      hour = this._hour,
      minute = this._minute,
      second = this._second,
      millisecond = this._millisecond,
    }: Partial<Record<UnitBase, number>>) =>
      new Dayjs(
        [year, month, date, hour, minute, second, millisecond],
        this._options
      )

    const numbers = isStartOf
      ? { month: 0, date: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }
      : {
          month: 11,
          date: 31,
          hour: 23,
          minute: 59,
          second: 59,
          millisecond: 999,
        }

    const normalizedUnit = normalizeUnit(unit)
    switch (normalizedUnit) {
      case 'year':
        return factory(numbers)
      case 'month':
        return factory(
          isStartOf
            ? pick(numbers, ['date', 'hour', 'minute', 'second', 'millisecond'])
            : {
                month: this._month + 1,
                date: 0,
                ...pick(numbers, ['hour', 'minute', 'second', 'millisecond']),
              }
        )
      case 'date':
      case 'day':
        return factory(
          pick(numbers, ['hour', 'minute', 'second', 'millisecond'])
        )
      case 'hour':
        return factory(pick(numbers, ['minute', 'second', 'millisecond']))
      case 'minute':
        return factory(pick(numbers, ['second', 'millisecond']))
      case 'second':
        return factory(pick(numbers, ['millisecond']))
      case 'week': {
        const weekStart = en.weekStart || 0
        const gap =
          (this._day < weekStart ? this._day + 7 : this._day) - weekStart
        return factory({
          date: isStartOf ? this._date - gap : this._date + (6 - gap),
          ...pick(numbers, ['hour', 'minute', 'second', 'millisecond']),
        })
      }
      case 'millisecond':
        return this.clone()
    }
  }

  startOf(unit: Unit) {
    return this._startEndOf(unit, true)
  }

  endOf(unit: Unit) {
    return this._startEndOf(unit, false)
  }

  isSame(that?: DateInput, unit: Unit = 'millisecond') {
    const other = dayjs(that)
    return this.startOf(unit) <= other && other <= this.endOf(unit)
  }

  isAfter(that?: DateInput, unit: Unit = 'millisecond') {
    return dayjs(that) < this.startOf(unit)
  }

  isBefore(that?: DateInput, unit: Unit = 'millisecond') {
    return this.endOf(unit) < dayjs(that)
  }

  clone() {
    return new Dayjs(this._d, this._options)
  }

  get(unit: UnitBase | 'day') {
    return this[`_${unit}` as const]
  }

  set(unit: UnitBase | 'day', value: number) {
    const methods = {
      year: 'setFullYear',
      month: 'setMonth',
      date: 'setDate',
      hour: 'setHours',
      minute: 'setMinutes',
      second: 'setSeconds',
      millisecond: 'setMilliseconds',
      day: 'setDate',
    } as const
    const method = methods[unit]
    if (!method) return this

    const date = cloneDate(this._d)
    const val = unit === 'day' ? this._date + (value - this._day) : value
    if (unit === 'month' || unit === 'year') {
      date.setDate(1)
      date[method](val)
      date.setDate(Math.min(this._date, dayjs(date).daysInMonth()))
    } else if (method) date[method](val)

    return dayjs(date)
  }

  daysInMonth() {
    return this.endOf('month').date()
  }

  toDate() {
    return cloneDate(this._d)
  }

  toJSON() {
    return this.isValid() ? this.toISOString() : null
  }

  toISOString() {
    return this._d.toISOString()
  }

  toString() {
    return this._d.toUTCString()
  }

  utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this._d.getTimezoneOffset() / 15) * 15
  }

  format(formatStr?: string) {
    const locale = en
    if (!this.isValid()) return /* locale.invalidDate || */ INVALID_DATE_STRING

    const str = formatStr || DEFAULT_FORMAT
    const zoneStr = padZoneStr(this.utcOffset())

    const { weekdays, months } = locale
    const getShort = (
      arr: string[] | undefined,
      index: number,
      full?: string[],
      length?: number
    ) => arr?.[index] || full?.[index].slice(0, Math.max(0, length ?? 0))

    const getHour = (num: number) =>
      `${this._hour % 12 || 12}`.padStart(num, '0')
    const meridiem =
      locale.meridiem ||
      (((hour, minute, isLowercase) => {
        const m = hour < 12 ? 'AM' : 'PM'
        return isLowercase ? m.toLowerCase() : m
      }) as NonNullable<Locale['meridiem']>)

    const matches: Record<string, string | number | undefined> = {
      YY: String(this._year).slice(-2),
      YYYY: this._year,
      M: this._month + 1,
      MM: `${this._month + 1}`.padStart(2, '0'),
      MMM: getShort(locale.monthsShort, this._month, months, 3),
      MMMM: getShort(months, this._month),
      D: this._date,
      DD: `${this._date}`.padStart(2, '0'),
      d: String(this._day),
      dd: getShort(locale.weekdaysMin, this._day, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this._day, weekdays, 3),
      dddd: weekdays[this._day],
      H: String(this._hour),
      HH: `${this._hour}`.padStart(2, '0'),
      h: getHour(1),
      hh: getHour(2),
      a: meridiem(this._hour, this._minute, true),
      A: meridiem(this._hour, this._minute, false),
      m: String(this._minute),
      mm: `${this._minute}`.padStart(2, '0'),
      s: String(this._second),
      ss: `${this._second}`.padStart(2, '0'),
      SSS: `${this._millisecond}`.padStart(3, '0'),
      Z: zoneStr, // 'ZZ' logic below
    }

    return str.replace(
      REGEX_FORMAT,
      (match, $1) => $1 || matches[match] || zoneStr.replace(':', '')
    ) // 'ZZ'
  }

  add(number: number, unit: Exclude<Unit, GetUnit<'D'>>) {
    const normalizedUnit = normalizeUnit(unit)
    const factory = (n: number) =>
      this.date(this.date() + Math.round(n * number))

    if (normalizedUnit === 'month') {
      return this.set('month', this._month + number)
    } else if (normalizedUnit === 'year') {
      return this.set('year', this._year + number)
    } else if (normalizedUnit === 'day') {
      return factory(1)
    } else if (normalizedUnit === 'week') {
      return factory(7)
    }

    const steps: Record<typeof normalizedUnit, number> = {
      minute: MILLISECONDS_A_MINUTE,
      hour: MILLISECONDS_A_HOUR,
      second: MILLISECONDS_A_SECOND,
      millisecond: 1,
    }
    const step = steps[normalizedUnit]
    const nextTimeStamp = this.valueOf() + number * step
    return new Dayjs(nextTimeStamp, this._options)
  }

  subtract(number: number, unit: Exclude<Unit, GetUnit<'D'>>) {
    return this.add(number * -1, unit)
  }
}

const getterOrSetter = (unit: UnitBase | 'day') => {
  function fn(value: number): Dayjs
  function fn(): number
  function fn(this: Dayjs, value?: number): number | Dayjs {
    if (value === undefined) {
      return this.get(unit)
    } else {
      return this.set(unit, value)
    }
  }
  return fn
}

;(
  [
    'year',
    'month',
    'date',
    'hour',
    'minute',
    'second',
    'millisecond',
    'day',
  ] as const
).forEach((unit) => (Dayjs.prototype[unit] = getterOrSetter(unit)))

// Fn
export const isDayjs = (value: unknown): value is Dayjs =>
  value instanceof Dayjs
export const unix = (timestamp: number) => dayjs(timestamp * 1000)
export const extend = <P extends Plugin<any>>(
  plugin: P,
  option?: PluginOption<P>
) => {
  if (!plugin._i) {
    // install plugin only once
    plugin(Dayjs, dayjs, option)
    plugin._i = true
  }
  return dayjs
}

export const dayjs: DayjsFn = (
  date?: DateInput,
  format?: FormatOption,
  locale?: string | boolean,
  strict?: boolean
) => {
  if (isDayjs(date)) return date

  if (typeof locale === 'boolean') {
    strict = locale
    locale = undefined
  }
  const options: ParseOptions = {
    format,
    locale,
    strict,
  }
  return new Dayjs(date, options)
}
dayjs.isDayjs = isDayjs
dayjs.unix = unix
dayjs.extend = extend

export default dayjs
