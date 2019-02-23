import dayjs from 'dayjs'

const locale = {
  name: 'sw',
  weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijuma_Jumamosi'.split('_'),
  months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Octoba_Novemba_Disemba'.split('_'),
  weekStart: 1,
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd D. MMMM YYYY H:mm'
  },
  relativeTime: {
    future: 'Ujao %s',
    past: 'Uliopita %s',
    s: 'sekunde',
    m: 'dakika',
    mm: '%d madakika',
    h: 'saa',
    hh: '%d masaa',
    d: 'siku',
    dd: '%d masiku',
    M: 'mwezi',
    MM: '%d miezi',
    y: 'mwaka',
    yy: '%d miaka'
  }
}

dayjs.locale(locale, null, true)

export default locale
