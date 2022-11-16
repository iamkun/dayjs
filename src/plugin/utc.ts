import {
  GETTER_SETTER_METHODS,
  MILLISECONDS_A_MINUTE,
  UNIT_MINUTE,
  UNIT_MONTH,
  UNIT_YEAR,
} from '../constants'
import { Dayjs } from '..'
import { normalize as normalizeUnit } from '../units'
import type { DateInput, FormatOption, ParseOptions, Plugin } from '..'
import type { DateParts } from '../types'
import type { GetUnit, Unit, UnitBaseGetSet, UnitLong } from '../units'

declare module '../types' {
  export interface ParseOptions {
    utc?: boolean
    _offset?: number
  }

  export interface DayjsFn {
    utc: (
      date?: Exclude<DateInput, Dayjs>,
      format?: FormatOption | ParseOptions,
      locale?: string | boolean,
      strict?: boolean
    ) => Dayjs
  }
}

declare module '../dayjs' {
  export interface Dayjs {
    _offset: number
    _utcMode?: boolean
    _localOffset: number
    utc(keepLocalTime?: boolean): Dayjs
    local: () => Dayjs
    isUTC(): boolean
    toISOString(): string
    toString(): string
    toDate(this: Dayjs, type?: string): Date
  }
}

const REGEX_VALID_OFFSET_FORMAT = /[+-]\d\d(?::?\d\d)?/g
const REGEX_OFFSET_HOURS_MINUTES_FORMAT = /([+-]|\d\d)/g

function offsetFromString(value: string) {
  const offset = value.match(REGEX_VALID_OFFSET_FORMAT)

  if (!offset) {
    return null
  }

  const [indicator, hoursOffset, minutesOffset = 0] = `${offset[0]}`.match(
    REGEX_OFFSET_HOURS_MINUTES_FORMAT
  ) || ['-', 0, 0]
  const totalOffsetInMinutes = +hoursOffset * 60 + +minutesOffset

  if (totalOffsetInMinutes === 0) {
    return 0
  }

  return indicator === '+' ? totalOffsetInMinutes : -totalOffsetInMinutes
}

const plugin: Plugin = (cls, fn) => {
  fn.utc = function (
    date?: DateInput,
    format?: FormatOption | ParseOptions,
    locale?: string | boolean,
    strict?: boolean
  ) {
    if (typeof locale === 'boolean') {
      strict = locale
      locale = undefined
    }

    let options: ParseOptions
    if (typeof format !== 'object') {
      options = {
        format,
        locale,
        strict,
        utc: true,
      }
    } else {
      options = format as ParseOptions
      options.utc = true
    }

    return new Dayjs(date, options)
  }

  function utc(this: Dayjs, keepLocalTime?: boolean): Dayjs {
    const cfg: ParseOptions = { locale: this.locale(), utc: true }
    const newDate = fn(this.toDate(), cfg)
    if (keepLocalTime) {
      return newDate.add(this.utcOffset(), UNIT_MINUTE)
    }
    return newDate
  }
  cls.prototype.utc = utc

  function isUTC(this: Dayjs): boolean {
    return !!this._utcMode
  }
  cls.prototype.isUTC = isUTC

  function local(this: Dayjs): Dayjs {
    const cfg: ParseOptions = {
      ...this.internalConstructorOptions(),
      locale: this.locale(),
      utc: false,
    }
    return fn(this.toDate(), cfg)
  }
  cls.prototype.local = local

  const oldConstructorPreParseHook = cls.prototype.constructorPreParseHook
  function constructorPreParseHook(this: Dayjs, options: ParseOptions) {
    if (options.utc) {
      this._utcMode = true
    }

    // As dayjs is immutable, we have to transfer all plugin specific options to the created clone
    if (options._offset !== undefined) {
      this._offset = options._offset
    }
    oldConstructorPreParseHook.call(this, options)
  }
  cls.prototype.constructorPreParseHook = constructorPreParseHook

  const oldDateFromParts = cls.prototype.dateFromParts
  function dateFromParts(this: Dayjs, parsedDateParts: DateParts): Date {
    if (this._utcMode) {
      return new Date(
        Date.UTC(
          parsedDateParts.year,
          parsedDateParts.month,
          parsedDateParts.date,
          parsedDateParts.hour,
          parsedDateParts.minute,
          parsedDateParts.second,
          parsedDateParts.millisecond
        )
      )
    } else {
      return oldDateFromParts.call(this, parsedDateParts)
    }
  }
  cls.prototype.dateFromParts = dateFromParts

  const oldDateToParts = cls.prototype.dateToParts
  function dateToParts(this: Dayjs, date: Date) {
    if (this._utcMode) {
      return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        date: date.getUTCDate(),
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
        millisecond: date.getUTCMilliseconds(),
      } as DateParts
    } else {
      return oldDateToParts.call(this, date)
    }
  }
  cls.prototype.dateToParts = dateToParts

  const oldDatePartFromUnit = cls.prototype.datePartFromUnit
  function datePartFromUnit(
    this: Dayjs,
    date: Date,
    unit: Exclude<UnitLong, 'week'>
  ) {
    if (this._utcMode) {
      return date[`getUTC${GETTER_SETTER_METHODS[unit]}`]()
    }
    return oldDatePartFromUnit.call(this, date, unit)
  }
  cls.prototype.datePartFromUnit = datePartFromUnit

  const oldValueOf = cls.prototype.valueOf
  function valueOf(this: Dayjs) {
    if (this._offset !== undefined) {
      const addedOffset =
        this._offset +
        (this._localOffset || this.internalDate().getTimezoneOffset())
      return this.internalDate().valueOf() - addedOffset * MILLISECONDS_A_MINUTE
    } else {
      return oldValueOf.call(this)
    }
  }
  cls.prototype.valueOf = valueOf

  const oldSet = cls.prototype.set
  function set(this: Dayjs, unit: UnitBaseGetSet, value: number) {
    if (this._utcMode) {
      const normalizedUnit = normalizeUnit(unit)
      let method = GETTER_SETTER_METHODS[normalizedUnit]
      if (!method) return this.clone()

      const date = this.toDate()

      // If unit is day (of week), we need to calculate and set the date (day of month)
      if (method === 'Day') {
        method = 'Date' // day of month
        value = this.date() + (value - this.day())
      }

      if (unit === UNIT_MONTH || unit === UNIT_YEAR) {
        const offsetDate = date.getTimezoneOffset()
        date.setDate(1)
        // if switching to the first day of the month changes the TimezoneOffset
        // (in month with start or end of DST), setUTCMonth would change the time of day.
        if (date.getTimezoneOffset() === offsetDate) {
          date[`setUTC${method}`](value)
        } else {
          date[`set${method}`](value)
        }
        date.setDate(Math.min(this.date(), fn(date).daysInMonth()))
      } else if (method) {
        date[`setUTC${method}`](value)
      }

      return fn(date, this.internalConstructorOptions())
    }
    return oldSet.call(this, unit, value)
  }
  cls.prototype.set = set

  const oldToISOString = cls.prototype.toISOString
  function toISOString(this: Dayjs) {
    if (this._offset !== undefined) {
      return this.toDate().toISOString()
    } else {
      return oldToISOString.call(this)
    }
  }
  cls.prototype.toISOString = toISOString

  const oldUtcOffsetGetterHook = cls.prototype.utcOffsetGetterHook
  function utcOffsetGetterHook(this: Dayjs): number {
    if (this._utcMode) {
      return 0
    }
    if (this._offset !== undefined) {
      return this._offset
    }
    return oldUtcOffsetGetterHook.call(this)
  }
  cls.prototype.utcOffsetGetterHook = utcOffsetGetterHook

  function utcOffsetSetterHook(
    this: Dayjs,
    offset: number | string,
    keepLocalTime?: boolean
  ): Dayjs {
    if (typeof offset === 'string') {
      const parsedOffset = offsetFromString(offset)
      if (parsedOffset === null) {
        return this.clone()
      } else {
        offset = parsedOffset
      }
    }

    // If the input is less than 16 and greater than -16, it will interpret
    // your input as hours instead.
    const offsetAsMinutes = Math.abs(offset) <= 16 ? offset * 60 : offset
    // Make date.add set the cached values without utc mode; this fixes issue
    // with wrong output of format() after using .utcOffset(offset, true)
    let ins = this.local()
    if (keepLocalTime) {
      if (this._utcMode) {
        const tzOffset = ins.internalDate().getTimezoneOffset()
        ins = ins.add(tzOffset, 'minute')
      }
      ins._offset = offsetAsMinutes
      ins._utcMode = offset === 0
      return ins
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    if (offset !== 0) {
      const localTimezoneOffset = this._utcMode
        ? this.toDate().getTimezoneOffset()
        : -1 * this.utcOffset()
      ins = this.local().add(offsetAsMinutes + localTimezoneOffset, 'minute')
      ins._offset = offsetAsMinutes
      ins._localOffset = localTimezoneOffset
    } else {
      ins = this.utc()
    }
    return ins
  }
  cls.prototype.utcOffsetSetterHook = utcOffsetSetterHook

  const oldFormat = cls.prototype.format
  const UTC_FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ss[Z]'
  function format(this: Dayjs, formatStr?: string) {
    const formatString = formatStr || (this._utcMode ? UTC_FORMAT_DEFAULT : '')
    return oldFormat.call(this, formatString)
  }
  cls.prototype.format = format

  const oldDiff = cls.prototype.diff
  function diff(
    this: Dayjs,
    input: DateInput,
    units: Exclude<Unit, GetUnit<'D'>> = 'ms',
    float = false
  ) {
    if (input && this._utcMode === (input as Dayjs)?._utcMode) {
      return oldDiff.call(this, input, units, float)
    }
    const localThis = this.local()
    const localInput = fn(input).local()
    return oldDiff.call(localThis, localInput, units, float)
  }
  cls.prototype.diff = diff
}

export default plugin
