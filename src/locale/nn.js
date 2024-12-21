// Nynorsk [nn]
import dayjs from 'dayjs'

const locale = {
  name: 'nn',
  weekdays: 'Sundag_Måndag_Tysdag_Onsdag_Torsdag_Fredag_Laurdag'.split('_'),
  weekdaysShort: 'Sun_Mån_Tys_Ons_Tor_Fre_Lau'.split('_'),
  weekdaysMin: 'Su_Må_Ty_On_To_Fr_La'.split('_'),
  months: 'Januar_Februar_Mars_April_Mai_Juni_Juli_August_September_Oktober_November_Desember'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_Mai_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  relativeTime: {
    future: 'om %s',
    past: 'for %s sidan',
    s: 'nokre sekund',
    m: 'eitt minutt',
    mm: '%d minutt',
    h: 'ein time',
    hh: '%d timar',
    d: 'ein dag',
    dd: '%d dagar',
    M: 'ein månad',
    MM: '%d månadar',
    y: 'eitt år',
    yy: '%d år'
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY [kl.] H:mm',
    LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

