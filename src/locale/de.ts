// German [de]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'relativeTime' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'relativeTime' plugin.
// https://github.com/iamkun/dayjs/commit/4e2802cc3bec2941ffb737a15fb531c90951eafe

const texts = {
  s: 'ein paar Sekunden',
  m: ['eine Minute', 'einer Minute'],
  mm: '%d Minuten',
  h: ['eine Stunde', 'einer Stunde'],
  hh: '%d Stunden',
  d: ['ein Tag', 'einem Tag'],
  dd: ['%d Tage', '%d Tagen'],
  M: ['ein Monat', 'einem Monat'],
  MM: ['%d Monate', '%d Monaten'],
  y: ['ein Jahr', 'einem Jahr'],
  yy: ['%d Jahre', '%d Jahren'],
}

// function relativeTimeFormatter(number, withoutSuffix, key) {
//   let l = texts[key]
//   if (Array.isArray(l)) {
//     l = l[withoutSuffix ? 0 : 1]
//   }
//   return l.replace('%d', number)
// }

const locale: Locale = {
  name: 'de',
  weekdays: [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ],
  weekdaysShort: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  weekdaysMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  months: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  monthsShort: [
    'Jan.',
    'Feb.',
    'März',
    'Apr.',
    'Mai',
    'Juni',
    'Juli',
    'Aug.',
    'Sept.',
    'Okt.',
    'Nov.',
    'Dez.',
  ],
  ordinal: (n) => `${n}.`,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LTS: 'HH:mm:ss',
    LT: 'HH:mm',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY HH:mm',
    LLLL: 'dddd, D. MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'in %s',
    past: 'vor %s',
    s: texts.s,
    m: texts.m[0],
    mm: texts.mm,
    h: texts.h[0],
    hh: texts.hh,
    d: texts.d[0],
    dd: texts.dd[0],
    M: texts.M[0],
    MM: texts.MM[0],
    y: texts.y[0],
    yy: texts.yy[0],
  },
}

dayjs.locale(locale, true)

export default locale
