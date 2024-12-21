// Tajik [tg]
import dayjs from 'dayjs'

const locale = {
  name: 'tg',
  weekdays: 'Якшанбе_Душанбе_Сешанбе_Чоршанбе_Панҷшанбе_Ҷумъа_Шанбе'.split('_'),
  months: 'Январ_Феврал_Март_Апрел_Май_Июн_Июл_Август_Сентябр_Октябр_Ноябр_Декабр'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Яшб_Дшб_Сшб_Чшб_Пшб_Ҷум_Шнб'.split('_'),
  monthsShort: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
  weekdaysMin: 'Яш_Дш_Сш_Чш_Пш_Ҷм_Шб'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'баъди %s',
    past: '%s пеш',
    s: 'якчанд сония',
    m: 'як дақиқа',
    mm: '%d дақиқа',
    h: 'як соат',
    hh: '%d соат',
    d: 'як рӯз',
    dd: '%d рӯз',
    M: 'як моҳ',
    MM: '%d моҳ',
    y: 'як сол',
    yy: '%d сол'
  }
}

dayjs.locale(locale, null, true)

export default locale

