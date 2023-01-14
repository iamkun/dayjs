// Macedonian [mk]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'mk',
  weekdays: [
    'недела',
    'понеделник',
    'вторник',
    'среда',
    'четврток',
    'петок',
    'сабота',
  ],
  months: [
    'јануари',
    'февруари',
    'март',
    'април',
    'мај',
    'јуни',
    'јули',
    'август',
    'септември',
    'октомври',
    'ноември',
    'декември',
  ],
  weekStart: 1,
  weekdaysShort: ['нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб'],
  monthsShort: [
    'јан',
    'фев',
    'мар',
    'апр',
    'мај',
    'јун',
    'јул',
    'авг',
    'сеп',
    'окт',
    'ное',
    'дек',
  ],
  weekdaysMin: ['нe', 'пo', 'вт', 'ср', 'че', 'пе', 'сa'],
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'D.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY H:mm',
    LLLL: 'dddd, D MMMM YYYY H:mm',
  },
  relativeTime: {
    future: 'после %s',
    past: 'пред %s',
    s: 'неколку секунди',
    m: 'минута',
    mm: '%d минути',
    h: 'час',
    hh: '%d часа',
    d: 'ден',
    dd: '%d дена',
    M: 'месец',
    MM: '%d месеци',
    y: 'година',
    yy: '%d години',
  },
}

dayjs.locale(locale, true)

export default locale
