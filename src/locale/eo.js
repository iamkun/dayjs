import dayjs from 'dayjs'

const locale = {
  name: 'eo',
  weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
  months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
  weekStart: 1,
  weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
  monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
  weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

