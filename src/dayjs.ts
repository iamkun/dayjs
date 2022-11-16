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
  UnitLong,
} from './units'

import type { Locale } from './locale'
import type {
  DateInput,
  DateParts,
  DatePartsWithLocale,
  DayjsFn,
  Extend,
  FormatOption,
  GetterFn,
  ParseOptions,
  Plugin,
  PluginOption,
} from './types'

let globalLocale = 'en'
const loadedLocales: Record<string, Locale> = {}
loadedLocales[globalLocale] = en

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

    this.constructorPreParseHook(this._options)
    this._updateInternalDateAndLocale(date, this._options)
    this._updateCachedDateParts()
  }

  /**
   * Hook to give plugins a chance to e.g. add / set properties to Dayjs object
   * @param {ParseOptions} options - options given to constructor
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  constructorPreParseHook(options: ParseOptions) {}

  /**
   * Parse given date and set internal Date object and internal locale.
   * This is an internal function only that handles common cases for 'date'
   * like a Date object or null as date parameter and calls the external
   * hook 'parse' to handle strings and other types of date input.
   * @private
   * @param {Exclude<DateInput, Dayjs>} date
   * @param {ParseOptions} [options]
   */
  private _updateInternalDateAndLocale(
    date: Exclude<DateInput, Dayjs>,
    options?: ParseOptions
  ) {
    let parsedDate = new Date()
    if (date instanceof Date) parsedDate = cloneDate(date)
    else if (date === null)
      parsedDate = new Date(Number.NaN) // as null is invalid
    else if (date !== undefined && !isEmptyObject(date)) {
      const parsedDateParts = this.parse(date, options)
      parsedDate = this.dateFromParts(parsedDateParts)

      // set locale from parsedDatePartsWithLocale (e.g. by plugin 'CustomParseFormat')
      if (parsedDateParts.locale !== undefined) {
        this._locale = parseLocale(parsedDateParts.locale, true)
      }
    }

    this._d = parsedDate
  }

  /**
   * External hook for parsing the input of the Dayjs constructor.
   * Parameter 'options' is used by plugins (e.g. 'utc').
   * @param date - date to parse
   * @param options - options for parsing
   * @returns new DatePartsWithLocale object
   */
  parse(
    date: Exclude<DateInput, Dayjs | undefined | null>,
    options?: ParseOptions
  ) {
    return this._defaultParse(date, options)
  }

  private _defaultParse(
    date: Exclude<DateInput, Dayjs | undefined | null>,
    options?: ParseOptions // eslint-disable-line @typescript-eslint/no-unused-vars
  ) {
    let newDate = {
      year: Number.NaN,
      month: Number.NaN,
      date: Number.NaN,
      hour: Number.NaN,
      minute: Number.NaN,
      second: Number.NaN,
      millisecond: Number.NaN,
    } as DatePartsWithLocale
    if (typeof date === 'string' && !/z$/i.test(date)) {
      const d = date.match(REGEX_PARSE)
      if (d) {
        newDate = {
          year: +d[1],
          month: +d[2] - 1 || 0,
          date: +d[3] || 1,
          hour: +d[4] || 0,
          minute: +d[5] || 0,
          second: +d[6] || 0,
          millisecond: +(d[7] || '0').slice(0, 3),
        }
      } else {
        newDate = this.dateToParts(new Date(date))
      }
    } else if (Array.isArray(date)) {
      // required by '_startEndOf'; replaces plugin 'ArraySupport'
      newDate = this._parseArrayToDateParts(date)
    } else if (typeof date !== 'object') {
      // all other supported input types
      newDate = this.dateToParts(new Date(date))
    }

    return newDate
  }

  private _parseArrayToDateParts(dateArray: number[]) {
    return {
      year: this._valueOrDefault(dateArray[0], 0),
      month: this._valueOrDefault(dateArray[1], 0),
      date: this._valueOrDefault(dateArray[2], 1),
      hour: this._valueOrDefault(dateArray[3], 0),
      minute: this._valueOrDefault(dateArray[4], 0),
      second: this._valueOrDefault(dateArray[5], 0),
      millisecond: this._valueOrDefault(dateArray[6], 0),
    } as DatePartsWithLocale
  }

  private _valueOrDefault(value: any, defaultValue: any) {
    return value !== undefined ? value : defaultValue
  }

  /**
   * External hook for creating a javascript Date object from a DatePartsWithLocale object.
   * Default value for the created date is the current date.
   * @param {DatePartsWithLocale} parsedDateParts - date parts to create a Date from
   * @returns {Date} created date
   */
  dateFromParts(parsedDateParts: DateParts): Date {
    return new Date(
      parsedDateParts.year,
      parsedDateParts.month,
      parsedDateParts.date,
      parsedDateParts.hour,
      parsedDateParts.minute,
      parsedDateParts.second,
      parsedDateParts.millisecond
    )
  }

  /**
   * External hook for creating a DatePartsWithLocale object from a javascript Date object.
   * @param {Date} date - date to be separated into date parts
   * @returns date parts created from the Date object
   */
  dateToParts(date: Date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds(),
    } as DateParts
  }

  /**
   * External hook for extracting a part of a Date object (e.g. the month number);
   * used by plugins like 'Utc'.
   * @param {Date} date - date to extract the part from
   * @param {Exclude<UnitLong, 'week'>} unit - part to be extracted
   * @returns value of the requested part (a number)
   */
  datePartFromUnit(date: Date, unit: Exclude<UnitLong, 'week'>) {
    return date[`get${GETTER_SETTER_METHODS[unit]}`]()
  }

  /**
   * Update internal properties for the date parts from the internal Date object.
   * @private
   */
  private _updateCachedDateParts() {
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
      this[`_${unit}`] = this.datePartFromUnit(this._d, unit)
    }
  }

  valueOf() {
    return this._d.valueOf()
  }

  unix() {
    return Math.floor(this.valueOf() / 1000)
  }

  isValid() {
    return !(this._d.toString() === INVALID_DATE_STRING)
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
        const weekStart = this._getCurrentLocale().weekStart || 0
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

  private _getCurrentLocale() {
    return loadedLocales[this._locale]
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
    // 'cloneDate' does not account for '_offset'!
    return new Date(this.valueOf())
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

  /**
   * Overload signature for utcOffset method, as plugins cannot add a setter to a
   * getter defined in the core module via method overloading.
   * The parameters and the return type are needed e.g. for the utc plugin.
   */
  utcOffset(): number
  utcOffset(offset: number | string, keepLocalTime?: boolean): Dayjs
  utcOffset(offset?: number | string, keepLocalTime?: boolean): number | Dayjs {
    if (offset === undefined) {
      return this.utcOffsetGetterHook()
    } else {
      return this.utcOffsetSetterHook(offset, keepLocalTime)
    }
  }

  /**
   * Hook to give plugins a chance to overload utcOffset getter function;
   * used by plugins like 'Utc'.
   * @param {Date} date - date to extract the part from
   * @returns Dayjs objects utcOffset
   */
  utcOffsetGetterHook() {
    // Remove fractional part (seconds) from offset (just like moment.js does)
    return -Math.round(this._d.getTimezoneOffset())
  }

  /**
   * Hook to give plugins a chance to overload utcOffset setter function;
   * used by plugins like 'Utc'.
   * @param {number | string} offset - new utc offset
   * @param {boolean} keepLocalTime - keep the local time, when setting the new offset
   * @returns new Dayjs object with the given offset
   */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  utcOffsetSetterHook(offset: number | string, keepLocalTime?: boolean): Dayjs {
    throw new Error('No "utcOffsetSetterHook" implemented.')
  }

  format(formatStr?: string) {
    const locale = this._getCurrentLocale()
    if (!this.isValid()) return locale.invalidDate || INVALID_DATE_STRING

    const str = formatStr || DEFAULT_FORMAT
    const zoneStr = padZoneStr(this.utcOffset() as number)

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

  add(value: number, unit: UnitBaseAddSubDiff) {
    const normalizedUnit = normalizeUnit(unit)
    const addRoundedToDays = (n: number) =>
      this.date(this.date() + absRound(n * value))

    if (normalizedUnit === UNIT_YEAR) {
      return this.set(UNIT_MONTH, this._month + absRound(value * 12))
    } else if (normalizedUnit === UNIT_MONTH) {
      return this.set(UNIT_MONTH, this._month + absRound(value))
    } else if (normalizedUnit === UNIT_DAY) {
      return this.set(UNIT_DATE, this._date + absRound(value))
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
    const nextTimeStamp = this.valueOf() + value * step
    return new Dayjs(nextTimeStamp, this._options)
  }

  subtract(value: number, unit: UnitBaseAddSubDiff) {
    return this.add(value * -1, unit)
  }

  diff(
    input: DateInput,
    units: Exclude<Unit, GetUnit<'D'>> = 'ms',
    float = false
  ) {
    const normalizedUnit = normalizeUnit(units)
    const that = dayjs(input)
    const zoneDelta =
      ((that.utcOffset() as number) - (this.utcOffset() as number)) *
      MILLISECONDS_A_MINUTE
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

  /**
   * Gets the internal Date object. Needed by plugins (e.g. 'utc').
   * @returns Date object representing the current Dayjs value.
   */
  internalDate() {
    return new Date(this._d)
  }

  /**
   * Gets a copy of the internal _options object. Needed by plugins (e.g. 'utc').
   * The _options obect may only contain properties that can be serialized by
   * JSON.stringify.
   * @returns copy of the internal _options object.
   */
  internalConstructorOptions() {
    return JSON.parse(JSON.stringify(this._options))
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
  format?: FormatOption | ParseOptions,
  locale?: string | boolean,
  strict?: boolean
) => {
  if (isDayjs(date)) return date.clone()

  if (typeof locale === 'boolean') {
    strict = locale
    locale = undefined
  }

  let options: ParseOptions = {}
  if (typeof format !== 'object') {
    options = {
      format,
      locale,
      strict,
    }
  } else {
    options = {
      ...format,
      locale,
      strict,
    }
  }

  return new Dayjs(date, options)
}) as DayjsFn
dayjs.isDayjs = isDayjs
dayjs.unix = unix
dayjs.extend = extend
dayjs.locale = parseLocale

export default dayjs
