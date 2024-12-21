// Kyrgyz [ky]
import dayjs from 'dayjs'

const locale = {
  name: 'ky',
  weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
  months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
  monthsShort: 'Янв_Фев_Март_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Ноя_Дек'.split('_'),
  weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
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
    yy: '%d жыл'
  }
}

dayjs.locale(locale, null, true)

export default locale

