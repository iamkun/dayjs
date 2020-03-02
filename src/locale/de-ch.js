// German (Switzerland) [de-ch]
import dayjs from 'dayjs'

const locale = {
  name: 'de-ch',
  weekdays: 'Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag_Sonntag'.split('_'),
  months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Mo._Di._Mi._Do._Fr._Sa._So.'.split('_'),
  monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
  weekdaysMin: 'Mo_Di_Mi_Do_Fr_Sa_So'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY HH:mm',
    LLLL: 'dddd, D. MMMM YYYY HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale
