import dayjs from 'dayjs'

const locale = {
  name: 'swa',
  weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
  weekdaysShort: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
  weekdaysMin: 'S_M_T_W_T_F_S'.split('_'),
  months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
  monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
  weekStart: 1,
  ordinal: n => n,
  relativeTime: {
    future: 'kwa %s',
    past: '%s iliyopita',
    s: 'sekunde',
    m: 'dakika',
    mm: '%d dakika',
    h: 'saa',
    hh: '%d masaa',
    d: 'siku',
    dd: '%d masiku',
    M: 'mwezi',
    MM: '%d miezi',
    y: 'mwaka',
    yy: '%d miaka'
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale
