import dayjs from 'dayjs'

const locale = {
  name: 'fo',
  weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
  months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
  monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
  weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

