// Haitian Creole (Haiti) [ht]
import dayjs from 'dayjs'

const locale = {
  name: 'ht',
  weekdays: 'Dimanch_Lendi_Madi_Mèkredi_Jedi_Vandredi_Samdi'.split('_'),
  months: 'Janvye_Fevriye_Mas_Avril_Me_Jen_Jiyè_Out_Septanm_Oktòb_Novanm_Desanm'.split('_'),
  weekdaysShort: 'Dim._Len._Mad._Mèk._Jed._Van._Sam.'.split('_'),
  monthsShort: 'Jan._Fev._Mas_Avr._Me_Jen_Jiyè._Out_Sept._Okt._Nov._Des.'.split('_'),
  weekdaysMin: 'Di_Le_Ma_Mè_Je_Va_Sa'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'nan %s',
    past: 'sa gen %s',
    s: 'kèk segond',
    m: 'yon minit',
    mm: '%d minit',
    h: 'inèdtan',
    hh: '%d zè',
    d: 'yon jou',
    dd: '%d jou',
    M: 'yon mwa',
    MM: '%d mwa',
    y: 'yon ane',
    yy: '%d ane'
  }
}

dayjs.locale(locale, null, true)

export default locale

