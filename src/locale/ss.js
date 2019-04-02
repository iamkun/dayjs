import dayjs from 'dayjs'

const locale = {
  name: 'ss',
  weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
  months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
  weekStart: 1,
  weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
  monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
  weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

