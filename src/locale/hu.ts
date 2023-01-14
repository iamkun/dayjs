// Hungarian [hu]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'hu',
  weekdays: [
    'vasárnap',
    'hétfő',
    'kedd',
    'szerda',
    'csütörtök',
    'péntek',
    'szombat',
  ],
  weekdaysShort: ['vas', 'hét', 'kedd', 'sze', 'csüt', 'pén', 'szo'],
  weekdaysMin: ['v', 'h', 'k', 'sze', 'cs', 'p', 'szo'],
  months: [
    'január',
    'február',
    'március',
    'április',
    'május',
    'június',
    'július',
    'augusztus',
    'szeptember',
    'október',
    'november',
    'december',
  ],
  monthsShort: [
    'jan',
    'feb',
    'márc',
    'ápr',
    'máj',
    'jún',
    'júl',
    'aug',
    'szept',
    'okt',
    'nov',
    'dec',
  ],
  ordinal: (n) => `${n}.`,
  weekStart: 1,
  relativeTime: {
    future: '%s múlva',
    past: '%s',
    s: ((_, s, ___, isFuture) =>
      `néhány másodperc${isFuture || s ? '' : 'e'}`)(),
    m: ((_, s, ___, isFuture) => `egy perc${isFuture || s ? '' : 'e'}`)(),
    mm: ((n, s, ___, isFuture) => `${n} perc${isFuture || s ? '' : 'e'}`)(),
    h: ((_, s, ___, isFuture) => `egy ${isFuture || s ? 'óra' : 'órája'}`)(),
    hh: ((n, s, ___, isFuture) => `${n} ${isFuture || s ? 'óra' : 'órája'}`)(),
    d: ((_, s, ___, isFuture) => `egy ${isFuture || s ? 'nap' : 'napja'}`)(),
    dd: ((n, s, ___, isFuture) => `${n} ${isFuture || s ? 'nap' : 'napja'}`)(),
    M: ((_, s, ___, isFuture) =>
      `egy ${isFuture || s ? 'hónap' : 'hónapja'}`)(),
    MM: ((n, s, ___, isFuture) =>
      `${n} ${isFuture || s ? 'hónap' : 'hónapja'}`)(),
    y: ((_, s, ___, isFuture) => `egy ${isFuture || s ? 'év' : 'éve'}`)(),
    yy: ((n, s, ___, isFuture) => `${n} ${isFuture || s ? 'év' : 'éve'}`)(),
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'YYYY.MM.DD.',
    LL: 'YYYY. MMMM D.',
    LLL: 'YYYY. MMMM D. H:mm',
    LLLL: 'YYYY. MMMM D., dddd H:mm',
  },
}

dayjs.locale(locale, true)

export default locale
