// Central Atlas Tamazight Latin [tzm-latn]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'tzm-latn',
  weekdays: [
    'asamas',
    'aynas',
    'asinas',
    'akras',
    'akwas',
    'asimwas',
    'asiḍyas',
  ],
  months: [
    'innayr',
    'brˤayrˤ',
    'marˤsˤ',
    'ibrir',
    'mayyw',
    'ywnyw',
    'ywlywz',
    'ɣwšt',
    'šwtanbir',
    'ktˤwbrˤ',
    'nwwanbir',
    'dwjnbir',
  ],
  weekStart: 6,
  weekdaysShort: [
    'asamas',
    'aynas',
    'asinas',
    'akras',
    'akwas',
    'asimwas',
    'asiḍyas',
  ],
  monthsShort: [
    'innayr',
    'brˤayrˤ',
    'marˤsˤ',
    'ibrir',
    'mayyw',
    'ywnyw',
    'ywlywz',
    'ɣwšt',
    'šwtanbir',
    'ktˤwbrˤ',
    'nwwanbir',
    'dwjnbir',
  ],
  weekdaysMin: [
    'asamas',
    'aynas',
    'asinas',
    'akras',
    'akwas',
    'asimwas',
    'asiḍyas',
  ],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'dadkh s yan %s',
    past: 'yan %s',
    s: 'imik',
    m: 'minuḍ',
    mm: '%d minuḍ',
    h: 'saɛa',
    hh: '%d tassaɛin',
    d: 'ass',
    dd: '%d ossan',
    M: 'ayowr',
    MM: '%d iyyirn',
    y: 'asgas',
    yy: '%d isgasn',
  },
}

dayjs.locale(locale, true)

export default locale
