import {
  DEFAULT_FORMAT,
  GETTER_SETTER_METHODS,
  INVALID_DATE_STRING,
  MILLISECONDS_A_DAY,
  MILLISECONDS_A_HOUR,
  MILLISECONDS_A_MINUTE,
  MILLISECONDS_A_SECOND,
  MILLISECONDS_A_WEEK,
  REGEX_FORMAT,
  REGEX_PARSE,
  UNIT_DATE,
  UNIT_DAY,
  UNIT_HOUR,
  UNIT_MILLISECOND,
  UNIT_MINUTE,
  UNIT_MONTH,
  UNIT_QUARTER,
  UNIT_SECOND,
  UNIT_WEEK,
  UNIT_YEAR,
} from './constants'
import { normalize as normalizeUnit } from './units'
import {
  absFloor,
  absRound,
  cloneDate,
  isEmptyObject,
  monthDiff,
  padZoneStr,
  pick,
} from './utils'
import en from './locale/en'
import type {
  GetUnit,
  Unit,
  UnitBase,
  UnitBaseAddSubDiff,
  UnitBaseGetSet,
} from './units'

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

let globalLocale = 'en'
const loadedLocales: Record<string, Locale> = {}
loadedLocales[globalLocale] = en

type GetterFn = {
  (value: number): Dayjs
  (): number
}

const parseArrayToDate = (dateArray: number[]) => {
  const dateArrayTuple: [
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ] = [0, 0, 1, 0, 0, 0, 0]
  dateArray.forEach((value, index) => {
    if (value !== undefined) {
      dateArrayTuple[index] = value
    }
  })
  return new Date(...dateArrayTuple)
}

const parseDate = (date: Exclude<DateInput, Dayjs>) => {
  if (date instanceof Date) return cloneDate(date)
  // null is invalid
  else if (date === null) return new Date(Number.NaN)
  else if (date === undefined) return new Date()
  else if (isEmptyObject(date)) return new Date()
  else if (Array.isArray(date)) return parseArrayToDate(date)
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

const parseLocale = (
  preset?: string | Locale,
  installOnly?: boolean,
  newLocale?: Locale
): string => {
  let locale: string | undefined
  if (!preset) {
    return globalLocale
  }

  if (typeof preset === 'string') {
    const presetLower = preset.toLowerCase()
    if (loadedLocales[presetLower]) {
      locale = presetLower
    }
    if (newLocale) {
      loadedLocales[presetLower] = newLocale
      locale = presetLower
    }
    const presetSplit = preset.split('-')
    if (!locale && presetSplit.length > 1) {
      return parseLocale(presetSplit[0])
    }
  } else {
    const { name } = preset
    loadedLocales[name] = preset
    locale = name
  }
  if (!installOnly && locale) globalLocale = locale
  return locale || (!installOnly ? globalLocale : '')
}
export { parseLocale as locale }

export class Dayjs extends (class {} as Extend) {
  /** Date object */
  private _d: Date = new Date()
  private _options: ParseOptions

  private _year!: number
  private _month!: number
  private _date!: number // day of month
  private _hour!: number
  private _minute!: number
  private _second!: number
  private _millisecond!: number
  private _day!: number // day of week

  private _locale: string

  year!: GetterFn
  month!: GetterFn
  date!: GetterFn // day of month
  hour!: GetterFn
  minute!: GetterFn
  second!: GetterFn
  millisecond!: GetterFn
  day!: GetterFn // day of week

  constructor(date: Exclude<DateInput, Dayjs>, options?: ParseOptions) {
    super()
    this._options = options || {}
    this._locale = parseLocale(this._options.locale, true)

    this.parse(date)
    this._init()
  }

  parse(date: Exclude<DateInput, Dayjs>) {
    this._d = parseDate(date)
  }

  private _init() {
    for (const unit of [
      UNIT_YEAR,
      UNIT_MONTH,
      UNIT_DATE,
      UNIT_HOUR,
      UNIT_MINUTE,
      UNIT_SECOND,
      UNIT_MILLISECOND,
      UNIT_DAY,
    ] as const) {
      this[`_${unit}`] = this._d[`get${GETTER_SETTER_METHODS[unit]}`]()
    }
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
      ? {
          [UNIT_MONTH]: 0,
          [UNIT_DATE]: 1,
          [UNIT_HOUR]: 0,
          [UNIT_MINUTE]: 0,
          [UNIT_SECOND]: 0,
          [UNIT_MILLISECOND]: 0,
        }
      : {
          [UNIT_MONTH]: 11,
          [UNIT_DATE]: 31,
          [UNIT_HOUR]: 23,
          [UNIT_MINUTE]: 59,
          [UNIT_SECOND]: 59,
          [UNIT_MILLISECOND]: 999,
        }

    const normalizedUnit = normalizeUnit(unit)
    switch (normalizedUnit) {
      case UNIT_YEAR:
        return factory(numbers)
      case UNIT_MONTH:
        return factory(
          isStartOf
            ? pick(numbers, [
                UNIT_DATE,
                UNIT_HOUR,
                UNIT_MINUTE,
                UNIT_SECOND,
                UNIT_MILLISECOND,
              ])
            : {
                month: this._month + 1,
                date: 0,
                ...pick(numbers, [
                  UNIT_HOUR,
                  UNIT_MINUTE,
                  UNIT_SECOND,
                  UNIT_MILLISECOND,
                ]),
              }
        )
      case UNIT_DATE:
      case UNIT_DAY:
        return factory(
          pick(numbers, [UNIT_HOUR, UNIT_MINUTE, UNIT_SECOND, UNIT_MILLISECOND])
        )
      case UNIT_HOUR:
        return factory(
          pick(numbers, [UNIT_MINUTE, UNIT_SECOND, UNIT_MILLISECOND])
        )
      case UNIT_MINUTE:
        return factory(pick(numbers, [UNIT_SECOND, UNIT_MILLISECOND]))
      case UNIT_SECOND:
        return factory(pick(numbers, [UNIT_MILLISECOND]))
      case UNIT_WEEK: {
        const weekStart = this.$locale().weekStart || 0
        const gap =
          (this._day < weekStart ? this._day + 7 : this._day) - weekStart
        return factory({
          date: isStartOf ? this._date - gap : this._date + (6 - gap),
          ...pick(numbers, [
            UNIT_HOUR,
            UNIT_MINUTE,
            UNIT_SECOND,
            UNIT_MILLISECOND,
          ]),
        })
      }
      case UNIT_MILLISECOND:
        return this.clone()
    }
  }

  $locale() {
    return loadedLocales[this._locale]
  }

  locale(): string
  locale(preset: string | Locale, locale?: Locale): Dayjs
  locale(preset?: string | Locale, locale?: Locale) {
    if (!preset) return this._locale
    const that = this.clone()
    const nextLocaleName = parseLocale(preset, true, locale)
    if (nextLocaleName) that._locale = nextLocaleName
    return that
  }

  startOf(unit: Unit) {
    return this._startEndOf(unit, true)
  }

  endOf(unit: Unit) {
    return this._startEndOf(unit, false)
  }

  isSame(that?: DateInput, unit: Unit = UNIT_MILLISECOND) {
    const other = dayjs(that)
    return this.startOf(unit) <= other && other <= this.endOf(unit)
  }

  isAfter(that?: DateInput, unit: Unit = UNIT_MILLISECOND) {
    return dayjs(that) < this.startOf(unit)
  }

  isBefore(that?: DateInput, unit: Unit = UNIT_MILLISECOND) {
    return this.endOf(unit) < dayjs(that)
  }

  clone() {
    return new Dayjs(this._d, this._options)
  }

  get(unit: UnitBaseGetSet) {
    const normalizedUnit = normalizeUnit(unit)
    return this[`_${normalizedUnit}` as const]
  }

  set(unit: UnitBaseGetSet, value: number) {
    const normalizedUnit = normalizeUnit(unit)
    let method = GETTER_SETTER_METHODS[normalizedUnit]
    if (!method) return this

    const date = cloneDate(this._d)

    // If unit is day (of week), we need to calculate and set the date (day of month)
    if (method === 'Day') {
      method = 'Date' // day of month
      value = this._date + (value - this._day)
    }

    if (unit === UNIT_MONTH || unit === UNIT_YEAR) {
      date.setDate(1)
      date[`set${method}`](value)
      date.setDate(Math.min(this._date, dayjs(date).daysInMonth()))
    } else if (method) {
      date[`set${method}`](value)
    }

    return dayjs(date)
  }

  daysInMonth() {
    return this.endOf(UNIT_MONTH).date()
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
    // Remove fractional part (seconds) from offset (just like moment.js does)
    return -Math.round(this._d.getTimezoneOffset())
  }

  format(formatStr?: string) {
    const locale = this.$locale()
    if (!this.isValid()) return locale.invalidDate || INVALID_DATE_STRING

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

  add(number: number, unit: UnitBaseAddSubDiff) {
    const normalizedUnit = normalizeUnit(unit)
    const addRoundedToDays = (n: number) =>
      this.date(this.date() + absRound(n * number))

    if (normalizedUnit === UNIT_YEAR) {
      return this.set(UNIT_MONTH, this._month + absRound(number * 12))
    } else if (normalizedUnit === UNIT_MONTH) {
      return this.set(UNIT_MONTH, this._month + absRound(number))
    } else if (normalizedUnit === UNIT_DAY) {
      return this.set(UNIT_DATE, this._date + absRound(number))
    } else if (normalizedUnit === UNIT_WEEK) {
      return addRoundedToDays(7)
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

  subtract(number: number, unit: UnitBaseAddSubDiff) {
    return this.add(number * -1, unit)
  }

  diff(
    input: DateInput,
    units: Exclude<Unit, GetUnit<'D'>> = 'ms',
    float = false
  ) {
    const normalizedUnit = normalizeUnit(units)
    const that = dayjs(input)
    const zoneDelta =
      (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE
    const diff = +this - +that
    let result = monthDiff(this, that)

    result =
      {
        [UNIT_YEAR]: result / 12,
        [UNIT_MONTH]: result,
        [UNIT_QUARTER]: result / 3,
        [UNIT_WEEK]: (diff - zoneDelta) / MILLISECONDS_A_WEEK,
        [UNIT_DAY]: (diff - zoneDelta) / MILLISECONDS_A_DAY,
        [UNIT_HOUR]: diff / MILLISECONDS_A_HOUR,
        [UNIT_MINUTE]: diff / MILLISECONDS_A_MINUTE,
        [UNIT_SECOND]: diff / MILLISECONDS_A_SECOND,
        [UNIT_MILLISECOND]: diff,
      }[normalizedUnit] || diff // milliseconds

    return float ? result : absFloor(result)
  }
}

const getterOrSetter = (unit: UnitBaseGetSet) => {
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

// set getter- / setter-functions to class
;(
  [
    UNIT_YEAR,
    UNIT_MONTH,
    UNIT_DATE,
    UNIT_DAY,
    UNIT_HOUR,
    UNIT_MINUTE,
    UNIT_SECOND,
    UNIT_MILLISECOND,
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

export const dayjs = ((
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
}) as DayjsFn
dayjs.isDayjs = isDayjs
dayjs.unix = unix
dayjs.extend = extend
dayjs.locale = parseLocale

export default dayjs
