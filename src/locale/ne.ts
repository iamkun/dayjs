// Nepalese [ne]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ne',
  weekdays: [
    'आइतबार',
    'सोमबार',
    'मङ्गलबार',
    'बुधबार',
    'बिहिबार',
    'शुक्रबार',
    'शनिबार',
  ],
  weekdaysShort: ['आइत.', 'सोम.', 'मङ्गल.', 'बुध.', 'बिहि.', 'शुक्र.', 'शनि.'],
  weekdaysMin: ['आ.', 'सो.', 'मं.', 'बु.', 'बि.', 'शु.', 'श.'],
  months: [
    'जनवरी',
    'फेब्रुवरी',
    'मार्च',
    'अप्रिल',
    'मे',
    'जुन',
    'जुलाई',
    'अगष्ट',
    'सेप्टेम्बर',
    'अक्टोबर',
    'नोभेम्बर',
    'डिसेम्बर',
  ],
  monthsShort: [
    'जन.',
    'फेब्रु.',
    'मार्च',
    'अप्रि.',
    'मई',
    'जुन',
    'जुलाई.',
    'अग.',
    'सेप्ट.',
    'अक्टो.',
    'नोभे.',
    'डिसे.',
  ],
  relativeTime: {
    future: '%s पछि',
    past: '%s अघि',
    s: 'सेकेन्ड',
    m: 'एक मिनेट',
    mm: '%d मिनेट',
    h: 'घन्टा',
    hh: '%d घन्टा',
    d: 'एक दिन',
    dd: '%d दिन',
    M: 'एक महिना',
    MM: '%d महिना',
    y: 'एक वर्ष',
    yy: '%d वर्ष',
  },
  ordinal: (n) => `${n}`.replace(/\d/g, (i: string) => '०१२३४५६७८९'[Number(i)]),
  formats: {
    LT: 'Aको h:mm बजे',
    LTS: 'Aको h:mm:ss बजे',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, Aको h:mm बजे',
    LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे',
  },
}

dayjs.locale(locale, true)

export default locale
