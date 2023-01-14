// Dutch (Belgium) [nl-be]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'nl-be',
  weekdays: [
    'zondag',
    'maandag',
    'dinsdag',
    'woensdag',
    'donderdag',
    'vrijdag',
    'zaterdag',
  ],
  months: [
    'januari',
    'februari',
    'maart',
    'april',
    'mei',
    'juni',
    'juli',
    'augustus',
    'september',
    'oktober',
    'november',
    'december',
  ],
  monthsShort: [
    'jan.',
    'feb.',
    'mrt.',
    'apr.',
    'mei',
    'jun.',
    'jul.',
    'aug.',
    'sep.',
    'okt.',
    'nov.',
    'dec.',
  ],
  weekStart: 1,
  weekdaysShort: ['zo.', 'ma.', 'di.', 'wo.', 'do.', 'vr.', 'za.'],
  weekdaysMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'over %s',
    past: '%s geleden',
    s: 'een paar seconden',
    m: 'één minuut',
    mm: '%d minuten',
    h: 'één uur',
    hh: '%d uur',
    d: 'één dag',
    dd: '%d dagen',
    M: 'één maand',
    MM: '%d maanden',
    y: 'één jaar',
    yy: '%d jaar',
  },
}

dayjs.locale(locale, true)

export default locale
