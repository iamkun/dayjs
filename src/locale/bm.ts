// Bambara [bm]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'bm',
  weekdays: ['Kari', 'Ntɛnɛn', 'Tarata', 'Araba', 'Alamisa', 'Juma', 'Sibiri'],
  months: [
    'Zanwuyekalo',
    'Fewuruyekalo',
    'Marisikalo',
    'Awirilikalo',
    'Mɛkalo',
    'Zuwɛnkalo',
    'Zuluyekalo',
    'Utikalo',
    'Sɛtanburukalo',
    'ɔkutɔburukalo',
    'Nowanburukalo',
    'Desanburukalo',
  ],
  weekStart: 1,
  weekdaysShort: ['Kar', 'Ntɛ', 'Tar', 'Ara', 'Ala', 'Jum', 'Sib'],
  monthsShort: [
    'Zan',
    'Few',
    'Mar',
    'Awi',
    'Mɛ',
    'Zuw',
    'Zul',
    'Uti',
    'Sɛt',
    'ɔku',
    'Now',
    'Des',
  ],
  weekdaysMin: ['Ka', 'Nt', 'Ta', 'Ar', 'Al', 'Ju', 'Si'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'MMMM [tile] D [san] YYYY',
    LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
    LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
  },
  relativeTime: {
    future: '%s kɔnɔ',
    past: 'a bɛ %s bɔ',
    s: 'sanga dama dama',
    m: 'miniti kelen',
    mm: 'miniti %d',
    h: 'lɛrɛ kelen',
    hh: 'lɛrɛ %d',
    d: 'tile kelen',
    dd: 'tile %d',
    M: 'kalo kelen',
    MM: 'kalo %d',
    y: 'san kelen',
    yy: 'san %d',
  },
}

dayjs.locale(locale, true)

export default locale
