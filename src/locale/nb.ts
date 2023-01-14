// Norwegian Bokmål [nb]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'nb',
  weekdays: [
    'søndag',
    'mandag',
    'tirsdag',
    'onsdag',
    'torsdag',
    'fredag',
    'lørdag',
  ],
  weekdaysShort: ['sø.', 'ma.', 'ti.', 'on.', 'to.', 'fr.', 'lø.'],
  weekdaysMin: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
  months: [
    'januar',
    'februar',
    'mars',
    'april',
    'mai',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'desember',
  ],
  monthsShort: [
    'jan.',
    'feb.',
    'mars',
    'april',
    'mai',
    'juni',
    'juli',
    'aug.',
    'sep.',
    'okt.',
    'nov.',
    'des.',
  ],
  ordinal: (n) => `${n}.`,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY [kl.] HH:mm',
    LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
  },
  relativeTime: {
    future: 'om %s',
    past: '%s siden',
    s: 'noen sekunder',
    m: 'ett minutt',
    mm: '%d minutter',
    h: 'en time',
    hh: '%d timer',
    d: 'en dag',
    dd: '%d dager',
    M: 'en måned',
    MM: '%d måneder',
    y: 'ett år',
    yy: '%d år',
  },
}

dayjs.locale(locale, true)

export default locale
