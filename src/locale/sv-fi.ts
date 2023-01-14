// Finland Swedish [sv-fi]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'sv-fi',
  weekdays: [
    'söndag',
    'måndag',
    'tisdag',
    'onsdag',
    'torsdag',
    'fredag',
    'lördag',
  ],
  weekdaysShort: ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör'],
  weekdaysMin: ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö'],
  months: [
    'januari',
    'februari',
    'mars',
    'april',
    'maj',
    'juni',
    'juli',
    'augusti',
    'september',
    'oktober',
    'november',
    'december',
  ],
  monthsShort: [
    'jan',
    'feb',
    'mar',
    'apr',
    'maj',
    'jun',
    'jul',
    'aug',
    'sep',
    'okt',
    'nov',
    'dec',
  ],
  weekStart: 1,
  yearStart: 4,
  ordinal: (n) => {
    const b = n % 10
    const o = b === 1 || b === 2 ? 'a' : 'e'
    return `[${n}${o}]`
  },
  formats: {
    LT: 'HH.mm',
    LTS: 'HH.mm.ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY, [kl.] HH.mm',
    LLLL: 'dddd, D. MMMM YYYY, [kl.] HH.mm',
    l: 'D.M.YYYY',
    ll: 'D. MMM YYYY',
    lll: 'D. MMM YYYY, [kl.] HH.mm',
    llll: 'ddd, D. MMM YYYY, [kl.] HH.mm',
  },
  relativeTime: {
    future: 'om %s',
    past: 'för %s sedan',
    s: 'några sekunder',
    m: 'en minut',
    mm: '%d minuter',
    h: 'en timme',
    hh: '%d timmar',
    d: 'en dag',
    dd: '%d dagar',
    M: 'en månad',
    MM: '%d månader',
    y: 'ett år',
    yy: '%d år',
  },
}

dayjs.locale(locale, true)

export default locale
