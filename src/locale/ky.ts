// Kyrgyz [ky]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ky',
  weekdays: [
    'Жекшемби',
    'Дүйшөмбү',
    'Шейшемби',
    'Шаршемби',
    'Бейшемби',
    'Жума',
    'Ишемби',
  ],
  months: [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ],
  weekStart: 1,
  weekdaysShort: ['Жек', 'Дүй', 'Шей', 'Шар', 'Бей', 'Жум', 'Ише'],
  monthsShort: [
    'янв',
    'фев',
    'март',
    'апр',
    'май',
    'июнь',
    'июль',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ],
  weekdaysMin: ['Жк', 'Дй', 'Шй', 'Шр', 'Бй', 'Жм', 'Иш'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: '%s ичинде',
    past: '%s мурун',
    s: 'бирнече секунд',
    m: 'бир мүнөт',
    mm: '%d мүнөт',
    h: 'бир саат',
    hh: '%d саат',
    d: 'бир күн',
    dd: '%d күн',
    M: 'бир ай',
    MM: '%d ай',
    y: 'бир жыл',
    yy: '%d жыл',
  },
}

dayjs.locale(locale, true)

export default locale
