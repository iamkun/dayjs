// Maori [mi]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'mi',
  weekdays: [
    'Rātapu',
    'Mane',
    'Tūrei',
    'Wenerei',
    'Tāite',
    'Paraire',
    'Hātarei',
  ],
  months: [
    'Kohi-tāte',
    'Hui-tanguru',
    'Poutū-te-rangi',
    'Paenga-whāwhā',
    'Haratua',
    'Pipiri',
    'Hōngoingoi',
    'Here-turi-kōkā',
    'Mahuru',
    'Whiringa-ā-nuku',
    'Whiringa-ā-rangi',
    'Hakihea',
  ],
  weekStart: 1,
  weekdaysShort: ['Ta', 'Ma', 'Tū', 'We', 'Tāi', 'Pa', 'Hā'],
  monthsShort: [
    'Kohi',
    'Hui',
    'Pou',
    'Pae',
    'Hara',
    'Pipi',
    'Hōngoi',
    'Here',
    'Mahu',
    'Whi-nu',
    'Whi-ra',
    'Haki',
  ],
  weekdaysMin: ['Ta', 'Ma', 'Tū', 'We', 'Tāi', 'Pa', 'Hā'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY [i] HH:mm',
    LLLL: 'dddd, D MMMM YYYY [i] HH:mm',
  },
  relativeTime: {
    future: 'i roto i %s',
    past: '%s i mua',
    s: 'te hēkona ruarua',
    m: 'he meneti',
    mm: '%d meneti',
    h: 'te haora',
    hh: '%d haora',
    d: 'he ra',
    dd: '%d ra',
    M: 'he marama',
    MM: '%d marama',
    y: 'he tau',
    yy: '%d tau',
  },
}

dayjs.locale(locale, true)

export default locale
