// Hebrew [he]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const texts = {
  s: 'מספר שניות',
  ss: '%d שניות',
  m: 'דקה',
  mm: '%d דקות',
  h: 'שעה',
  hh: '%d שעות',
  hh2: 'שעתיים',
  d: 'יום',
  dd: '%d ימים',
  dd2: 'יומיים',
  M: 'חודש',
  MM: '%d חודשים',
  MM2: 'חודשיים',
  y: 'שנה',
  yy: '%d שנים',
  yy2: 'שנתיים',
}

// function relativeTimeFormatter(number, withoutSuffix, key) {
//   const text = texts[key + (number === 2 ? '2' : '')] || texts[key]
//   return text.replace('%d', number)
// }

const locale: Locale = {
  name: 'he',
  weekdays: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
  weekdaysShort: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
  weekdaysMin: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו', 'ש׳'],
  months: [
    'ינואר',
    'פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר',
  ],
  monthsShort: [
    'ינו',
    'פבר',
    'מרץ',
    'אפר',
    'מאי',
    'יונ',
    'יול',
    'אוג',
    'ספט',
    'אוק',
    'נוב',
    'דצמ',
  ],
  relativeTime: {
    future: 'בעוד %s',
    past: 'לפני %s',
    s: texts.s,
    m: texts.m,
    mm: texts.mm,
    h: texts.h,
    hh: texts.hh,
    d: texts.d,
    dd: texts.dd,
    M: texts.M,
    MM: texts.MM,
    y: texts.y,
    yy: texts.yy,
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [ב]MMMM YYYY',
    LLL: 'D [ב]MMMM YYYY HH:mm',
    LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
    l: 'D/M/YYYY',
    ll: 'D MMM YYYY',
    lll: 'D MMM YYYY HH:mm',
    llll: 'ddd, D MMM YYYY HH:mm',
  },
}

dayjs.locale(locale, true)

export default locale
