import dayjs from 'dayjs'

const locale = {
  name: 'de',
  weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  ordinal: n => `${n}.`
}

dayjs.locale(locale, null, true)

export default locale
