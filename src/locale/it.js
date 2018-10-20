import dayjs from 'dayjs'

const locale = {
  name: 'it',
  weekdays: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
  months: 'Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre'.split('_'),
  monthsShort: 'genn_febbr_mar_apr_magg_giugno_luglio_ag_sett_ott_nov_dic'.split('_'),
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
    past: 'da %s',
    s: 'qualche secondo',
    m: 'un minuto',
    mm: '%d minuti',
    h: 'un\' ora',
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
