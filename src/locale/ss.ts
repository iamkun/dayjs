// siSwati [ss]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ss',
  weekdays: [
    'Lisontfo',
    'Umsombuluko',
    'Lesibili',
    'Lesitsatfu',
    'Lesine',
    'Lesihlanu',
    'Umgcibelo',
  ],
  months: [
    'Bhimbidvwane',
    'Indlovana',
    'Indlovlenkhulu',
    'Mabasa',
    'Inkhwekhweti',
    'Inhlaba',
    'Kholwane',
    'Ingci',
    'Inyoni',
    'Imphala',
    'Lweti',
    'Ingongoni',
  ],
  weekStart: 1,
  weekdaysShort: ['Lis', 'Umb', 'Lsb', 'Les', 'Lsi', 'Lsh', 'Umg'],
  monthsShort: [
    'Bhi',
    'Ina',
    'Inu',
    'Mab',
    'Ink',
    'Inh',
    'Kho',
    'Igc',
    'Iny',
    'Imp',
    'Lwe',
    'Igo',
  ],
  weekdaysMin: ['Li', 'Us', 'Lb', 'Lt', 'Ls', 'Lh', 'Ug'],
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY h:mm A',
    LLLL: 'dddd, D MMMM YYYY h:mm A',
  },
  relativeTime: {
    future: 'nga %s',
    past: 'wenteka nga %s',
    s: 'emizuzwana lomcane',
    m: 'umzuzu',
    mm: '%d emizuzu',
    h: 'lihora',
    hh: '%d emahora',
    d: 'lilanga',
    dd: '%d emalanga',
    M: 'inyanga',
    MM: '%d tinyanga',
    y: 'umnyaka',
    yy: '%d iminyaka',
  },
}

dayjs.locale(locale, true)

export default locale
