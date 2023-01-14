// Frisian [fy]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'fy',
  weekdays: [
    'snein',
    'moandei',
    'tiisdei',
    'woansdei',
    'tongersdei',
    'freed',
    'sneon',
  ],
  months: [
    'jannewaris',
    'febrewaris',
    'maart',
    'april',
    'maaie',
    'juny',
    'july',
    'augustus',
    'septimber',
    'oktober',
    'novimber',
    'desimber',
  ],
  monthsShort: [
    'jan.',
    'feb.',
    'mrt.',
    'apr.',
    'mai',
    'jun.',
    'jul.',
    'aug.',
    'sep.',
    'okt.',
    'nov.',
    'des.',
  ],
  weekStart: 1,
  weekdaysShort: ['si.', 'mo.', 'ti.', 'wo.', 'to.', 'fr.', 'so.'],
  weekdaysMin: ['Si', 'Mo', 'Ti', 'Wo', 'To', 'Fr', 'So'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD-MM-YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'oer %s',
    past: '%s lyn',
    s: 'in pear sekonden',
    m: 'ien minút',
    mm: '%d minuten',
    h: 'ien oere',
    hh: '%d oeren',
    d: 'ien dei',
    dd: '%d dagen',
    M: 'ien moanne',
    MM: '%d moannen',
    y: 'ien jier',
    yy: '%d jierren',
  },
}

dayjs.locale(locale, true)

export default locale
