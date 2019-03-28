import dayjs from 'dayjs'

const locale = {
  name: 'sq',
  weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
  months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
  monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
  weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

