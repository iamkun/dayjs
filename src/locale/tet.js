import dayjs from 'dayjs'

const locale = {
  name: 'tet',
  weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
  months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
  monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
  weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

