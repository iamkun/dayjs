// Croatian [hr]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: in original file, locale.months is a function.
// All commented out code is from the original locale file.
// I left it in place because it seems to use the other ways.
// https://github.com/iamkun/dayjs/commit/638fd394fc24f4188390faf387da6b156e7c6320

/*
const monthFormat =
  'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split(
    '_'
  )
const monthStandalone =
  'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split(
    '_'
  )
const MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/

const months = (dayjsInstance, format) => {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()]
  }
  return monthStandalone[dayjsInstance.month()]
}
months.s = monthStandalone
months.f = monthFormat
*/

const locale: Locale = {
  name: 'hr',
  weekdays: [
    'nedjelja',
    'ponedjeljak',
    'utorak',
    'srijeda',
    'četvrtak',
    'petak',
    'subota',
  ],
  weekdaysShort: ['ned.', 'pon.', 'uto.', 'sri.', 'čet.', 'pet.', 'sub.'],
  weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
  months: [
    'siječnja',
    'veljače',
    'ožujka',
    'travnja',
    'svibnja',
    'lipnja',
    'srpnja',
    'kolovoza',
    'rujna',
    'listopada',
    'studenoga',
    'prosinca',
  ],
  monthsShort: [
    'sij.',
    'velj.',
    'ožu.',
    'tra.',
    'svi.',
    'lip.',
    'srp.',
    'kol.',
    'ruj.',
    'lis.',
    'stu.',
    'pro.',
  ],
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm',
  },
  relativeTime: {
    future: 'za %s',
    past: 'prije %s',
    s: 'sekunda',
    m: 'minuta',
    mm: '%d minuta',
    h: 'sat',
    hh: '%d sati',
    d: 'dan',
    dd: '%d dana',
    M: 'mjesec',
    MM: '%d mjeseci',
    y: 'godina',
    yy: '%d godine',
  },
  ordinal: (n) => `${n}.`,
}

dayjs.locale(locale, true)

export default locale
