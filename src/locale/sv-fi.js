// Finland Swedish [sv-fi]
import dayjs from 'dayjs'

const locale = {
  name: 'sv-fi',
  weekdays: 'Söndag_Måndag_Tisdag_Onsdag_Torsdag_Fredag_Lördag'.split('_'),
  weekdaysShort: 'Sön_Mån_Tis_Ons_Tor_Fre_Lör'.split('_'),
  weekdaysMin: 'Sö_Må_Ti_On_To_Fr_Lö'.split('_'),
  months: 'Januari_Februari_Mars_April_Maj_Juni_Juli_Augusti_September_Oktober_November_December'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
  weekStart: 1,
  yearStart: 4,
  ordinal: (n) => {
    const b = n % 10
    const o = (b === 1) || (b === 2) ? 'a' : 'e'
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
    llll: 'ddd, D. MMM YYYY, [kl.] HH.mm'
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
    yy: '%d år'
  }
}

dayjs.locale(locale, null, true)

export default locale

