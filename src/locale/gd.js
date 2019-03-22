import dayjs from 'dayjs'

const locale = {
  name: 'gd',
  weekdays: 'Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne'.split('_'),
  months: 'Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Did_Dil_Dim_Dic_Dia_Dih_Dis'.split('_'),
  monthsShort: 'Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh'.split('_'),
  weekdaysMin: 'Dò_Lu_Mà_Ci_Ar_Ha_Sa'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

