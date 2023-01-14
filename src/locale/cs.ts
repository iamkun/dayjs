// Czech [cs]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'relativeTime' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'relativeTime' plugin.
// https://github.com/iamkun/dayjs/commit/3f080f7d6bfdc4018cbb7c4d0112ff1ead4ef6b8

/*
const plural = (n: number) => n > 1 && n < 5 && Math.trunc(n / 10) !== 1

function translate(number, withoutSuffix, key, isFuture) {
  const result = `${number} `
  switch (key) {
    case 's': // a few seconds / in a few seconds / a few seconds ago
      return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami'
    case 'm': // a minute / in a minute / a minute ago
      return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou'
    case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'minuty' : 'minut')
      }
      return `${result}minutami`
    case 'h': // an hour / in an hour / an hour ago
      return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou'
    case 'hh': // 9 hours / in 9 hours / 9 hours ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'hodiny' : 'hodin')
      }
      return `${result}hodinami`
    case 'd': // a day / in a day / a day ago
      return withoutSuffix || isFuture ? 'den' : 'dnem'
    case 'dd': // 9 days / in 9 days / 9 days ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'dny' : 'dní')
      }
      return `${result}dny`
    case 'M': // a month / in a month / a month ago
      return withoutSuffix || isFuture ? 'měsíc' : 'měsícem'
    case 'MM': // 9 months / in 9 months / 9 months ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'měsíce' : 'měsíců')
      }
      return `${result}měsíci`
    case 'y': // a year / in a year / a year ago
      return withoutSuffix || isFuture ? 'rok' : 'rokem'
    case 'yy': // 9 years / in 9 years / 9 years ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'roky' : 'let')
      }
      return `${result}lety`
  }
}
*/

const locale: Locale = {
  name: 'cs',
  weekdays: [
    'neděle',
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
  ],
  weekdaysShort: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
  weekdaysMin: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
  months: [
    'leden',
    'únor',
    'březen',
    'duben',
    'květen',
    'červen',
    'červenec',
    'srpen',
    'září',
    'říjen',
    'listopad',
    'prosinec',
  ],
  monthsShort: [
    'led',
    'úno',
    'bře',
    'dub',
    'kvě',
    'čvn',
    'čvc',
    'srp',
    'zář',
    'říj',
    'lis',
    'pro',
  ],
  weekStart: 1,
  yearStart: 4,
  ordinal: (n) => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd D. MMMM YYYY H:mm',
    l: 'D. M. YYYY',
  },
  relativeTime: {
    future: 'za %s',
    past: 'před %s',
    s: 'pár sekund',
    m: 'minutu',
    mm: '%d minuty',
    h: 'hodinu',
    hh: '%d hodiny',
    d: 'den',
    dd: '%d dny',
    M: 'měsíc',
    MM: '%d měsíce',
    y: 'rok',
    yy: '%d roky',
  },
}

dayjs.locale(locale, true)

export default locale
