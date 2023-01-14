// Tetun Dili (East Timor) [tet]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'tet',
  weekdays: [
    'Domingu',
    'Segunda',
    'Tersa',
    'Kuarta',
    'Kinta',
    'Sesta',
    'Sabadu',
  ],
  months: [
    'Janeiru',
    'Fevereiru',
    'Marsu',
    'Abril',
    'Maiu',
    'Juñu',
    'Jullu',
    'Agustu',
    'Setembru',
    'Outubru',
    'Novembru',
    'Dezembru',
  ],
  weekStart: 1,
  weekdaysShort: ['Dom', 'Seg', 'Ters', 'Kua', 'Kint', 'Sest', 'Sab'],
  monthsShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  weekdaysMin: ['Do', 'Seg', 'Te', 'Ku', 'Ki', 'Ses', 'Sa'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'iha %s',
    past: '%s liuba',
    s: 'minutu balun',
    m: 'minutu ida',
    mm: 'minutu %d',
    h: 'oras ida',
    hh: 'oras %d',
    d: 'loron ida',
    dd: 'loron %d',
    M: 'fulan ida',
    MM: 'fulan %d',
    y: 'tinan ida',
    yy: 'tinan %d',
  },
}

dayjs.locale(locale, true)

export default locale
