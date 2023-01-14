// Kyrgyz [ky]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// All commented out code is from the original Kyrgyz locale file.
// I left it in place because it seems to use the 'preParsePostFormat' plugin.
// https://github.com/iamkun/dayjs/commit/a597d0b1b8dd28e626f8c59d326622088f7b51e7

// export const englishToArabicNumbersMap = {
//   1: '١',
//   2: '٢',
//   3: '٣',
//   4: '٤',
//   5: '٥',
//   6: '٦',
//   7: '٧',
//   8: '٨',
//   9: '٩',
//   0: '٠',
// }

// const arabicToEnglishNumbersMap = {
//   '١': '1',
//   '٢': '2',
//   '٣': '3',
//   '٤': '4',
//   '٥': '5',
//   '٦': '6',
//   '٧': '7',
//   '٨': '8',
//   '٩': '9',
//   '٠': '0',
// }

const locale: Locale = {
  name: 'ky',
  weekdays: [
    'یەکشەممە',
    'دووشەممە',
    'سێشەممە',
    'چوارشەممە',
    'پێنجشەممە',
    'هەینی',
    'شەممە',
  ],
  months: [
    'کانوونی دووەم',
    'شوبات',
    'ئادار',
    'نیسان',
    'ئایار',
    'حوزەیران',
    'تەممووز',
    'ئاب',
    'ئەیلوول',
    'تشرینی یەکەم',
    'تشرینی دووەم',
    'کانوونی یەکەم',
  ],
  weekStart: 6,
  weekdaysShort: [
    'یەکشەم',
    'دووشەم',
    'سێشەم',
    'چوارشەم',
    'پێنجشەم',
    'هەینی',
    'شەممە',
  ],
  monthsShort: [
    'کانوونی دووەم',
    'شوبات',
    'ئادار',
    'نیسان',
    'ئایار',
    'حوزەیران',
    'تەممووز',
    'ئاب',
    'ئەیلوول',
    'تشرینی یەکەم',
    'تشرینی دووەم',
    'کانوونی یەکەم',
  ],
  weekdaysMin: ['ی', 'د', 'س', 'چ', 'پ', 'هـ', 'ش'],
  // preparse(string) {
  //   return string
  //     .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (match) => arabicToEnglishNumbersMap[match])
  //     .replace(/،/g, ',')
  // },
  // postformat(string) {
  //   return string
  //     .replace(/\d/g, (match) => englishToArabicNumbersMap[match])
  //     .replace(/,/g, '،')
  // },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  meridiem: (hour) => (hour < 12 ? 'پ.ن' : 'د.ن'),
  relativeTime: {
    future: 'لە %s',
    past: 'لەمەوپێش %s',
    s: 'چەند چرکەیەک',
    m: 'یەک خولەک',
    mm: '%d خولەک',
    h: 'یەک کاتژمێر',
    hh: '%d کاتژمێر',
    d: 'یەک ڕۆژ',
    dd: '%d ڕۆژ',
    M: 'یەک مانگ',
    MM: '%d مانگ',
    y: 'یەک ساڵ',
    yy: '%d ساڵ',
  },
}

dayjs.locale(locale, true)

export default locale
