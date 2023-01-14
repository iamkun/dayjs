// Slovak [sk]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'relativeTime' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'relativeTime' plugin.
// https://github.com/iamkun/dayjs/commit/f0d451f795e9ebf752cd854d51b25b11de2343a3

/*
function plural(n) {
  return (n > 1) && (n < 5) && (~~(n / 10) !== 1) // eslint-disable-line
}

function translate(number, withoutSuffix, key, isFuture) {
  const result = `${number} `
  switch (key) {
    case 's': // a few seconds / in a few seconds / a few seconds ago
      return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami'
    case 'm': // a minute / in a minute / a minute ago
      return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou')
    case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'minúty' : 'minút')
      }
      return `${result}minútami`
    case 'h': // an hour / in an hour / an hour ago
      return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou')
    case 'hh': // 9 hours / in 9 hours / 9 hours ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'hodiny' : 'hodín')
      }
      return `${result}hodinami`
    case 'd': // a day / in a day / a day ago
      return (withoutSuffix || isFuture) ? 'deň' : 'dňom'
    case 'dd': // 9 days / in 9 days / 9 days ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'dni' : 'dní')
      }
      return `${result}dňami`
    case 'M': // a month / in a month / a month ago
      return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom'
    case 'MM': // 9 months / in 9 months / 9 months ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'mesiace' : 'mesiacov')
      }
      return `${result}mesiacmi`
    case 'y': // a year / in a year / a year ago
      return (withoutSuffix || isFuture) ? 'rok' : 'rokom'
    case 'yy': // 9 years / in 9 years / 9 years ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'roky' : 'rokov')
      }
      return `${result}rokmi`
  }
}
*/

const locale: Locale = {
  name: 'sk',
  weekdays: [
    'nedeľa',
    'pondelok',
    'utorok',
    'streda',
    'štvrtok',
    'piatok',
    'sobota',
  ],
  weekdaysShort: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
  weekdaysMin: ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'],
  months: [
    'január',
    'február',
    'marec',
    'apríl',
    'máj',
    'jún',
    'júl',
    'august',
    'september',
    'október',
    'november',
    'december',
  ],
  monthsShort: [
    'jan',
    'feb',
    'mar',
    'apr',
    'máj',
    'jún',
    'júl',
    'aug',
    'sep',
    'okt',
    'nov',
    'dec',
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
    future: 'za %s', // Should be `o %s` (change when moment/moment#5408 is fixed)
    past: 'pred %s',
    s: 'pár sekúnd',
    m: 'minúta',
    mm: '%d minút',
    h: 'hodina',
    hh: '%d hodín',
    d: 'deň',
    dd: '%d dní',
    M: 'mesiac',
    MM: '%d mesiacov',
    y: 'rok',
    yy: '%d rokov',
  },
}

dayjs.locale(locale, true)

export default locale
