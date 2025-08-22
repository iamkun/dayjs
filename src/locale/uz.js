// Uzbek [uz]
import dayjs from 'dayjs'

const locale = {
  name: 'uz',
  weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
  months: 'Январ_Феврал_Март_Апрел_Май_Июн_Июл_Август_Сентябр_Октябр_Ноябр_Декабр'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
  monthsShort: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
  weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'D MMMM YYYY, dddd HH:mm'
  },
  relativeTime: {
    future: 'Якин %s ичида',
    past: '%s олдин',
    s: 'фурсат',
    m: 'бир дакика',
    mm: '%d дакика',
    h: 'бир соат',
    hh: '%d соат',
    d: 'бир кун',
    dd: '%d кун',
    M: 'бир ой',
    MM: '%d ой',
    y: 'бир йил',
    yy: '%d йил'
  }
}

dayjs.locale(locale, null, true)

export default locale

