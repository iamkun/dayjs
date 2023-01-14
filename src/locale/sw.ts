// Swahili [sw]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'sw',
  weekdays: [
    'Jumapili',
    'Jumatatu',
    'Jumanne',
    'Jumatano',
    'Alhamisi',
    'Ijumaa',
    'Jumamosi',
  ],
  weekdaysShort: ['Jpl', 'Jtat', 'Jnne', 'Jtan', 'Alh', 'Ijm', 'Jmos'],
  weekdaysMin: ['J2', 'J3', 'J4', 'J5', 'Al', 'Ij', 'J1'],
  months: [
    'Januari',
    'Februari',
    'Machi',
    'Aprili',
    'Mei',
    'Juni',
    'Julai',
    'Agosti',
    'Septemba',
    'Oktoba',
    'Novemba',
    'Desemba',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mac',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ],
  weekStart: 1,
  relativeTime: {
    future: '%s baadaye',
    past: 'tokea %s',
    s: 'hivi punde',
    m: 'dakika moja',
    mm: 'dakika %d',
    h: 'saa limoja',
    hh: 'masaa %d',
    d: 'siku moja',
    dd: 'masiku %d',
    M: 'mwezi mmoja',
    MM: 'miezi %d',
    y: 'mwaka mmoja',
    yy: 'miaka %d',
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
}

dayjs.locale(locale, true)

export default locale
