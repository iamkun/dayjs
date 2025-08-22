// Bulgarian [bg]
import dayjs from 'dayjs'

const locale = {
  name: 'bg',
  weekdays: 'Неделя_Понеделник_Вторник_Сряда_Четвъртък_Петък_Събота'.split('_'),
  weekdaysShort: 'Нед_Пон_Вто_Сря_Чет_Пет_Съб'.split('_'),
  weekdaysMin: 'Нд_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
  months: 'Януари_Февруари_Март_Април_Май_Юни_Юли_Август_Септември_Октомври_Ноември_Декември'.split('_'),
  monthsShort: 'Яну_Фев_Мар_Апр_Май_Юни_Юли_Авг_Сеп_Окт_Ное_Дек'.split('_'),
  weekStart: 1,
  ordinal: (n) => {
    const last2Digits = n % 100
    if (last2Digits > 10 && last2Digits < 20) {
      return `${n}-ти`
    }

    const lastDigit = n % 10
    if (lastDigit === 1) {
      return `${n}-ви`
    } else if (lastDigit === 2) {
      return `${n}-ри`
    } else if (lastDigit === 7 || lastDigit === 8) {
      return `${n}-ми`
    }

    return `${n}-ти`
  },
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
    dd: '%d дена',
    M: 'месец',
    MM: '%d месеца',
    y: 'година',
    yy: '%d години'
  }
}

dayjs.locale(locale, null, true)

export default locale
