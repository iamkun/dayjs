// Northern Sami [se]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'se',
  weekdays: [
    'sotnabeaivi',
    'vuossárga',
    'maŋŋebárga',
    'gaskavahkku',
    'duorastat',
    'bearjadat',
    'lávvardat',
  ],
  months: [
    'ođđajagemánnu',
    'guovvamánnu',
    'njukčamánnu',
    'cuoŋománnu',
    'miessemánnu',
    'geassemánnu',
    'suoidnemánnu',
    'borgemánnu',
    'čakčamánnu',
    'golggotmánnu',
    'skábmamánnu',
    'juovlamánnu',
  ],
  weekStart: 1,
  weekdaysShort: ['sotn', 'vuos', 'maŋ', 'gask', 'duor', 'bear', 'láv'],
  monthsShort: [
    'ođđj',
    'guov',
    'njuk',
    'cuo',
    'mies',
    'geas',
    'suoi',
    'borg',
    'čakč',
    'golg',
    'skáb',
    'juov',
  ],
  weekdaysMin: ['s', 'v', 'm', 'g', 'd', 'b', 'L'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'MMMM D. [b.] YYYY',
    LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
    LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm',
  },
  relativeTime: {
    future: '%s geažes',
    past: 'maŋit %s',
    s: 'moadde sekunddat',
    m: 'okta minuhta',
    mm: '%d minuhtat',
    h: 'okta diimmu',
    hh: '%d diimmut',
    d: 'okta beaivi',
    dd: '%d beaivvit',
    M: 'okta mánnu',
    MM: '%d mánut',
    y: 'okta jahki',
    yy: '%d jagit',
  },
}

dayjs.locale(locale, true)

export default locale
