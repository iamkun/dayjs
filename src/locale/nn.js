import dayjs from 'dayjs'

const locale = {
  name: 'nn',
  weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
  months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
  ordinal: n => `${n}.`,
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
  }
}

dayjs.locale(locale, null, true)

export default locale
