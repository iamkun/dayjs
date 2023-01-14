// Bulgarian [bg]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'bg',
  weekdays: [
    'неделя',
    'понеделник',
    'вторник',
    'сряда',
    'четвъртък',
    'петък',
    'събота',
  ],
  weekdaysShort: ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб'],
  weekdaysMin: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  months: [
    'януари',
    'февруари',
    'март',
    'април',
    'май',
    'юни',
    'юли',
    'август',
    'септември',
    'октомври',
    'ноември',
    'декември',
  ],
  monthsShort: [
    'янр',
    'фев',
    'мар',
    'апр',
    'май',
    'юни',
    'юли',
    'авг',
    'сеп',
    'окт',
    'ное',
    'дек',
  ],
  weekStart: 1,
  ordinal: (n) => {
    const last2Digits = n % 100
    if (last2Digits > 10 && last2Digits < 20) {
      return `${n}-ти`
    }

    const lastDigit = n % 10
    if (lastDigit === 1) {
      return `${n}-ви`
    } else if (lastDigit === 2) {
      return `${n}-ри`
    } else if (lastDigit === 7 || lastDigit === 8) {
      return `${n}-ми`
    }

    return `${n}-ти`
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'D.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY H:mm',
    LLLL: 'dddd, D MMMM YYYY H:mm',
  },
  relativeTime: {
    future: 'след %s',
    past: 'преди %s',
    s: 'няколко секунди',
    m: 'минута',
    mm: '%d минути',
    h: 'час',
    hh: '%d часа',
    d: 'ден',
    dd: '%d дена',
    M: 'месец',
    MM: '%d месеца',
    y: 'година',
    yy: '%d години',
  },
}

dayjs.locale(locale, true)

export default locale
