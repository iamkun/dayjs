// Macedonian [mk]
import dayjs from 'dayjs'

const locale = {
  name: 'mk',
  weekdays: 'Недела_Понеделник_Вторник_Среда_Четврток_Петок_Сабота'.split('_'),
  months: 'Јануари_Февруари_Март_Април_Мај_Јуни_Јули_Август_Септември_Октомври_Ноември_Декември'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Нед_Пон_Вто_Сре_Чет_Пет_Саб'.split('_'),
  monthsShort: 'Јан_Фев_Мар_Апр_Мај_Јун_Јул_Авг_Сеп_Окт_Ное_Дек'.split('_'),
  weekdaysMin: 'Нe_Пo_Вт_Ср_Че_Пе_Сa'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'D.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY H:mm',
    LLLL: 'dddd, D MMMM YYYY H:mm'
  },
  relativeTime: {
    future: 'после %s',
    past: 'пред %s',
    s: 'неколку секунди',
    m: 'минута',
    mm: '%d минути',
    h: 'час',
    hh: '%d часа',
    d: 'ден',
    dd: '%d дена',
    M: 'месец',
    MM: '%d месеци',
    y: 'година',
    yy: '%d години'
  }
}

dayjs.locale(locale, null, true)

export default locale

