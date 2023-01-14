// Talossan [tzl]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'tzl',
  weekdays: [
    'Súladi',
    'Lúneçi',
    'Maitzi',
    'Márcuri',
    'Xhúadi',
    'Viénerçi',
    'Sáturi',
  ],
  months: [
    'Januar',
    'Fevraglh',
    'Març',
    'Avrïu',
    'Mai',
    'Gün',
    'Julia',
    'Guscht',
    'Setemvar',
    'Listopäts',
    'Noemvar',
    'Zecemvar',
  ],
  weekStart: 1,
  weekdaysShort: ['Súl', 'Lún', 'Mai', 'Már', 'Xhú', 'Vié', 'Sát'],
  monthsShort: [
    'Jan',
    'Fev',
    'Mar',
    'Avr',
    'Mai',
    'Gün',
    'Jul',
    'Gus',
    'Set',
    'Lis',
    'Noe',
    'Zec',
  ],
  weekdaysMin: ['Sú', 'Lú', 'Ma', 'Má', 'Xh', 'Vi', 'Sá'],
  formats: {
    LT: 'HH.mm',
    LTS: 'HH.mm.ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM [dallas] YYYY',
    LLL: 'D. MMMM [dallas] YYYY HH.mm',
    LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm',
  },
}

dayjs.locale(locale, true)

export default locale
