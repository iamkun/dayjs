import dayjs from 'dayjs'

const locale = {
  name: 'uk',
  weekdays: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
  months: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
  relativeTime: {
    future: 'через %s',
    past: '%s назад',
    s: 'декілька секунд',
    m: 'хвилина',
    mm: '%d хвилин',
    h: 'година',
    hh: '%d годин',
    d: 'день',
    dd: '%d днів',
    M: 'місяць',
    MM: '%d місяців',
    y: 'рік',
    yy: '%d роки'
  },
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale
