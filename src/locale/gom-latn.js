// Konkani Latin script [gom-latn]
import dayjs from 'dayjs'

const processRelativeTime = (number, withoutSuffix, key, isFuture) => {
  const format = {
    s: ['thoddea sekondamni', 'thodde sekond'],
    m: ['eka mintan', 'ek minut'],
    mm: [`${number} mintamni`, `${number} mintam`],
    h: ['eka voran', 'ek vor'],
    hh: [`${number} voramni`, `${number} voram`],
    d: ['eka disan', 'ek dis'],
    dd: [`${number} disamni`, `${number} dis`],
    M: ['eka mhoinean', 'ek mhoino'],
    MM: [`${number} mhoineamni`, `${number} mhoine`],
    y: ['eka vorsan', 'ek voros'],
    yy: [`${number} vorsamni`, `${number} vorsam`]
  }
  return isFuture ? format[key][0] : format[key][1]
}

const locale = {
  name: 'gom-latn',
  weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split('_'),
  months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
  monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
  weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
  ordinal: n => n,
  relativeTime: {
    future: '%s',
    past: '%s adim',
    s: processRelativeTime,
    m: processRelativeTime,
    mm: processRelativeTime,
    h: processRelativeTime,
    hh: processRelativeTime,
    d: processRelativeTime,
    dd: processRelativeTime,
    M: processRelativeTime,
    MM: processRelativeTime,
    y: processRelativeTime,
    yy: processRelativeTime
  },
  formats: {
    LT: 'A h:mm [vazta]',
    LTS: 'A h:mm:ss [vazta]',
    L: 'DD-MM-YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY A h:mm [vazta]',
    LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
    llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
  }
}

dayjs.locale(locale, null, true)

export default locale

