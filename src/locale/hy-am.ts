// Armenian [hy-am]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'hy-am',
  weekdays: [
    'կիրակի',
    'երկուշաբթի',
    'երեքշաբթի',
    'չորեքշաբթի',
    'հինգշաբթի',
    'ուրբաթ',
    'շաբաթ',
  ],
  months: [
    'հունվարի',
    'փետրվարի',
    'մարտի',
    'ապրիլի',
    'մայիսի',
    'հունիսի',
    'հուլիսի',
    'օգոստոսի',
    'սեպտեմբերի',
    'հոկտեմբերի',
    'նոյեմբերի',
    'դեկտեմբերի',
  ],
  weekStart: 1,
  weekdaysShort: ['կրկ', 'երկ', 'երք', 'չրք', 'հնգ', 'ուրբ', 'շբթ'],
  monthsShort: [
    'հնվ',
    'փտր',
    'մրտ',
    'ապր',
    'մյս',
    'հնս',
    'հլս',
    'օգս',
    'սպտ',
    'հկտ',
    'նմբ',
    'դկտ',
  ],
  weekdaysMin: ['կրկ', 'երկ', 'երք', 'չրք', 'հնգ', 'ուրբ', 'շբթ'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY թ.',
    LLL: 'D MMMM YYYY թ., HH:mm',
    LLLL: 'dddd, D MMMM YYYY թ., HH:mm',
  },
  relativeTime: {
    future: '%s հետո',
    past: '%s առաջ',
    s: 'մի քանի վայրկյան',
    m: 'րոպե',
    mm: '%d րոպե',
    h: 'ժամ',
    hh: '%d ժամ',
    d: 'օր',
    dd: '%d օր',
    M: 'ամիս',
    MM: '%d ամիս',
    y: 'տարի',
    yy: '%d տարի',
  },
}

dayjs.locale(locale, true)

export default locale
