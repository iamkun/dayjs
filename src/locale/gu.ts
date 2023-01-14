// Gujarati [gu]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'gu',
  weekdays: [
    'રવિવાર',
    'સોમવાર',
    'મંગળવાર',
    'બુધ્વાર',
    'ગુરુવાર',
    'શુક્રવાર',
    'શનિવાર',
  ],
  months: [
    'જાન્યુઆરી',
    'ફેબ્રુઆરી',
    'માર્ચ',
    'એપ્રિલ',
    'મે',
    'જૂન',
    'જુલાઈ',
    'ઑગસ્ટ',
    'સપ્ટેમ્બર',
    'ઑક્ટ્બર',
    'નવેમ્બર',
    'ડિસેમ્બર',
  ],
  weekdaysShort: ['રવિ', 'સોમ', 'મંગળ', 'બુધ્', 'ગુરુ', 'શુક્ર', 'શનિ'],
  monthsShort: [
    'જાન્યુ.',
    'ફેબ્રુ.',
    'માર્ચ',
    'એપ્રિ.',
    'મે',
    'જૂન',
    'જુલા.',
    'ઑગ.',
    'સપ્ટે.',
    'ઑક્ટ્.',
    'નવે.',
    'ડિસે.',
  ],
  weekdaysMin: ['ર', 'સો', 'મં', 'બુ', 'ગુ', 'શુ', 'શ'],
  formats: {
    LT: 'A h:mm વાગ્યે',
    LTS: 'A h:mm:ss વાગ્યે',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
    LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે',
  },
  relativeTime: {
    future: '%s મા',
    past: '%s પેહલા',
    s: 'અમુક પળો',
    m: 'એક મિનિટ',
    mm: '%d મિનિટ',
    h: 'એક કલાક',
    hh: '%d કલાક',
    d: 'એક દિવસ',
    dd: '%d દિવસ',
    M: 'એક મહિનો',
    MM: '%d મહિનો',
    y: 'એક વર્ષ',
    yy: '%d વર્ષ',
  },
}

dayjs.locale(locale, true)

export default locale
