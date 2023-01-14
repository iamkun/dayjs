// Breton [br]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'relativeTime' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'relativeTime' plugin.
// https://github.com/iamkun/dayjs/commit/b038bfdb128889d677c95534d2be29cc30c9e72f

/*
const lastNumber = (n: number): number => {
  if (n > 9) {
    return lastNumber(n % 10)
  }
  return n
}

const relativeTimeWithMutation = (n: number, k: string): string => {
  const format: {
    [key: string]: string
  } = {
    mm: 'munutenn',
    MM: 'miz',
    dd: 'devezh',
  }
  const t = format[k]
  return `${n} ${n === 2 ? { m: 'v', b: 'v', d: 'z' }[t.charAt(0)] + t.slice(1) : t}`
}

const specialMutationForYears = (n: number): string =>
  ![1, 3, 4, 5, 9].includes(lastNumber(n))
    ? `${lastNumber(n)} bloaz`
    : `${lastNumber(n)} vloaz`
*/

const locale: Locale = {
  name: 'br',
  weekdays: ['Sul', 'Lun', 'Meurzh', 'Mercʼher', 'Yaou', 'Gwener', 'Sadorn'],
  months: [
    'Genver',
    'Cʼhwevrer',
    'Meurzh',
    'Ebrel',
    'Mae',
    'Mezheven',
    'Gouere',
    'Eost',
    'Gwengolo',
    'Here',
    'Du',
    'Kerzu',
  ],
  weekStart: 1,
  weekdaysShort: ['Sul', 'Lun', 'Meu', 'Mer', 'Yao', 'Gwe', 'Sad'],
  monthsShort: [
    'Gen',
    'Cʼhwe',
    'Meu',
    'Ebr',
    'Mae',
    'Eve',
    'Gou',
    'Eos',
    'Gwe',
    'Her',
    'Du',
    'Ker',
  ],
  weekdaysMin: ['Su', 'Lu', 'Me', 'Mer', 'Ya', 'Gw', 'Sa'],
  formats: {
    LT: 'h[e]mm A',
    LTS: 'h[e]mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D [a viz] MMMM YYYY',
    LLL: 'D [a viz] MMMM YYYY h[e]mm A',
    LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A',
  },
  relativeTime: {
    future: 'a-benn %s',
    past: '%s ʼzo',
    s: 'un nebeud segondennoù',
    m: 'ur vunutenn',
    mm: '%d munutenn', // call relativeTimeWithMutation, need to be fixed with plugin/relativeTime
    h: 'un eur',
    hh: '%d eur',
    d: 'un devezh',
    dd: '%d devezh', // call relativeTimeWithMutation, need to be fixed with plugin/relativeTime
    M: 'ur miz',
    MM: '%d miz', // call relativeTimeWithMutation, need to be fixed with plugin/relativeTime
    y: 'ur bloaz',
    yy: '%d bloaz', // call specialMutationForYears, need to be fixed with plugin/relativeTime
  },
  meridiem: (hour) => (hour < 12 ? 'a.m.' : 'g.m.'), // a-raok merenn | goude merenn
}

dayjs.locale(locale, true)

export default locale
