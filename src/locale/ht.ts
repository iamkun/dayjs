// Haitian Creole (Haiti) [ht]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ht',
  weekdays: [
    'dimanch',
    'lendi',
    'madi',
    'mèkredi',
    'jedi',
    'vandredi',
    'samdi',
  ],
  months: [
    'janvye',
    'fevriye',
    'mas',
    'avril',
    'me',
    'jen',
    'jiyè',
    'out',
    'septanm',
    'oktòb',
    'novanm',
    'desanm',
  ],
  weekdaysShort: ['dim.', 'len.', 'mad.', 'mèk.', 'jed.', 'van.', 'sam.'],
  monthsShort: [
    'jan.',
    'fev.',
    'mas',
    'avr.',
    'me',
    'jen',
    'jiyè.',
    'out',
    'sept.',
    'okt.',
    'nov.',
    'des.',
  ],
  weekdaysMin: ['di', 'le', 'ma', 'mè', 'je', 'va', 'sa'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'nan %s',
    past: 'sa gen %s',
    s: 'kèk segond',
    m: 'yon minit',
    mm: '%d minit',
    h: 'inèdtan',
    hh: '%d zè',
    d: 'yon jou',
    dd: '%d jou',
    M: 'yon mwa',
    MM: '%d mwa',
    y: 'yon ane',
    yy: '%d ane',
  },
}

dayjs.locale(locale, true)

export default locale
