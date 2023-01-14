// Amharic [am]
// Generated: 2023-01-14

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'am',
  weekdays: ['እሑድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'አርብ', 'ቅዳሜ'],
  weekdaysShort: ['እሑድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'አርብ', 'ቅዳሜ'],
  weekdaysMin: ['እሑ', 'ሰኞ', 'ማክ', 'ረቡ', 'ሐሙ', 'አር', 'ቅዳ'],
  months: [
    'ጃንዋሪ',
    'ፌብሯሪ',
    'ማርች',
    'ኤፕሪል',
    'ሜይ',
    'ጁን',
    'ጁላይ',
    'ኦገስት',
    'ሴፕቴምበር',
    'ኦክቶበር',
    'ኖቬምበር',
    'ዲሴምበር',
  ],
  monthsShort: [
    'ጃንዋ',
    'ፌብሯ',
    'ማርች',
    'ኤፕሪ',
    'ሜይ',
    'ጁን',
    'ጁላይ',
    'ኦገስ',
    'ሴፕቴ',
    'ኦክቶ',
    'ኖቬም',
    'ዲሴም',
  ],
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'MMMM D ፣ YYYY',
    LLL: 'MMMM D ፣ YYYY HH:mm',
    LLLL: 'dddd ፣ MMMM D ፣ YYYY HH:mm',
  },
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '几秒',
    m: '1 分钟',
    mm: '%d 分钟',
    h: '1 小时',
    hh: '%d 小时',
    d: '1 天',
    dd: '%d 天',
    M: '1 个月',
    MM: '%d 个月',
    y: '1 年',
    yy: '%d 年',
  },
  ordinal: (n) => `${n}ኛ`,
}

dayjs.locale(locale, true)

export default locale
