// Danish [da]
import dayjs from 'dayjs'

const locale = {
  name: 'da',
  weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
  weekdaysShort: 'Søn._Man._Tirs._Ons._Tors._Fre._Lør.'.split('_'),
  weekdaysMin: 'Sø._Ma._Ti._On._To._Fr._Lø.'.split('_'),
  months: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December'.split('_'),
  monthsShort: 'Jan._Feb._Mar._Apr._Maj_Juni_Juli_Aug._Sept._Okt._Nov._Dec.'.split('_'),
  weekStart: 1,
  yearStart: 4,
  ordinal: n => `${n}.`,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY HH:mm',
    LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
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
    yy: '%d år'
  }
}

dayjs.locale(locale, null, true)

export default locale

