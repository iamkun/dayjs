// Telugu [te]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'te',
  weekdays: [
    'ఆదివారం',
    'సోమవారం',
    'మంగళవారం',
    'బుధవారం',
    'గురువారం',
    'శుక్రవారం',
    'శనివారం',
  ],
  months: [
    'జనవరి',
    'ఫిబ్రవరి',
    'మార్చి',
    'ఏప్రిల్',
    'మే',
    'జూన్',
    'జులై',
    'ఆగస్టు',
    'సెప్టెంబర్',
    'అక్టోబర్',
    'నవంబర్',
    'డిసెంబర్',
  ],
  weekdaysShort: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని'],
  monthsShort: [
    'జన.',
    'ఫిబ్ర.',
    'మార్చి',
    'ఏప్రి.',
    'మే',
    'జూన్',
    'జులై',
    'ఆగ.',
    'సెప్.',
    'అక్టో.',
    'నవ.',
    'డిసె.',
  ],
  weekdaysMin: ['ఆ', 'సో', 'మం', 'బు', 'గు', 'శు', 'శ'],
  formats: {
    LT: 'A h:mm',
    LTS: 'A h:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm',
    LLLL: 'dddd, D MMMM YYYY, A h:mm',
  },
  relativeTime: {
    future: '%s లో',
    past: '%s క్రితం',
    s: 'కొన్ని క్షణాలు',
    m: 'ఒక నిమిషం',
    mm: '%d నిమిషాలు',
    h: 'ఒక గంట',
    hh: '%d గంటలు',
    d: 'ఒక రోజు',
    dd: '%d రోజులు',
    M: 'ఒక నెల',
    MM: '%d నెలలు',
    y: 'ఒక సంవత్సరం',
    yy: '%d సంవత్సరాలు',
  },
}

dayjs.locale(locale, true)

export default locale
