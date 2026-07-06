// Uzbek [Karakalpak]
import dayjs from 'dayjs'

const locale = {
  name: 'uz-kk',
  weekdays: 'Екшемби_Дүйшемби_Шийшемби_Сәршемби_Пейшемби_Жума_Шемби'.split('_'),
  weekdaysShort: 'Екш_Дүй_Ший_Сәр_Пей_Жум_Шем'.split('_'),
  weekdaysMin: 'Ек_Ду_Ши_Сә_Пе_Жу_Ше'.split('_'),
  weekStart: 1,
  yearStart: 4,
  months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентабрь_Октабрь_Ноябрь_Декабрь'.split('_'),
  monthsShort: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
  ordinal: n => n,
  formats: {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',

    l: 'D/M/YYYY',
    ll: 'D MMM, YYYY',
    lll: 'D MMM, YYYY h:mm A',
    llll: 'ddd, MMM D, YYYY h:mm A',
  },
  relativeTime: {
    future: '%s ишинде',
    past: '%s алдын',
    s: 'бир неше секунд',
    m: 'Бир минута',
    mm: '%d минута',
    h: 'бир саат',
    hh: '%d саат',
    d: 'бир күн',
    dd: '%d күн',
    M: 'бир ай',
    MM: '%d ай',
    y: 'бир жыл',
    yy: '%d жыл',
  },
};

dayjs.locale(locale, null, true)

export default locale
