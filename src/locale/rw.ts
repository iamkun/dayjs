// Kinyarwanda (Rwanda) [rw]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'rw',
  weekdays: [
    'Ku Cyumweru',
    'Kuwa Mbere',
    'Kuwa Kabiri',
    'Kuwa Gatatu',
    'Kuwa Kane',
    'Kuwa Gatanu',
    'Kuwa Gatandatu',
  ],
  months: [
    'Mutarama',
    'Gashyantare',
    'Werurwe',
    'Mata',
    'Gicurasi',
    'Kamena',
    'Nyakanga',
    'Kanama',
    'Nzeri',
    'Ukwakira',
    'Ugushyingo',
    'Ukuboza',
  ],
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
