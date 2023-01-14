// Burmese [my]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'my',
  weekdays: [
    'တနင်္ဂနွေ',
    'တနင်္လာ',
    'အင်္ဂါ',
    'ဗုဒ္ဓဟူး',
    'ကြာသပတေး',
    'သောကြာ',
    'စနေ',
  ],
  months: [
    'ဇန်နဝါရီ',
    'ဖေဖော်ဝါရီ',
    'မတ်',
    'ဧပြီ',
    'မေ',
    'ဇွန်',
    'ဇူလိုင်',
    'သြဂုတ်',
    'စက်တင်ဘာ',
    'အောက်တိုဘာ',
    'နိုဝင်ဘာ',
    'ဒီဇင်ဘာ',
  ],
  weekStart: 1,
  weekdaysShort: ['နွေ', 'လာ', 'ဂါ', 'ဟူး', 'ကြာ', 'သော', 'နေ'],
  monthsShort: [
    'ဇန်',
    'ဖေ',
    'မတ်',
    'ပြီ',
    'မေ',
    'ဇွန်',
    'လိုင်',
    'သြ',
    'စက်',
    'အောက်',
    'နို',
    'ဒီ',
  ],
  weekdaysMin: ['နွေ', 'လာ', 'ဂါ', 'ဟူး', 'ကြာ', 'သော', 'နေ'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'လာမည့် %s မှာ',
    past: 'လွန်ခဲ့သော %s က',
    s: 'စက္ကန်.အနည်းငယ်',
    m: 'တစ်မိနစ်',
    mm: '%d မိနစ်',
    h: 'တစ်နာရီ',
    hh: '%d နာရီ',
    d: 'တစ်ရက်',
    dd: '%d ရက်',
    M: 'တစ်လ',
    MM: '%d လ',
    y: 'တစ်နှစ်',
    yy: '%d နှစ်',
  },
}

dayjs.locale(locale, true)

export default locale
