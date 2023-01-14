// Sindhi [sd]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'sd',
  weekdays: ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'],
  months: [
    'جنوري',
    'فيبروري',
    'مارچ',
    'اپريل',
    'مئي',
    'جون',
    'جولاءِ',
    'آگسٽ',
    'سيپٽمبر',
    'آڪٽوبر',
    'نومبر',
    'ڊسمبر',
  ],
  weekStart: 1,
  weekdaysShort: ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'],
  monthsShort: [
    'جنوري',
    'فيبروري',
    'مارچ',
    'اپريل',
    'مئي',
    'جون',
    'جولاءِ',
    'آگسٽ',
    'سيپٽمبر',
    'آڪٽوبر',
    'نومبر',
    'ڊسمبر',
  ],
  weekdaysMin: ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd، D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: '%s پوء',
    past: '%s اڳ',
    s: 'چند سيڪنڊ',
    m: 'هڪ منٽ',
    mm: '%d منٽ',
    h: 'هڪ ڪلاڪ',
    hh: '%d ڪلاڪ',
    d: 'هڪ ڏينهن',
    dd: '%d ڏينهن',
    M: 'هڪ مهينو',
    MM: '%d مهينا',
    y: 'هڪ سال',
    yy: '%d سال',
  },
}

dayjs.locale(locale, true)

export default locale
