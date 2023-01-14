// Uyghur (China) [ug-cn]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ug-cn',
  weekdays: [
    'يەكشەنبە',
    'دۈشەنبە',
    'سەيشەنبە',
    'چارشەنبە',
    'پەيشەنبە',
    'جۈمە',
    'شەنبە',
  ],
  months: [
    'يانۋار',
    'فېۋرال',
    'مارت',
    'ئاپرېل',
    'ماي',
    'ئىيۇن',
    'ئىيۇل',
    'ئاۋغۇست',
    'سېنتەبىر',
    'ئۆكتەبىر',
    'نويابىر',
    'دېكابىر',
  ],
  weekStart: 1,
  weekdaysShort: ['يە', 'دۈ', 'سە', 'چا', 'پە', 'جۈ', 'شە'],
  monthsShort: [
    'يانۋار',
    'فېۋرال',
    'مارت',
    'ئاپرېل',
    'ماي',
    'ئىيۇن',
    'ئىيۇل',
    'ئاۋغۇست',
    'سېنتەبىر',
    'ئۆكتەبىر',
    'نويابىر',
    'دېكابىر',
  ],
  weekdaysMin: ['يە', 'دۈ', 'سە', 'چا', 'پە', 'جۈ', 'شە'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
    LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
    LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
  },
  relativeTime: {
    future: '%s كېيىن',
    past: '%s بۇرۇن',
    s: 'نەچچە سېكونت',
    m: 'بىر مىنۇت',
    mm: '%d مىنۇت',
    h: 'بىر سائەت',
    hh: '%d سائەت',
    d: 'بىر كۈن',
    dd: '%d كۈن',
    M: 'بىر ئاي',
    MM: '%d ئاي',
    y: 'بىر يىل',
    yy: '%d يىل',
  },
}

dayjs.locale(locale, true)

export default locale
