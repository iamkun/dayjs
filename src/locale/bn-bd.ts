// Bengali (Bangladesh) [bn-bd]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'preParsePostFormat' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'preParsePostFormat' plugin.
// https://github.com/iamkun/dayjs/commit/840ed76eedc085afefc4dedd05f31d44196b63b0

// const symbolMap = {
//   1: '১',
//   2: '২',
//   3: '৩',
//   4: '৪',
//   5: '৫',
//   6: '৬',
//   7: '৭',
//   8: '৮',
//   9: '৯',
//   0: '০',
// }

// const numberMap = {
//   '১': '1',
//   '২': '2',
//   '৩': '3',
//   '৪': '4',
//   '৫': '5',
//   '৬': '6',
//   '৭': '7',
//   '৮': '8',
//   '৯': '9',
//   '০': '0',
// }

const locale: Locale = {
  name: 'bn-bd',
  weekdays: [
    'রবিবার',
    'সোমবার',
    'মঙ্গলবার',
    'বুধবার',
    'বৃহস্পতিবার',
    'শুক্রবার',
    'শনিবার',
  ],
  months: [
    'জানুয়ারি',
    'ফেব্রুয়ারি',
    'মার্চ',
    'এপ্রিল',
    'মে',
    'জুন',
    'জুলাই',
    'আগস্ট',
    'সেপ্টেম্বর',
    'অক্টোবর',
    'নভেম্বর',
    'ডিসেম্বর',
  ],
  weekdaysShort: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'],
  monthsShort: [
    'জানু',
    'ফেব্রু',
    'মার্চ',
    'এপ্রিল',
    'মে',
    'জুন',
    'জুলাই',
    'আগস্ট',
    'সেপ্ট',
    'অক্টো',
    'নভে',
    'ডিসে',
  ],
  weekdaysMin: ['রবি', 'সোম', 'মঙ্গ', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'],
  weekStart: 0,
  // preparse(string) {
  //   return string.replace(/[১২৩৪৫৬৭৮৯০]/g, match => numberMap[match])
  // },
  // postformat(string) {
  //   return string.replace(/\d/g, match => symbolMap[match])
  // },
  ordinal: (n) => {
    const s = ['ই', 'লা', 'রা', 'ঠা', 'শে']
    const v = n % 100
    return `[${n}${s[(v - 20) % 10] || s[v] || s[0]}]`
  },
  formats: {
    LT: 'A h:mm সময়',
    LTS: 'A h:mm:ss সময়',
    L: 'DD/MM/YYYY খ্রিস্টাব্দ',
    LL: 'D MMMM YYYY খ্রিস্টাব্দ',
    LLL: 'D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়',
    LLLL: 'dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়',
  },
  meridiem: (hour) =>
    /* eslint-disable no-nested-ternary */
    hour < 4
      ? 'রাত'
      : hour < 6
        ? 'ভোর'
        : hour < 12
          ? 'সকাল'
          : hour < 15
            ? 'দুপুর'
            : hour < 18
              ? 'বিকাল'
              : hour < 20
                ? 'সন্ধ্যা'
                : 'রাত',
  relativeTime: {
    future: '%s পরে',
    past: '%s আগে',
    s: 'কয়েক সেকেন্ড',
    m: 'এক মিনিট',
    mm: '%d মিনিট',
    h: 'এক ঘন্টা',
    hh: '%d ঘন্টা',
    d: 'এক দিন',
    dd: '%d দিন',
    M: 'এক মাস',
    MM: '%d মাস',
    y: 'এক বছর',
    yy: '%d বছর',
  },
}

dayjs.locale(locale, true)

export default locale
