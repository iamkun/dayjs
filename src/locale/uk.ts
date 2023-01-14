// Ukrainian [uk]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'relativeTime' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'relativeTime' plugin.
// https://github.com/iamkun/dayjs/commit/0fdac93ff2531542301b76952be9b084b2e2dfa0

/*
const monthFormat = 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
const monthStandalone = 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')

const MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/

function plural(word, num) {
  const forms = word.split('_')
  return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]) // eslint-disable-line
}

function relativeTimeWithPlural(number, withoutSuffix, key) {
  const format = {
    ss: withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
    mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
    hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
    dd: 'день_дні_днів',
    MM: 'місяць_місяці_місяців',
    yy: 'рік_роки_років'
  }
  if (key === 'm') {
    return withoutSuffix ? 'хвилина' : 'хвилину'
  } else if (key === 'h') {
    return withoutSuffix ? 'година' : 'годину'
  }

  return `${number} ${plural(format[key], +number)}`
}
*/

const locale: Locale = {
  name: 'uk',
  weekdays: [
    'неділя',
    'понеділок',
    'вівторок',
    'середа',
    'четвер',
    'п’ятниця',
    'субота',
  ],
  weekdaysShort: ['ндл', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
  weekdaysMin: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  months: [
    'січня',
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня',
  ],
  monthsShort: [
    'січ',
    'лют',
    'бер',
    'квіт',
    'трав',
    'черв',
    'лип',
    'серп',
    'вер',
    'жовт',
    'лист',
    'груд',
  ],
  weekStart: 1,
  relativeTime: {
    future: 'за %s',
    past: '%s тому',
    s: 'декілька секунд',
    m: 'хвилину',
    mm: '%d хвилин',
    h: 'годину',
    hh: '%d годин',
    d: 'день',
    dd: '%d днів',
    M: 'місяць',
    MM: '%d місяців',
    y: 'рік',
    yy: '%d років',
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY р.',
    LLL: 'D MMMM YYYY р., HH:mm',
    LLLL: 'dddd, D MMMM YYYY р., HH:mm',
  },
}

dayjs.locale(locale, true)

export default locale
