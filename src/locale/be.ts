// Belarusian [be]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'be',
  weekdays: [
    'нядзелю',
    'панядзелак',
    'аўторак',
    'сераду',
    'чацвер',
    'пятніцу',
    'суботу',
  ],
  months: [
    'студзеня',
    'лютага',
    'сакавіка',
    'красавіка',
    'траўня',
    'чэрвеня',
    'ліпеня',
    'жніўня',
    'верасня',
    'кастрычніка',
    'лістапада',
    'снежня',
  ],
  weekStart: 1,
  weekdaysShort: ['нд', 'пн', 'ат', 'ср', 'чц', 'пт', 'сб'],
  monthsShort: [
    'студ',
    'лют',
    'сак',
    'крас',
    'трав',
    'чэрв',
    'ліп',
    'жнів',
    'вер',
    'каст',
    'ліст',
    'снеж',
  ],
  weekdaysMin: ['нд', 'пн', 'ат', 'ср', 'чц', 'пт', 'сб'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY г.',
    LLL: 'D MMMM YYYY г., HH:mm',
    LLLL: 'dddd, D MMMM YYYY г., HH:mm',
  },
}

dayjs.locale(locale, true)

export default locale
