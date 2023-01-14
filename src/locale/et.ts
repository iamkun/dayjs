// Estonian [et]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'relativeTime' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'relativeTime' plugin.
// https://github.com/iamkun/dayjs/commit/d8e0f45f6cd2d5e5704b9797929227454c92d1a5

/*
const relativeTimeWithTense = () => {
  const format = {
    s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
    m: ['ühe minuti', 'üks minut'],
    mm: ['%d minuti', '%d minutit'],
    h: ['ühe tunni', 'tund aega', 'üks tund'],
    hh: ['%d tunni', '%d tundi'],
    d: ['ühe päeva', 'üks päev'],
    M: ['kuu aja', 'kuu aega', 'üks kuu'],
    MM: ['%d kuu', '%d kuud'],
    y: ['ühe aasta', 'aasta', 'üks aasta'],
    yy: ['%d aasta', '%d aastat']
  }
  if (withoutSuffix) {
    return (format[key][2] ? format[key][2] : format[key][1]).replace('%d', number)
  }
  return (isFuture ? format[key][0] : format[key][1]).replace('%d', number)
}
*/

const locale: Locale = {
  name: 'et', // Estonian
  weekdays: [
    'pühapäev',
    'esmaspäev',
    'teisipäev',
    'kolmapäev',
    'neljapäev',
    'reede',
    'laupäev',
  ], // Note weekdays are not capitalized in Estonian
  weekdaysShort: ['P', 'E', 'T', 'K', 'N', 'R', 'L'], // There is no short form of weekdays in Estonian except this 1 letter format so it is used for both 'weekdaysShort' and 'weekdaysMin'
  weekdaysMin: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
  months: [
    'jaanuar',
    'veebruar',
    'märts',
    'aprill',
    'mai',
    'juuni',
    'juuli',
    'august',
    'september',
    'oktoober',
    'november',
    'detsember',
  ], // Note month names are not capitalized in Estonian
  monthsShort: [
    'jaan',
    'veebr',
    'märts',
    'apr',
    'mai',
    'juuni',
    'juuli',
    'aug',
    'sept',
    'okt',
    'nov',
    'dets',
  ],
  ordinal: (n) => `${n}.`,
  weekStart: 1,
  relativeTime: {
    future: '%s pärast',
    past: '%s tagasi',
    s: 'mõni sekund',
    m: 'üks minut',
    mm: '%d minutit',
    h: 'tund aega',
    hh: '%d tundi',
    d: 'üks päev',
    dd: '%d päeva',
    M: 'kuu aja',
    MM: '%d kuud',
    y: 'aasta',
    yy: '%d aastat',
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm',
  },
}

dayjs.locale(locale, true)

export default locale
