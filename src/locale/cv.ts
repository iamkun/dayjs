// Chuvash [cv]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'cv',
  weekdays: [
    'вырсарникун',
    'тунтикун',
    'ытларикун',
    'юнкун',
    'кӗҫнерникун',
    'эрнекун',
    'шӑматкун',
  ],
  months: [
    'кӑрлач',
    'нарӑс',
    'пуш',
    'ака',
    'май',
    'ҫӗртме',
    'утӑ',
    'ҫурла',
    'авӑн',
    'юпа',
    'чӳк',
    'раштав',
  ],
  weekStart: 1,
  weekdaysShort: ['выр', 'тун', 'ытл', 'юн', 'кӗҫ', 'эрн', 'шӑм'],
  monthsShort: [
    'кӑр',
    'нар',
    'пуш',
    'ака',
    'май',
    'ҫӗр',
    'утӑ',
    'ҫур',
    'авн',
    'юпа',
    'чӳк',
    'раш',
  ],
  weekdaysMin: ['вр', 'тн', 'ыт', 'юн', 'кҫ', 'эр', 'шм'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD-MM-YYYY',
    LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
    LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
    LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
  },
}

dayjs.locale(locale, true)

export default locale
