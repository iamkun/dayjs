import dayjs from 'dayjs'

const locale = {
  name: 'is',
  weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
  months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
  monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
  weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

