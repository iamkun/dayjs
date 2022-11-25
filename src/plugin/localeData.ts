import { monthOrDayFormat } from './localizedFormat.utils'
import type { Dayjs } from 'src/dayjs'
import type {
  DayNames,
  Locale,
  MonthNames,
  MonthNamesFunction,
} from 'src/locale'
import type { Plugin } from 'src/types'

export type LocaleData = {
  weekdays: (instance?: Dayjs) => string | DayNames
  weekdaysShort: (instance?: Dayjs) => string | DayNames
  weekdaysMin: (instance?: Dayjs) => string | DayNames
  months: (instance?: Dayjs) => string | MonthNames
  monthsShort: (instance?: Dayjs) => string | MonthNames
  ordinal: (number: string, period?: 'W') => string
  firstDayOfWeek: () => number
  firstDayOfYear: () => number
  meridiem: (hour: number, minute: number, isLowercase: boolean) => string
  longDateFormat: (format: string) => string
}

declare module '../types' {
  export interface DayjsFn {
    weekdays: (localeOrder?: boolean) => string | DayNames
    weekdaysShort: (localeOrder?: boolean) => string | DayNames
    weekdaysMin: (localeOrder?: boolean) => string | DayNames
    months: (instance?: Dayjs) => string | MonthNames
    monthsShort: (instance?: Dayjs) => string | MonthNames
    localeData: () => LocaleData
  }
}
declare module '../dayjs' {
  export interface Dayjs {
    localeData: () => LocaleData
  }
}

const plugin: Plugin = (cls, fn) => {
  // locale needed later
  const proto = cls.prototype

  const getLocalePart = (part: DayNames | MonthNames | MonthNamesFunction) =>
    part &&
    (Array.isArray(part)
      ? (part as DayNames | MonthNames)
      : (part as MonthNamesFunction).standalone)

  const getShort = (
    ins: Dayjs | Locale,
    datePartName: string,
    fullnameListName?: string,
    numberOfCharacters?: number,
    localeOrder?: boolean
  ) => {
    const locale: Locale = fn.isDayjs(ins) ? ins.loadedLocale() : ins
    const targetLocale = getLocalePart(locale[datePartName as keyof object])
    const fullLocale = getLocalePart(locale[fullnameListName as keyof object])
    const result =
      targetLocale || fullLocale.map((f) => f.slice(0, numberOfCharacters))

    if (!localeOrder) return result

    const { weekStart } = locale
    return result.map(
      (_, index) => result[(index + (weekStart || 0)) % 7]
    ) as unknown as DayNames | MonthNames
  }

  const getDayjsLocaleObject = () => fn.loadedLocales[fn.locale()]

  const getLongDateFormat = (locale: Locale, format: string) =>
    locale.formats
      ? locale.formats[format as keyof object] ||
        monthOrDayFormat(locale.formats[format.toUpperCase() as keyof object])
      : ''

  const localeData = function (this: Dayjs) {
    return {
      weekdays: (instance?: Dayjs) =>
        instance ? instance.format('dddd') : getShort(this, 'weekdays'),
      weekdaysMin: (instance?: Dayjs) =>
        instance
          ? instance.format('dd')
          : getShort(this, 'weekdaysMin', 'weekdays', 2),
      weekdaysShort: (instance?: Dayjs) =>
        instance
          ? instance.format('ddd')
          : getShort(this, 'weekdaysShort', 'weekdays', 3),
      months: (instance?: Dayjs) =>
        instance ? instance.format('MMMM') : getShort(this, 'months'),
      monthsShort: (instance?: Dayjs) =>
        instance
          ? instance.format('MMM')
          : getShort(this, 'monthsShort', 'months', 3),
      ordinal: this.loadedLocale().ordinal,
      firstDayOfWeek: () => this.loadedLocale().weekStart || 0,
      firstDayOfYear: () => this.loadedLocale().yearStart || 0,
      longDateFormat: (format: string) =>
        getLongDateFormat(this.loadedLocale(), format),
      meridiem: this.loadedLocale().meridiem,
    } as LocaleData
  }

  proto.localeData = function () {
    return localeData.bind(this)()
  }

  fn.localeData = () => {
    const localeObject = getDayjsLocaleObject()
    return {
      weekdays: () => fn.weekdays(),
      weekdaysShort: () => fn.weekdaysShort(),
      weekdaysMin: () => fn.weekdaysMin(),
      months: () => fn.months(),
      monthsShort: () => fn.monthsShort(),
      ordinal: localeObject.ordinal,
      firstDayOfWeek: () => localeObject.weekStart || 0,
      firstDayOfYear: () => localeObject.yearStart || 0,
      longDateFormat: (format: string) =>
        getLongDateFormat(localeObject, format),
      meridiem: localeObject.meridiem,
    } as LocaleData
  }

  fn.months = () =>
    getShort(getDayjsLocaleObject(), 'months') as MonthNames<string>

  fn.monthsShort = () =>
    getShort(
      getDayjsLocaleObject(),
      'monthsShort',
      'months',
      3
    ) as MonthNames<string>

  fn.weekdays = (localeOrder?: boolean) =>
    getShort(
      getDayjsLocaleObject(),
      'weekdays',
      undefined,
      undefined,
      localeOrder
    ) as DayNames<string>

  fn.weekdaysShort = (localeOrder?: boolean) =>
    getShort(
      getDayjsLocaleObject(),
      'weekdaysShort',
      'weekdays',
      3,
      localeOrder
    ) as DayNames<string>

  fn.weekdaysMin = (localeOrder) =>
    getShort(
      getDayjsLocaleObject(),
      'weekdaysMin',
      'weekdays',
      2,
      localeOrder
    ) as DayNames<string>
}

export default plugin
