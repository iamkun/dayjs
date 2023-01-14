// Bengali [bn]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'preParsePostFormat' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'preParsePostFormat' plugin.
// https://github.com/iamkun/dayjs/commit/02d96ec7189f62d6ef8987135919cbb5ceff20a6

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
  name: 'bn',
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
  // preparse(string) {
  //   return string.replace(/[১২৩৪৫৬৭৮৯০]/g, match => numberMap[match])
  // },
  // postformat(string) {
  //   return string.replace(/\d/g, match => symbolMap[match])
  // },
  formats: {
    LT: 'A h:mm সময়',
    LTS: 'A h:mm:ss সময়',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm সময়',
    LLLL: 'dddd, D MMMM YYYY, A h:mm সময়',
  },
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
