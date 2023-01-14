// Kirundi [rn]

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'rn',
  weekdays: [
    'Ku wa Mungu',
    'Ku wa Mbere',
    'Ku wa Kabiri',
    'Ku wa Gatatu',
    'Ku wa Kane',
    'Ku wa Gatanu',
    'Ku wa Gatandatu',
  ],
  weekdaysShort: ['Kngu', 'Kmbr', 'Kbri', 'Ktat', 'Kkan', 'Ktan', 'Kdat'],
  weekdaysMin: ['K7', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6'],
  months: [
    'Nzero',
    'Ruhuhuma',
    'Ntwarante',
    'Ndamukiza',
    'Rusama',
    'Ruhenshi',
    'Mukakaro',
    'Myandagaro',
    'Nyakanga',
    'Gitugutu',
    'Munyonyo',
    'Kigarama',
  ],
  monthsShort: [
    'Nzer',
    'Ruhuh',
    'Ntwar',
    'Ndam',
    'Rus',
    'Ruhen',
    'Muk',
    'Myand',
    'Nyak',
    'Git',
    'Muny',
    'Kig',
  ],
  weekStart: 1,
  relativeTime: {
    future: 'mu %s',
    past: '%s',
    s: 'amasegonda',
    m: 'Umunota',
    mm: '%d iminota',
    h: 'isaha',
    hh: '%d amasaha',
    d: 'Umunsi',
    dd: '%d iminsi',
    M: 'ukwezi',
    MM: '%d amezi',
    y: 'umwaka',
    yy: '%d imyaka',
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
}

dayjs.locale(locale, true)

export default locale
