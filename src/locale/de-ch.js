import dayjs from 'dayjs'

const locale = {
  name: 'de-ch',
  weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
  monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
  weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

