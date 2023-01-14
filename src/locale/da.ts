// Danish [da]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'da',
  weekdays: [
    'søndag',
    'mandag',
    'tirsdag',
    'onsdag',
    'torsdag',
    'fredag',
    'lørdag',
  ],
  weekdaysShort: ['søn.', 'man.', 'tirs.', 'ons.', 'tors.', 'fre.', 'lør.'],
  weekdaysMin: ['sø.', 'ma.', 'ti.', 'on.', 'to.', 'fr.', 'lø.'],
  months: [
    'januar',
    'februar',
    'marts',
    'april',
    'maj',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'december',
  ],
  monthsShort: [
    'jan.',
    'feb.',
    'mar.',
    'apr.',
    'maj',
    'juni',
    'juli',
    'aug.',
    'sept.',
    'okt.',
    'nov.',
    'dec.',
  ],
  weekStart: 1,
  ordinal: (n) => `${n}.`,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY HH:mm',
    LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
  },
  relativeTime: {
    future: 'om %s',
    past: '%s siden',
    s: 'få sekunder',
    m: 'et minut',
    mm: '%d minutter',
    h: 'en time',
    hh: '%d timer',
    d: 'en dag',
    dd: '%d dage',
    M: 'en måned',
    MM: '%d måneder',
    y: 'et år',
    yy: '%d år',
  },
}

dayjs.locale(locale, true)

export default locale
