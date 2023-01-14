// Serbian [sr]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'relativeTime' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'relativeTime' plugin.
// https://github.com/iamkun/dayjs/commit/cc87eff8b75b0d86ce0956516319d402bccae6c0

/*
const locale: Locale = {
  words: {
    m: ['jedan minut', 'jednog minuta'],
    mm: ['%d minut', '%d minuta', '%d minuta'],
    h: ['jedan sat', 'jednog sata'],
    hh: ['%d sat', '%d sata', '%d sati'],
    d: ['jedan dan', 'jednog dana'],
    dd: ['%d dan', '%d dana', '%d dana'],
    M: ['jedan mesec', 'jednog meseca'],
    MM: ['%d mesec', '%d meseca', '%d meseci'],
    y: ['jednu godinu', 'jedne godine'],
    yy: ['%d godinu', '%d godine', '%d godina']
  },
  correctGrammarCase(number, wordKey) {
    if (number % 10 >= 1 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
      return number % 10 === 1 ? wordKey[0] : wordKey[1]
    }
    return wordKey[2]
  },
  relativeTimeFormatter(number, withoutSuffix, key, isFuture) {
    const wordKey = translator.words[key]

    if (key.length === 1) {
      // Nominativ
      if (key === 'y' && withoutSuffix) return 'jedna godina'
      return isFuture || withoutSuffix ? wordKey[0] : wordKey[1]
    }

    const word = translator.correctGrammarCase(number, wordKey)
    // Nominativ
    if (key === 'yy' && withoutSuffix && word === '%d godinu') return `${number} godina`

    return word.replace('%d', number)
  }
}
*/

const locale: Locale = {
  name: 'sr',
  weekdays: [
    'Nedelja',
    'Ponedeljak',
    'Utorak',
    'Sreda',
    'Četvrtak',
    'Petak',
    'Subota',
  ],
  weekdaysShort: ['Ned.', 'Pon.', 'Uto.', 'Sre.', 'Čet.', 'Pet.', 'Sub.'],
  weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
  months: [
    'Januar',
    'Februar',
    'Mart',
    'April',
    'Maj',
    'Jun',
    'Jul',
    'Avgust',
    'Septembar',
    'Oktobar',
    'Novembar',
    'Decembar',
  ],
  monthsShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'Maj',
    'Jun',
    'Jul',
    'Avg.',
    'Sep.',
    'Okt.',
    'Nov.',
    'Dec.',
  ],
  weekStart: 1,
  relativeTime: {
    future: 'za %s',
    past: 'pre %s',
    s: 'nekoliko sekundi',
    m: 'jedan minut',
    mm: '%d minuta',
    h: 'jedan sat',
    hh: '%d sati',
    d: 'jedan dan',
    dd: '%d dana',
    M: 'jedan mesec',
    MM: '%d meseci',
    y: 'jednu godinu',
    yy: '%d godina',
  },
  ordinal: (n) => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'D. M. YYYY.',
    LL: 'D. MMMM YYYY.',
    LLL: 'D. MMMM YYYY. H:mm',
    LLLL: 'dddd, D. MMMM YYYY. H:mm',
  },
}

dayjs.locale(locale, true)

export default locale
