// Bulgarian [bg]
import dayjs from 'dayjs'

const locale = {
  name: 'bg',
  weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
  weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
  weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
  months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
  monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
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
