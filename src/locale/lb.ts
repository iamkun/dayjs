// Luxembourgish [lb]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'lb',
  weekdays: [
    'Sonndeg',
    'Méindeg',
    'Dënschdeg',
    'Mëttwoch',
    'Donneschdeg',
    'Freideg',
    'Samschdeg',
  ],
  months: [
    'Januar',
    'Februar',
    'Mäerz',
    'Abrëll',
    'Mee',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  weekStart: 1,
  weekdaysShort: ['So.', 'Mé.', 'Dë.', 'Më.', 'Do.', 'Fr.', 'Sa.'],
  monthsShort: [
    'Jan.',
    'Febr.',
    'Mrz.',
    'Abr.',
    'Mee',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sept.',
    'Okt.',
    'Nov.',
    'Dez.',
  ],
  weekdaysMin: ['So', 'Mé', 'Dë', 'Më', 'Do', 'Fr', 'Sa'],
  formats: {
    LT: 'H:mm [Auer]',
    LTS: 'H:mm:ss [Auer]',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm [Auer]',
    LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',
  },
}

dayjs.locale(locale, true)

export default locale
