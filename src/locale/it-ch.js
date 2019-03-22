import dayjs from 'dayjs'

const locale = {
  name: 'it-ch',
  weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
  months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
  weekStart: 1,
  weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
  monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
  weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

