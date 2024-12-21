// Bosnian [bs]
import dayjs from 'dayjs'

const locale = {
  name: 'bs',
  weekdays: 'Nedjelja_Ponedjeljak_Utorak_Srijeda_Četvrtak_Petak_Subota'.split('_'),
  months: 'Januar_Februar_Mart_April_Maj_Juni_Juli_August_Septembar_Oktobar_Novembar_Decembar'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Ned._Pon._Uto._Sri._Čet._Pet._Sub.'.split('_'),
  monthsShort: 'Jan._Feb._Mar._Apr._Maj._Jun._Jul._Aug._Sep._Okt._Nov._Dec.'.split('_'),
  weekdaysMin: 'Ne_Po_Ut_Sr_Če_Pe_Su'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

