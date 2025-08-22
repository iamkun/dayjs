// Azerbaijani [az]
import dayjs from 'dayjs'

const locale = {
  name: 'az',
  weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
  weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
  weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
  months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avqust_Sentyabr_Oktyabr_Noyabr_Dekabr'.split('_'),
  monthsShort: 'Yan_Fev_Mar_Apr_May_Iyn_Iyl_Avq_Sen_Okt_Noy_Dek'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY г.',
    LLL: 'D MMMM YYYY г., H:mm',
    LLLL: 'dddd, D MMMM YYYY г., H:mm'
  },
  relativeTime: {
    future: '%s sonra',
    past: '%s əvvəl',
    s: 'bir neçə saniyə',
    m: 'bir dəqiqə',
    mm: '%d dəqiqə',
    h: 'bir saat',
    hh: '%d saat',
    d: 'bir gün',
    dd: '%d gün',
    M: 'bir ay',
    MM: '%d ay',
    y: 'bir il',
    yy: '%d il'
  },
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

