// Odia [or]
import dayjs from 'dayjs'

const locale = {
  name: 'or',
  weekdays: 'ରବିବାର_ସୋମବାର_ମଙ୍ଗଳବାର_ବୁଧବାର_ଗୁରୁବାର_ଶୁକ୍ରବାର_ଶନିବାର'.split('_'),
  months: 'ଜାନୁଆରୀ_ଫେବୃଆରୀ_ମାର୍ଚ୍ଚ_ଏପ୍ରିଲ_ମଇ_ଜୁନ_ଜୁଲାଇ_ଅଗଷ୍ଟ_ସେପ୍ଟେମ୍ବର_ଅକ୍ଟୋବର_ନଭେମ୍ବର_ଡିସେମ୍ବର'.split('_'),
  weekdaysShort: 'ରବି_ସୋମ_ମଙ୍ଗଳ_ବୁଧ_ଗୁରୁ_ଶୁକ୍ର_ଶନି'.split('_'),
  monthsShort: 'ଜାନୁ._ଫେବୃ._ମାର୍ଚ୍ଚ_ଏପ୍ରି._ମଇ_ଜୁନ_ଜୁଲାଇ_ଅଗ._ସେପ୍ଟେ._ଅକ୍ଟୋ._ନଭେ._ଡିସେ.'.split('_'),
  weekdaysMin: 'ର_ସୋ_ମ_ବୁ_ଗୁ_ଶୁ_ଶ'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'A h:mm',
    LTS: 'A h:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm',
    LLLL: 'dddd, D MMMM YYYY, A h:mm'
  },
  relativeTime: {
    future: '%s ରେ',
    past: '%s ପୂର୍ବରୁ',
    s: 'କିଛି ସେକେଣ୍ଡ',
    m: 'ଗୋଟିଏ ମିନିଟ',
    mm: '%d ମିନିଟ',
    h: 'ଗୋଟିଏ ଘଣ୍ଟା',
    hh: '%d ଘଣ୍ଟା',
    d: 'ଗୋଟିଏ ଦିନ',
    dd: '%d ଦିନ',
    M: 'ଗୋଟିଏ ମାସ',
    MM: '%d ମାସ',
    y: 'ଗୋଟିଏ ବର୍ଷ',
    yy: '%d ବର୍ଷ'
  }
}

dayjs.locale(locale, null, true)

export default locale