// Klingon [tlh]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'tlh',
  weekdays: [
    'lojmItjaj',
    'DaSjaj',
    'povjaj',
    'ghItlhjaj',
    'loghjaj',
    'buqjaj',
    'ghInjaj',
  ],
  months: [
    'tera’ jar wa’',
    'tera’ jar cha’',
    'tera’ jar wej',
    'tera’ jar loS',
    'tera’ jar vagh',
    'tera’ jar jav',
    'tera’ jar Soch',
    'tera’ jar chorgh',
    'tera’ jar Hut',
    'tera’ jar wa’maH',
    'tera’ jar wa’maH wa’',
    'tera’ jar wa’maH cha’',
  ],
  weekStart: 1,
  weekdaysShort: [
    'lojmItjaj',
    'DaSjaj',
    'povjaj',
    'ghItlhjaj',
    'loghjaj',
    'buqjaj',
    'ghInjaj',
  ],
  monthsShort: [
    'jar wa’',
    'jar cha’',
    'jar wej',
    'jar loS',
    'jar vagh',
    'jar jav',
    'jar Soch',
    'jar chorgh',
    'jar Hut',
    'jar wa’maH',
    'jar wa’maH wa’',
    'jar wa’maH cha’',
  ],
  weekdaysMin: [
    'lojmItjaj',
    'DaSjaj',
    'povjaj',
    'ghItlhjaj',
    'loghjaj',
    'buqjaj',
    'ghInjaj',
  ],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
}

dayjs.locale(locale, true)

export default locale
