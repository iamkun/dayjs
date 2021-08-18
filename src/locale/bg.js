// Bulgarian [bg]
import dayjs from 'dayjs'

const locale = {
  name: 'bg',
  weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
  weekdaysShort: 'нед._пон._втор._ср._четв._пет._съб.'.split('_'),
  weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
  months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
  monthsShort: 'ян._февр._март_апр._май_юни_юли_авг._септ._окт._ноем._дек.'.split('_'),
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
    dd: '%d дни',
    M: 'месец',
    MM: '%d месеца',
    y: 'година',
    yy: '%d години'
  }
}

dayjs.locale(locale, null, true)

export default locale
