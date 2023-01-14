// Konkani Latin script [gom-latn]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'gom-latn',
  weekdays: [
    'Aitar',
    'Somar',
    'Mûnglar',
    'Bûdvar',
    'Brestar',
    'Sûkrar',
    'Shenvar',
  ],
  months: [
    'Janer',
    'Febrer',
    'Mars',
    'Abril',
    'Mai',
    'Jun',
    'Julai',
    'Agost',
    'Setembr',
    'Otubr',
    'Novembr',
    'Dezembr',
  ],
  weekStart: 1,
  weekdaysShort: ['Ait.', 'Som.', 'Mûn.', 'Bûd.', 'Bre.', 'Sûk.', 'She.'],
  monthsShort: [
    'Jan.',
    'Feb.',
    'Mars',
    'Abr.',
    'Mai',
    'Jun',
    'Jul.',
    'Ago.',
    'Set.',
    'Otu.',
    'Nov.',
    'Dez.',
  ],
  weekdaysMin: ['Ai', 'Sm', 'Mo', 'Bu', 'Br', 'Su', 'Sn'],
  formats: {
    LT: 'A h:mm [vazta]',
    LTS: 'A h:mm:ss [vazta]',
    L: 'DD-MM-YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY A h:mm [vazta]',
    LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
    llll: 'ddd, D MMM YYYY, A h:mm [vazta]',
  },
}

dayjs.locale(locale, true)

export default locale
