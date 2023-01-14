// Serbian Cyrillic [sr-cyrl]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'relativeTime' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'relativeTime' plugin.
// https://github.com/iamkun/dayjs/commit/cc87eff8b75b0d86ce0956516319d402bccae6c0

/*
const translator = {
  words: {
    m: ['један минут', 'једног минута'],
    mm: ['%d минут', '%d минута', '%d минута'],
    h: ['један сат', 'једног сата'],
    hh: ['%d сат', '%d сата', '%d сати'],
    d: ['један дан', 'једног дана'],
    dd: ['%d дан', '%d дана', '%d дана'],
    M: ['један месец', 'једног месеца'],
    MM: ['%d месец', '%d месеца', '%d месеци'],
    y: ['једну годину', 'једне године'],
    yy: ['%d годину', '%d године', '%d година']
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
      if (key === 'y' && withoutSuffix) return 'једна година'
      return isFuture || withoutSuffix ? wordKey[0] : wordKey[1]
    }

    const word = translator.correctGrammarCase(number, wordKey)
    // Nominativ
    if (key === 'yy' && withoutSuffix && word === '%d годину') return `${number} година`

    return word.replace('%d', number)
  }
}
*/

const locale: Locale = {
  name: 'sr-cyrl',
  weekdays: [
    'Недеља',
    'Понедељак',
    'Уторак',
    'Среда',
    'Четвртак',
    'Петак',
    'Субота',
  ],
  weekdaysShort: ['Нед.', 'Пон.', 'Уто.', 'Сре.', 'Чет.', 'Пет.', 'Суб.'],
  weekdaysMin: ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су'],
  months: [
    'Јануар',
    'Фебруар',
    'Март',
    'Април',
    'Мај',
    'Јун',
    'Јул',
    'Август',
    'Септембар',
    'Октобар',
    'Новембар',
    'Децембар',
  ],
  monthsShort: [
    'Јан.',
    'Феб.',
    'Мар.',
    'Апр.',
    'Мај',
    'Јун',
    'Јул',
    'Авг.',
    'Сеп.',
    'Окт.',
    'Нов.',
    'Дец.',
  ],
  weekStart: 1,
  relativeTime: {
    future: 'за %s',
    past: 'пре %s',
    s: 'неколико секунди',
    m: 'минут',
    mm: '%d минута',
    h: 'сат',
    hh: '%d сати',
    d: 'дан',
    dd: '%d дана',
    M: 'месец',
    MM: '%d месеци',
    y: 'годину',
    yy: '%d године',
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
