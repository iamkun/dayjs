import dayjs from 'dayjs'

const locale = {
  name: 'cy',
  weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
  months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
  monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
  weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

