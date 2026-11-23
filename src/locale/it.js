// Italian [it]
import dayjs from 'dayjs'

const locale = {
  name: 'it',
  weekdays: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
  weekdaysShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
  months: 'Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre'.split('_'),
  weekStart: 1,
  monthsShort: 'Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic'.split('_'),
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'tra %s',
    past: '%s fa',
    s: 'qualche secondo',
    m: 'un minuto',
    mm: '%d minuti',
    h: 'un\'ora',
    hh: '%d ore',
    d: 'un giorno',
    dd: '%d giorni',
    M: 'un mese',
    MM: '%d mesi',
    y: 'un anno',
    yy: '%d anni'
  },
  ordinal: n => `${n}º`
}

dayjs.locale(locale, null, true)

export default locale

