import dayjs from 'dayjs'

const locale = {
  name: 'ga',
  weekdays: 'Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Satharn'.split('_'),
  months: 'Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Méitheamh_Iúil_Lúnasa_Meán Fómhair_Deaireadh Fómhair_Samhain_Nollaig'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Dom_Lua_Mái_Céa_Déa_hAo_Sat'.split('_'),
  monthsShort: 'Eaná_Feab_Márt_Aibr_Beal_Méit_Iúil_Lúna_Meán_Deai_Samh_Noll'.split('_'),
  weekdaysMin: 'Do_Lu_Má_Ce_Dé_hA_Sa'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

