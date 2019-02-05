import dayjs from 'dayjs'

const locale = {
  name: 'sv',
  weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
  months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
  weekStart: 1,
  ordinal: (n) => {
    const b = n % 10
    const o = (b === 1) || (b === 2) ? 'a' : 'e'
    return `${n}${o}`
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY [kl.] HH:mm',
    LLLL: 'dddd D MMMM YYYY [kl.] HH:mm'
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
