// Maldivian [dv]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'dv',
  weekdays: [
    'އާދިއްތަ',
    'ހޯމަ',
    'އަންގާރަ',
    'ބުދަ',
    'ބުރާސްފަތި',
    'ހުކުރު',
    'ހޮނިހިރު',
  ],
  months: [
    'ޖެނުއަރީ',
    'ފެބްރުއަރީ',
    'މާރިޗު',
    'އޭޕްރީލު',
    'މޭ',
    'ޖޫން',
    'ޖުލައި',
    'އޯގަސްޓު',
    'ސެޕްޓެމްބަރު',
    'އޮކްޓޯބަރު',
    'ނޮވެމްބަރު',
    'ޑިސެމްބަރު',
  ],
  weekStart: 7,
  weekdaysShort: [
    'އާދިއްތަ',
    'ހޯމަ',
    'އަންގާރަ',
    'ބުދަ',
    'ބުރާސްފަތި',
    'ހުކުރު',
    'ހޮނިހިރު',
  ],
  monthsShort: [
    'ޖެނުއަރީ',
    'ފެބްރުއަރީ',
    'މާރިޗު',
    'އޭޕްރީލު',
    'މޭ',
    'ޖޫން',
    'ޖުލައި',
    'އޯގަސްޓު',
    'ސެޕްޓެމްބަރު',
    'އޮކްޓޯބަރު',
    'ނޮވެމްބަރު',
    'ޑިސެމްބަރު',
  ],
  weekdaysMin: ['އާދި', 'ހޯމަ', 'އަން', 'ބުދަ', 'ބުރާ', 'ހުކު', 'ހޮނި'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'D/M/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'ތެރޭގައި %s',
    past: 'ކުރިން %s',
    s: 'ސިކުންތުކޮޅެއް',
    m: 'މިނިޓެއް',
    mm: 'މިނިޓު %d',
    h: 'ގަޑިއިރެއް',
    hh: 'ގަޑިއިރު %d',
    d: 'ދުވަހެއް',
    dd: 'ދުވަސް %d',
    M: 'މަހެއް',
    MM: 'މަސް %d',
    y: 'އަހަރެއް',
    yy: 'އަހަރު %d',
  },
}

dayjs.locale(locale, true)

export default locale
