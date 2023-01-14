// Slovenian [sl]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'sl',
  weekdays: [
    'nedelja',
    'ponedeljek',
    'torek',
    'sreda',
    'četrtek',
    'petek',
    'sobota',
  ],
  months: [
    'januar',
    'februar',
    'marec',
    'april',
    'maj',
    'junij',
    'julij',
    'avgust',
    'september',
    'oktober',
    'november',
    'december',
  ],
  weekStart: 1,
  weekdaysShort: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  monthsShort: [
    'jan.',
    'feb.',
    'mar.',
    'apr.',
    'maj.',
    'jun.',
    'jul.',
    'avg.',
    'sep.',
    'okt.',
    'nov.',
    'dec.',
  ],
  weekdaysMin: ['ne', 'po', 'to', 'sr', 'če', 'pe', 'so'],
  ordinal: (n) => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm',
  },
  relativeTime: {
    future: 'čez %s',
    past: 'pred %s',
    s: 'nekaj sekund',
    m: 'minuta',
    mm: '%d minut',
    h: 'ura',
    hh: '%d ur',
    d: 'dan',
    dd: '%d dni',
    M: 'mesec',
    MM: '%d mesecev',
    y: 'leto',
    yy: '%d let',
  },
}

dayjs.locale(locale, true)

export default locale
