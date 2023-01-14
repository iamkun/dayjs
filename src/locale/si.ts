// Sinhalese [si]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'si',
  weekdays: [
    'ඉරිදා',
    'සඳුදා',
    'අඟහරුවාදා',
    'බදාදා',
    'බ්‍රහස්පතින්දා',
    'සිකුරාදා',
    'සෙනසුරාදා',
  ],
  months: [
    'දුරුතු',
    'නවම්',
    'මැදින්',
    'බක්',
    'වෙසක්',
    'පොසොන්',
    'ඇසළ',
    'නිකිණි',
    'බිනර',
    'වප්',
    'ඉල්',
    'උඳුවප්',
  ],
  weekdaysShort: ['ඉරි', 'සඳු', 'අඟ', 'බදා', 'බ්‍රහ', 'සිකු', 'සෙන'],
  monthsShort: [
    'දුරු',
    'නව',
    'මැදි',
    'බක්',
    'වෙස',
    'පොසො',
    'ඇස',
    'නිකි',
    'බින',
    'වප්',
    'ඉල්',
    'උඳු',
  ],
  weekdaysMin: ['ඉ', 'ස', 'අ', 'බ', 'බ්‍ර', 'සි', 'සෙ'],
  formats: {
    LT: 'a h:mm',
    LTS: 'a h:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY MMMM D',
    LLL: 'YYYY MMMM D, a h:mm',
    LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss',
  },
  relativeTime: {
    future: '%sකින්',
    past: '%sකට පෙර',
    s: 'තත්පර කිහිපය',
    m: 'විනාඩිය',
    mm: 'විනාඩි %d',
    h: 'පැය',
    hh: 'පැය %d',
    d: 'දිනය',
    dd: 'දින %d',
    M: 'මාසය',
    MM: 'මාස %d',
    y: 'වසර',
    yy: 'වසර %d',
  },
}

dayjs.locale(locale, true)

export default locale
