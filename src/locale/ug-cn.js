import dayjs from 'dayjs'

const locale = {
  name: 'ug-cn',
  weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
  months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
  weekStart: 1,
  weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
  monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
  weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

