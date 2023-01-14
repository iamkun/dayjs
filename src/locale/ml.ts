// Malayalam [ml]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ml',
  weekdays: [
    'ഞായറാഴ്ച',
    'തിങ്കളാഴ്ച',
    'ചൊവ്വാഴ്ച',
    'ബുധനാഴ്ച',
    'വ്യാഴാഴ്ച',
    'വെള്ളിയാഴ്ച',
    'ശനിയാഴ്ച',
  ],
  months: [
    'ജനുവരി',
    'ഫെബ്രുവരി',
    'മാർച്ച്',
    'ഏപ്രിൽ',
    'മേയ്',
    'ജൂൺ',
    'ജൂലൈ',
    'ഓഗസ്റ്റ്',
    'സെപ്റ്റംബർ',
    'ഒക്ടോബർ',
    'നവംബർ',
    'ഡിസംബർ',
  ],
  weekdaysShort: ['ഞായർ', 'തിങ്കൾ', 'ചൊവ്വ', 'ബുധൻ', 'വ്യാഴം', 'വെള്ളി', 'ശനി'],
  monthsShort: [
    'ജനു.',
    'ഫെബ്രു.',
    'മാർ.',
    'ഏപ്രി.',
    'മേയ്',
    'ജൂൺ',
    'ജൂലൈ.',
    'ഓഗ.',
    'സെപ്റ്റ.',
    'ഒക്ടോ.',
    'നവം.',
    'ഡിസം.',
  ],
  weekdaysMin: ['ഞാ', 'തി', 'ചൊ', 'ബു', 'വ്യാ', 'വെ', 'ശ'],
  formats: {
    LT: 'A h:mm -നു',
    LTS: 'A h:mm:ss -നു',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm -നു',
    LLLL: 'dddd, D MMMM YYYY, A h:mm -നു',
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
    yy: '%d വർഷം',
  },
}

dayjs.locale(locale, true)

export default locale
