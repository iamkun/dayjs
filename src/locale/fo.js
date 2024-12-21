// Faroese [fo]
import dayjs from 'dayjs'

const locale = {
  name: 'fo',
  weekdays: 'Sunnudagur_Mánadagur_Týsdagur_Mikudagur_Hósdagur_Fríggjadagur_Leygardagur'.split('_'),
  months: 'Januar_Februar_Mars_Apríl_Mai_Juni_Juli_August_September_Oktober_November_Desember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Sun_Mán_Týs_Mik_Hós_Frí_Ley'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_Mai_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
  weekdaysMin: 'Su_Má_Tý_Mi_Hó_Fr_Le'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D. MMMM, YYYY HH:mm'
  },
  relativeTime: {
    future: 'um %s',
    past: '%s síðani',
    s: 'fá sekund',
    m: 'ein minuttur',
    mm: '%d minuttir',
    h: 'ein tími',
    hh: '%d tímar',
    d: 'ein dagur',
    dd: '%d dagar',
    M: 'ein mánaður',
    MM: '%d mánaðir',
    y: 'eitt ár',
    yy: '%d ár'
  }
}

dayjs.locale(locale, null, true)

export default locale

