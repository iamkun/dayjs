// Irish or Irish Gaelic [ga]
import dayjs from 'dayjs'

const locale = {
  name: 'ga',
  weekdays: 'Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Satharn'.split('_'),
  months: 'Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Méitheamh_Iúil_Lúnasa_Meán Fómhair_Deaireadh Fómhair_Samhain_Nollaig'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Dom_Lua_Mái_Céa_Déa_hAo_Sat'.split('_'),
  monthsShort: 'Eaná_Feab_Márt_Aibr_Beal_Méit_Iúil_Lúna_Meán_Deai_Samh_Noll'.split('_'),
  weekdaysMin: 'Do_Lu_Má_Ce_Dé_hA_Sa'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'i %s',
    past: '%s ó shin',
    s: 'cúpla soicind',
    m: 'nóiméad',
    mm: '%d nóiméad',
    h: 'uair an chloig',
    hh: '%d uair an chloig',
    d: 'lá',
    dd: '%d lá',
    M: 'mí',
    MM: '%d mí',
    y: 'bliain',
    yy: '%d bliain'
  }
}

dayjs.locale(locale, null, true)

export default locale

