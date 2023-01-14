// Irish or Irish Gaelic [ga]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ga',
  weekdays: [
    'Dé Domhnaigh',
    'Dé Luain',
    'Dé Máirt',
    'Dé Céadaoin',
    'Déardaoin',
    'Dé hAoine',
    'Dé Satharn',
  ],
  months: [
    'Eanáir',
    'Feabhra',
    'Márta',
    'Aibreán',
    'Bealtaine',
    'Méitheamh',
    'Iúil',
    'Lúnasa',
    'Meán Fómhair',
    'Deaireadh Fómhair',
    'Samhain',
    'Nollaig',
  ],
  weekStart: 1,
  weekdaysShort: ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat'],
  monthsShort: [
    'Eaná',
    'Feab',
    'Márt',
    'Aibr',
    'Beal',
    'Méit',
    'Iúil',
    'Lúna',
    'Meán',
    'Deai',
    'Samh',
    'Noll',
  ],
  weekdaysMin: ['Do', 'Lu', 'Má', 'Ce', 'Dé', 'hA', 'Sa'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'i %s',
    past: '%s ó shin',
    s: 'cúpla soicind',
    m: 'nóiméad',
    mm: '%d nóiméad',
    h: 'uair an chloig',
    hh: '%d uair an chloig',
    d: 'lá',
    dd: '%d lá',
    M: 'mí',
    MM: '%d mí',
    y: 'bliain',
    yy: '%d bliain',
  },
}

dayjs.locale(locale, true)

export default locale
