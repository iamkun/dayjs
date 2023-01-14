// Maltese (Malta) [mt]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'mt',
  weekdays: [
    'Il-Ħadd',
    'It-Tnejn',
    'It-Tlieta',
    'L-Erbgħa',
    'Il-Ħamis',
    'Il-Ġimgħa',
    'Is-Sibt',
  ],
  months: [
    'Jannar',
    'Frar',
    'Marzu',
    'April',
    'Mejju',
    'Ġunju',
    'Lulju',
    'Awwissu',
    'Settembru',
    'Ottubru',
    'Novembru',
    'Diċembru',
  ],
  weekStart: 1,
  weekdaysShort: ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib'],
  monthsShort: [
    'Jan',
    'Fra',
    'Mar',
    'Apr',
    'Mej',
    'Ġun',
    'Lul',
    'Aww',
    'Set',
    'Ott',
    'Nov',
    'Diċ',
  ],
  weekdaysMin: ['Ħa', 'Tn', 'Tl', 'Er', 'Ħa', 'Ġi', 'Si'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'f’ %s',
    past: '%s ilu',
    s: 'ftit sekondi',
    m: 'minuta',
    mm: '%d minuti',
    h: 'siegħa',
    hh: '%d siegħat',
    d: 'ġurnata',
    dd: '%d ġranet',
    M: 'xahar',
    MM: '%d xhur',
    y: 'sena',
    yy: '%d sni',
  },
}

dayjs.locale(locale, true)

export default locale
