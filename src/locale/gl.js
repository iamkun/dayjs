// Galician [gl]
import dayjs from 'dayjs'

const locale = {
  name: 'gl',
  weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
  months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
  weekStart: 1,
  weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
  monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
  weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY H:mm',
    LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

