// Uyghur [ug]
import dayjs from 'dayjs'

const locale = {
  name: 'ug',
  weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
  weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
  weekdaysMin: 'ي_د_س_چ_پ_ج_ش'.split('_'),
  weekStart: 1,
  months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
  monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd، D MMMM YYYY HH:mm'
  },
  meridiem: hour => (hour < 12 ? 'چ.ب' : 'چ.ك'),
  relativeTime: {
    future: '%s كېيىن',
    past: '%s بۇرۇن',
    s: 'نەچچە سېكونت',
    m: 'بىر مىنۇت',
    mm: '%d مىنۇت',
    h: 'بىر سائەت',
    hh: '%d سائەت',
    d: 'بىر كۈن',
    dd: '%d كۈن',
    M: 'بىر ئاي',
    MM: '%d ئاي',
    y: 'بىر يىل',
    yy: '%d يىل'
  }
}

dayjs.locale(locale, null, true)

export default locale
