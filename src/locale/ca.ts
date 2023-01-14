// Catalan [ca]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ca',
  weekdays: [
    'Diumenge',
    'Dilluns',
    'Dimarts',
    'Dimecres',
    'Dijous',
    'Divendres',
    'Dissabte',
  ],
  weekdaysShort: ['Dg.', 'Dl.', 'Dt.', 'Dc.', 'Dj.', 'Dv.', 'Ds.'],
  weekdaysMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
  months: [
    'Gener',
    'Febrer',
    'Març',
    'Abril',
    'Maig',
    'Juny',
    'Juliol',
    'Agost',
    'Setembre',
    'Octubre',
    'Novembre',
    'Desembre',
  ],
  monthsShort: [
    'Gen.',
    'Febr.',
    'Març',
    'Abr.',
    'Maig',
    'Juny',
    'Jul.',
    'Ag.',
    'Set.',
    'Oct.',
    'Nov.',
    'Des.',
  ],
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM [de] YYYY',
    LLL: 'D MMMM [de] YYYY [a les] H:mm',
    LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
    ll: 'D MMM YYYY',
    lll: 'D MMM YYYY, H:mm',
    llll: 'ddd D MMM YYYY, H:mm',
  },
  relativeTime: {
    future: "d'aquí %s",
    past: 'fa %s',
    s: 'uns segons',
    m: 'un minut',
    mm: '%d minuts',
    h: 'una hora',
    hh: '%d hores',
    d: 'un dia',
    dd: '%d dies',
    M: 'un mes',
    MM: '%d mesos',
    y: 'un any',
    yy: '%d anys',
  },
  ordinal: (n) =>
    `${n}${n === '1' || n === '3' ? 'r' : n === '2' ? 'n' : n === '4' ? 't' : 'è'}`,
}

dayjs.locale(locale, true)

export default locale
