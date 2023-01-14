// Scottish Gaelic [gd]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'gd',
  weekdays: [
    'Didòmhnaich',
    'Diluain',
    'Dimàirt',
    'Diciadain',
    'Diardaoin',
    'Dihaoine',
    'Disathairne',
  ],
  months: [
    'Am Faoilleach',
    'An Gearran',
    'Am Màrt',
    'An Giblean',
    'An Cèitean',
    'An t-Ògmhios',
    'An t-Iuchar',
    'An Lùnastal',
    'An t-Sultain',
    'An Dàmhair',
    'An t-Samhain',
    'An Dùbhlachd',
  ],
  weekStart: 1,
  weekdaysShort: ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
  monthsShort: [
    'Faoi',
    'Gear',
    'Màrt',
    'Gibl',
    'Cèit',
    'Ògmh',
    'Iuch',
    'Lùn',
    'Sult',
    'Dàmh',
    'Samh',
    'Dùbh',
  ],
  weekdaysMin: ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'ann an %s',
    past: 'bho chionn %s',
    s: 'beagan diogan',
    m: 'mionaid',
    mm: '%d mionaidean',
    h: 'uair',
    hh: '%d uairean',
    d: 'latha',
    dd: '%d latha',
    M: 'mìos',
    MM: '%d mìosan',
    y: 'bliadhna',
    yy: '%d bliadhna',
  },
}

dayjs.locale(locale, true)

export default locale
