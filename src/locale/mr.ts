// Marathi [mr]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'mr',
  weekdays: [
    'रविवार',
    'सोमवार',
    'मंगळवार',
    'बुधवार',
    'गुरूवार',
    'शुक्रवार',
    'शनिवार',
  ],
  months: [
    'जानेवारी',
    'फेब्रुवारी',
    'मार्च',
    'एप्रिल',
    'मे',
    'जून',
    'जुलै',
    'ऑगस्ट',
    'सप्टेंबर',
    'ऑक्टोबर',
    'नोव्हेंबर',
    'डिसेंबर',
  ],
  weekdaysShort: ['रवि', 'सोम', 'मंगळ', 'बुध', 'गुरू', 'शुक्र', 'शनि'],
  monthsShort: [
    'जाने.',
    'फेब्रु.',
    'मार्च.',
    'एप्रि.',
    'मे.',
    'जून.',
    'जुलै.',
    'ऑग.',
    'सप्टें.',
    'ऑक्टो.',
    'नोव्हें.',
    'डिसें.',
  ],
  weekdaysMin: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
  formats: {
    LT: 'A h:mm वाजता',
    LTS: 'A h:mm:ss वाजता',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm वाजता',
    LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता',
  },
}

dayjs.locale(locale, true)

export default locale
