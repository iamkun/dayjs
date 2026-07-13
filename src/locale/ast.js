// Spanish [es]
import dayjs from 'dayjs'

const locale = {
  name: 'ast',
  monthsShort: 'xin_feb_mar_abr_may_xun_xnt_ago_sep_och_pay_avi'.split('_'),
  weekdays: 'domingu_llunes_martes_miércoles_xueves_vienres_sábadu'.split('_'),
  weekdaysShort: 'dom._llu._mar._mié._xue._vie._sáb.'.split('_'),
  weekdaysMin: 'do_ll_ma_mi_ju_vi_sá'.split('_'),
  months: 'xineru_febreru_marzu_abril_mayu_xunu_xunetu_agostu_setiembre_ochobre_payares_avientu'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY H:mm',
    LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
  },
  relativeTime: {
    future: 'dientro de %s',
    past: 'fai %s',
    s: 'segundos',
    m: 'un minutu',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d hores',
    d: 'un día',
    dd: '%d díes',
    M: 'un mes',
    MM: '%d meses',
    y: 'un añu',
    yy: '%d años'
  },
  ordinal: n => `${n}ᵘ`
}

dayjs.locale(locale, null, true)

export default locale

