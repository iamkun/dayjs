// Yoruba Nigeria [yo]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'yo',
  weekdays: ['Àìkú', 'Ajé', 'Ìsẹ́gun', 'Ọjọ́rú', 'Ọjọ́bọ', 'Ẹtì', 'Àbámẹ́ta'],
  months: [
    'Sẹ́rẹ́',
    'Èrèlè',
    'Ẹrẹ̀nà',
    'Ìgbé',
    'Èbibi',
    'Òkùdu',
    'Agẹmo',
    'Ògún',
    'Owewe',
    'Ọ̀wàrà',
    'Bélú',
    'Ọ̀pẹ̀̀',
  ],
  weekStart: 1,
  weekdaysShort: ['Àìk', 'Ajé', 'Ìsẹ́', 'Ọjr', 'Ọjb', 'Ẹtì', 'Àbá'],
  monthsShort: [
    'Sẹ́r',
    'Èrl',
    'Ẹrn',
    'Ìgb',
    'Èbi',
    'Òkù',
    'Agẹ',
    'Ògú',
    'Owe',
    'Ọ̀wà',
    'Bél',
    'Ọ̀pẹ̀̀',
  ],
  weekdaysMin: ['Àì', 'Aj', 'Ìs', 'Ọr', 'Ọb', 'Ẹt', 'Àb'],
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY h:mm A',
    LLLL: 'dddd, D MMMM YYYY h:mm A',
  },
  relativeTime: {
    future: 'ní %s',
    past: '%s kọjá',
    s: 'ìsẹjú aayá die',
    m: 'ìsẹjú kan',
    mm: 'ìsẹjú %d',
    h: 'wákati kan',
    hh: 'wákati %d',
    d: 'ọjọ́ kan',
    dd: 'ọjọ́ %d',
    M: 'osù kan',
    MM: 'osù %d',
    y: 'ọdún kan',
    yy: 'ọdún %d',
  },
}

dayjs.locale(locale, true)

export default locale
