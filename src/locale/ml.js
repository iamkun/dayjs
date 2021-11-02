// Malayalam [ml]
import dayjs from 'dayjs'

const locale = {
  name: 'ml',
  weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
  months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
  weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
  monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
  weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'A h:mm -നു',
    LTS: 'A h:mm:ss -നു',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm -നു',
    LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
  },
  relativeTime: {
    future: '%s കഴിഞ്ഞ്',
    past: '%s മുൻപ്',
    s: 'അൽപ നിമിഷങ്ങൾ',
    m: 'ഒരു മിനിറ്റ്',
    mm: '%d മിനിറ്റ്',
    h: 'ഒരു മണിക്കൂർ',
    hh: '%d മണിക്കൂർ',
    d: 'ഒരു ദിവസം',
    dd: '%d ദിവസം',
    M: 'ഒരു മാസം',
    MM: '%d മാസം',
    y: 'ഒരു വർഷം',
    yy: '%d വർഷം'
  }
}

dayjs.locale(locale, null, true)

export default locale

