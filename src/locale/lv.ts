// Latvian [lv]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'lv',
  weekdays: [
    'svētdiena',
    'pirmdiena',
    'otrdiena',
    'trešdiena',
    'ceturtdiena',
    'piektdiena',
    'sestdiena',
  ],
  months: [
    'janvāris',
    'februāris',
    'marts',
    'aprīlis',
    'maijs',
    'jūnijs',
    'jūlijs',
    'augusts',
    'septembris',
    'oktobris',
    'novembris',
    'decembris',
  ],
  weekStart: 1,
  weekdaysShort: ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S'],
  monthsShort: [
    'jan',
    'feb',
    'mar',
    'apr',
    'mai',
    'jūn',
    'jūl',
    'aug',
    'sep',
    'okt',
    'nov',
    'dec',
  ],
  weekdaysMin: ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY.',
    LL: 'YYYY. [gada] D. MMMM',
    LLL: 'YYYY. [gada] D. MMMM, HH:mm',
    LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm',
  },
  relativeTime: {
    future: 'pēc %s',
    past: 'pirms %s',
    s: 'dažām sekundēm',
    m: 'minūtes',
    mm: '%d minūtēm',
    h: 'stundas',
    hh: '%d stundām',
    d: 'dienas',
    dd: '%d dienām',
    M: 'mēneša',
    MM: '%d mēnešiem',
    y: 'gada',
    yy: '%d gadiem',
  },
}

dayjs.locale(locale, true)

export default locale
