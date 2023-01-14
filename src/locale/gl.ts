// Galician [gl]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'gl',
  weekdays: [
    'domingo',
    'luns',
    'martes',
    'mércores',
    'xoves',
    'venres',
    'sábado',
  ],
  months: [
    'xaneiro',
    'febreiro',
    'marzo',
    'abril',
    'maio',
    'xuño',
    'xullo',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'decembro',
  ],
  weekStart: 1,
  weekdaysShort: ['dom.', 'lun.', 'mar.', 'mér.', 'xov.', 'ven.', 'sáb.'],
  monthsShort: [
    'xan.',
    'feb.',
    'mar.',
    'abr.',
    'mai.',
    'xuñ.',
    'xul.',
    'ago.',
    'set.',
    'out.',
    'nov.',
    'dec.',
  ],
  weekdaysMin: ['do', 'lu', 'ma', 'mé', 'xo', 've', 'sá'],
  ordinal: (n) => `${n}º`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY H:mm',
    LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
  },
  relativeTime: {
    future: 'en %s',
    past: 'fai %s',
    s: 'uns segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'unha hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un ano',
    yy: '%d anos',
  },
}

dayjs.locale(locale, true)

export default locale
