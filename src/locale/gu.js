// Gujarati [gu]
import dayjs from 'dayjs'

const locale = {
  name: 'gu',
  weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
  months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
  weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
  monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
  weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'A h:mm વાગ્યે',
    LTS: 'A h:mm:ss વાગ્યે',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
    LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
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
    yy: '%d વર્ષ'
  }
}

dayjs.locale(locale, null, true)

export default locale

