// Bulgarian [bg]
import dayjs from 'dayjs'

const locale = {
  name: 'bg',
  weekdays: 'Неделя_Понеделник_Вторник_Сряда_Четвъртък_Петък_Събота'.split('_'),
  weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
  weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
  months: 'Януари_Февруари_Март_Април_Май_Юни_Юли_Август_Септември_Октомври_Ноември_Декември'.split('_'),
  monthsShort: 'Янр_Фев_Мар_Апр_Май_Юни_Юли_Авг_Сеп_Окт_Ное_Дек'.split('_'),
  weekStart: 1,
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'D.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY H:mm',
    LLLL: 'dddd, D MMMM YYYY H:mm'
  },
  relativeTime: {
    future: 'след %s',
    past: 'преди %s',
    s: 'няколко секунди',
    m: 'минута',
    mm: '%d минути',
    h: 'час',
    hh: '%d часа',
    d: 'ден',
    dd: '%d дни',
    M: 'месец',
    MM: '%d месеца',
    y: 'година',
    yy: '%d години'
  }
}

dayjs.locale(locale, null, true)

export default locale
