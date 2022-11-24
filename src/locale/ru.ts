// Russian [ru]

import { dayjs } from '../dayjs'
import type { Dayjs } from '../dayjs'
import type { Locale, MonthNames } from '.'

const monthFormat: MonthNames<string> = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]
const monthStandalone: MonthNames = [
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
]

const monthShortFormat: MonthNames<string> = [
  'янв.',
  'февр.',
  'мар',
  'апр.',
  'мая',
  'июня',
  'июля',
  'авг.',
  'сент.',
  'окт.',
  'нояб.',
  'дек.',
]
const monthShortStandalone: MonthNames<string> = [
  'янв.',
  'февр.',
  'март',
  'апр.',
  'май',
  'июнь',
  'июль',
  'авг.',
  'сент.',
  'окт.',
  'нояб.',
  'дек.',
]

const MONTHS_IN_FORMAT = /D[Do]?(\[[^[\]]*]|\s)+MMMM?/

function plural(concatenatedSingulars: string, index: number) {
  const forms = concatenatedSingulars.split('_')
  return index % 10 === 1 && index % 100 !== 11
    ? forms[0]
    : index % 10 >= 2 &&
      index % 10 <= 4 &&
      (index % 100 < 10 || index % 100 >= 20)
    ? forms[1]
    : forms[2]
}
function relativeTimeWithPlural(
  timeValue: string | number,
  withoutSuffix: boolean,
  range: string
): string {
  const format = {
    mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
    hh: 'час_часа_часов',
    dd: 'день_дня_дней',
    MM: 'месяц_месяца_месяцев',
    yy: 'год_года_лет',
  }
  if (range === 'm') {
    return withoutSuffix ? 'минута' : 'минуту'
  }

  return `${timeValue} ${plural(format[range as keyof object], +timeValue)}`
}

const months = function (this: Dayjs, format: string): string {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[this.month()]
  }
  return monthStandalone[this.month()]
}
months.standalone = monthStandalone
months.format = monthFormat

const monthsShort = function (this: Dayjs, format: string): string {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthShortFormat[this.month()]
  }
  return monthShortStandalone[this.month()]
}
monthsShort.standalone = monthShortStandalone
monthsShort.format = monthShortFormat

const locale: Locale = {
  name: 'ru',
  weekdays: [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ],
  weekdaysShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
  weekdaysMin: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  months,
  monthsShort,
  ordinal: (n: string) => n,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY г.',
    LLL: 'D MMMM YYYY г., H:mm',
    LLLL: 'dddd, D MMMM YYYY г., H:mm',
  },
  relativeTime: {
    future: 'через %s',
    past: '%s назад',
    s: 'несколько секунд',
    m: relativeTimeWithPlural,
    mm: relativeTimeWithPlural,
    h: 'час',
    hh: relativeTimeWithPlural,
    d: 'день',
    dd: relativeTimeWithPlural,
    M: 'месяц',
    MM: relativeTimeWithPlural,
    y: 'год',
    yy: relativeTimeWithPlural,
  },
  meridiem: (hour: number) => {
    if (hour < 4) {
      return 'ночи'
    }
    if (hour < 12) {
      return 'утра'
    }
    if (hour < 17) {
      return 'дня'
    }
    return 'вечера'
  },
}

dayjs.locale(locale, true)

export default locale
