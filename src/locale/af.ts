// Afrikaans [af]

import dayjs from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'af',
  weekdays: [
    'Sondag',
    'Maandag',
    'Dinsdag',
    'Woensdag',
    'Donderdag',
    'Vrydag',
    'Saterdag',
  ],
  weekdaysShort: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],
  weekdaysMin: ['So', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Sa'],
  months: [
    'Januarie',
    'Februarie',
    'Maart',
    'April',
    'Mei',
    'Junie',
    'Julie',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mrt',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ],
  ordinal: (n) => n,
  weekStart: 1,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'oor %s',
    past: '%s gelede',
    s: "'n paar sekondes",
    m: "'n minuut",
    mm: '%d minute',
    h: "'n uur",
    hh: '%d ure',
    d: "'n dag",
    dd: '%d dae',
    M: "'n maand",
    MM: '%d maande',
    y: "'n jaar",
    yy: '%d jaar',
  },
}

dayjs.locale(locale, true)

export default locale
