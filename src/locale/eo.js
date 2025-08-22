// Esperanto [eo]
import dayjs from 'dayjs'

const locale = {
  name: 'eo',
  weekdays: 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
  months: 'Januaro_Februaro_Marto_Aprilo_Majo_Junio_Julio_Aŭgusto_Septembro_Oktobro_Novembro_Decembro'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aŭg_Sep_Okt_Nov_Dec'.split('_'),
  weekdaysMin: 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'D[-a de] MMMM, YYYY',
    LLL: 'D[-a de] MMMM, YYYY HH:mm',
    LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
  },
  relativeTime: {
    future: 'post %s',
    past: 'antaŭ %s',
    s: 'sekundoj',
    m: 'minuto',
    mm: '%d minutoj',
    h: 'horo',
    hh: '%d horoj',
    d: 'tago',
    dd: '%d tagoj',
    M: 'monato',
    MM: '%d monatoj',
    y: 'jaro',
    yy: '%d jaroj'
  }
}

dayjs.locale(locale, null, true)

export default locale

