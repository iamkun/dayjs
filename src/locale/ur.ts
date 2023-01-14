// Urdu [ur]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ur',
  weekdays: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  months: [
    'جنوری',
    'فروری',
    'مارچ',
    'اپریل',
    'مئی',
    'جون',
    'جولائی',
    'اگست',
    'ستمبر',
    'اکتوبر',
    'نومبر',
    'دسمبر',
  ],
  weekStart: 1,
  weekdaysShort: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  monthsShort: [
    'جنوری',
    'فروری',
    'مارچ',
    'اپریل',
    'مئی',
    'جون',
    'جولائی',
    'اگست',
    'ستمبر',
    'اکتوبر',
    'نومبر',
    'دسمبر',
  ],
  weekdaysMin: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd، D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: '%s بعد',
    past: '%s قبل',
    s: 'چند سیکنڈ',
    m: 'ایک منٹ',
    mm: '%d منٹ',
    h: 'ایک گھنٹہ',
    hh: '%d گھنٹے',
    d: 'ایک دن',
    dd: '%d دن',
    M: 'ایک ماہ',
    MM: '%d ماہ',
    y: 'ایک سال',
    yy: '%d سال',
  },
}

dayjs.locale(locale, true)

export default locale
