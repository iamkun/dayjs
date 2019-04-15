import dayjs from 'dayjs'

const LT = 'HH:mm'
const L = 'DD-MM-YYYY'

const locale = {
  name: 'nl',
  weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
  months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  formats: {
    L,
    LT,
    LTS: 'HH:mm:ss',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  calendar: {
    lastDay: `[Gisteren om] ${LT}`,
    sameDay: `[Vandaag om] ${LT}`,
    nextDay: `[Morgen om] ${LT}`,
    nextWeek: `dddd [om] ${LT}`,
    lastWeek: `[Afgelopen] dddd [om] ${LT}`,
    sameElse: L
  },
  relativeTime: {
    future: 'over %s',
    past: '%s geleden',
    s: 'een paar seconden',
    m: 'een minuut',
    mm: '%d minuten',
    h: 'een uur',
    hh: '%d uur',
    d: 'een dag',
    dd: '%d dagen',
    M: 'een maand',
    MM: '%d maanden',
    y: 'een jaar',
    yy: '%d jaar'
  }
}

dayjs.locale(locale, null, true)

export default locale
