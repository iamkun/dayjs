import dayjs from 'dayjs'

const locale = {
  name: 'tzl',
  weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
  months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
  monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
  weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

