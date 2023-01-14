// Occitan, lengadocian dialecte [oc-lnc]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'oc-lnc',
  weekdays: [
    'dimenge',
    'diluns',
    'dimars',
    'dimècres',
    'dijòus',
    'divendres',
    'dissabte',
  ],
  weekdaysShort: ['Dg', 'Dl', 'Dm', 'Dc', 'Dj', 'Dv', 'Ds'],
  weekdaysMin: ['dg', 'dl', 'dm', 'dc', 'dj', 'dv', 'ds'],
  months: [
    'genièr',
    'febrièr',
    'març',
    'abrial',
    'mai',
    'junh',
    'julhet',
    'agost',
    'setembre',
    'octòbre',
    'novembre',
    'decembre',
  ],
  monthsShort: [
    'gen',
    'feb',
    'març',
    'abr',
    'mai',
    'junh',
    'julh',
    'ago',
    'set',
    'oct',
    'nov',
    'dec',
  ],
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM [de] YYYY',
    LLL: 'D MMMM [de] YYYY [a] H:mm',
    LLLL: 'dddd D MMMM [de] YYYY [a] H:mm',
  },
  relativeTime: {
    future: "d'aquí %s",
    past: 'fa %s',
    s: 'unas segondas',
    m: 'una minuta',
    mm: '%d minutas',
    h: 'una ora',
    hh: '%d oras',
    d: 'un jorn',
    dd: '%d jorns',
    M: 'un mes',
    MM: '%d meses',
    y: 'un an',
    yy: '%d ans',
  },
  ordinal: (n) => `${n}º`,
}

dayjs.locale(locale, true)

export default locale
