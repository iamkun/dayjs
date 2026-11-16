// Uzbek Latin [uz-latn]
import dayjs from 'dayjs'

const locale = {
  name: 'uz-latn',
  weekdays: 'yakshanba_dushanba_seshanba_chorshanba_payshanba_juma_shanba'.split('_'),
  months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avgust_sentabr_oktabr_noyabr_dekabr'.split('_'),
  weekStart: 1,
  weekdaysShort: 'yak_dush_sesh_chor_pay_jum_shan'.split('_'),
  monthsShort: 'yan_fev_mar_apr_may_iyun_iyul_avg_sen_okt_noy_dek'.split('_'),
  weekdaysMin: 'ya_du_se_cho_pa_ju_sha'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'D MMMM YYYY, dddd HH:mm'
  },
  relativeTime: {
    future: '%sdan keyin',
    past: '%s oldin',
    s: 'soniya',
    m: 'bir daqiqa',
    mm: '%d daqiqa',
    h: 'bir soat',
    hh: '%d soat',
    d: 'bir kun',
    dd: '%d kun',
    M: 'bir oy',
    MM: '%d oy',
    y: 'bir yil',
    yy: '%d yil'
  }
}

dayjs.locale(locale, null, true)

export default locale

