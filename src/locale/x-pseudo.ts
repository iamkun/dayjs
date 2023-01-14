// Pseudo [x-pseudo]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'x-pseudo',
  weekdays: [
    'S~úñdá~ý',
    'Mó~ñdáý~',
    'Túé~sdáý~',
    'Wéd~ñésd~áý',
    'T~húrs~dáý',
    '~Fríd~áý',
    'S~átúr~dáý',
  ],
  months: [
    'J~áñúá~rý',
    'F~ébrú~árý',
    '~Márc~h',
    'Áp~ríl',
    '~Máý',
    '~Júñé~',
    'Júl~ý',
    'Áú~gúst~',
    'Sép~témb~ér',
    'Ó~ctób~ér',
    'Ñ~óvém~bér',
    '~Décé~mbér',
  ],
  weekStart: 1,
  weekdaysShort: ['S~úñ', '~Móñ', '~Túé', '~Wéd', '~Thú', '~Frí', '~Sát'],
  monthsShort: [
    'J~áñ',
    '~Féb',
    '~Már',
    '~Ápr',
    '~Máý',
    '~Júñ',
    '~Júl',
    '~Áúg',
    '~Sép',
    '~Óct',
    '~Ñóv',
    '~Déc',
  ],
  weekdaysMin: ['S~ú', 'Mó~', 'Tú', '~Wé', 'T~h', 'Fr~', 'Sá'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'í~ñ %s',
    past: '%s á~gó',
    s: 'á ~féw ~sécó~ñds',
    m: 'á ~míñ~úté',
    mm: '%d m~íñú~tés',
    h: 'á~ñ hó~úr',
    hh: '%d h~óúrs',
    d: 'á ~dáý',
    dd: '%d d~áýs',
    M: 'á ~móñ~th',
    MM: '%d m~óñt~hs',
    y: 'á ~ýéár',
    yy: '%d ý~éárs',
  },
}

dayjs.locale(locale, true)

export default locale
