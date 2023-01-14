// Kannada [kn]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'kn',
  weekdays: [
    'ಭಾನುವಾರ',
    'ಸೋಮವಾರ',
    'ಮಂಗಳವಾರ',
    'ಬುಧವಾರ',
    'ಗುರುವಾರ',
    'ಶುಕ್ರವಾರ',
    'ಶನಿವಾರ',
  ],
  months: [
    'ಜನವರಿ',
    'ಫೆಬ್ರವರಿ',
    'ಮಾರ್ಚ್',
    'ಏಪ್ರಿಲ್',
    'ಮೇ',
    'ಜೂನ್',
    'ಜುಲೈ',
    'ಆಗಸ್ಟ್',
    'ಸೆಪ್ಟೆಂಬರ್',
    'ಅಕ್ಟೋಬರ್',
    'ನವೆಂಬರ್',
    'ಡಿಸೆಂಬರ್',
  ],
  weekdaysShort: ['ಭಾನು', 'ಸೋಮ', 'ಮಂಗಳ', 'ಬುಧ', 'ಗುರು', 'ಶುಕ್ರ', 'ಶನಿ'],
  monthsShort: [
    'ಜನ',
    'ಫೆಬ್ರ',
    'ಮಾರ್ಚ್',
    'ಏಪ್ರಿಲ್',
    'ಮೇ',
    'ಜೂನ್',
    'ಜುಲೈ',
    'ಆಗಸ್ಟ್',
    'ಸೆಪ್ಟೆಂ',
    'ಅಕ್ಟೋ',
    'ನವೆಂ',
    'ಡಿಸೆಂ',
  ],
  weekdaysMin: ['ಭಾ', 'ಸೋ', 'ಮಂ', 'ಬು', 'ಗು', 'ಶು', 'ಶ'],
  formats: {
    LT: 'A h:mm',
    LTS: 'A h:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm',
    LLLL: 'dddd, D MMMM YYYY, A h:mm',
  },
  relativeTime: {
    future: '%s ನಂತರ',
    past: '%s ಹಿಂದೆ',
    s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
    m: 'ಒಂದು ನಿಮಿಷ',
    mm: '%d ನಿಮಿಷ',
    h: 'ಒಂದು ಗಂಟೆ',
    hh: '%d ಗಂಟೆ',
    d: 'ಒಂದು ದಿನ',
    dd: '%d ದಿನ',
    M: 'ಒಂದು ತಿಂಗಳು',
    MM: '%d ತಿಂಗಳು',
    y: 'ಒಂದು ವರ್ಷ',
    yy: '%d ವರ್ಷ',
  },
}

dayjs.locale(locale, true)

export default locale
