import dayjs from 'dayjs'

const locale = {
  name: 'ro',
  weekdays: 'Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă'.split('_'),
  months: 'Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie'.split('_'),
  relativeTime: {
    future: 'peste %s',
    past: 'acum %s',
    s: 'câteva secunde',
    m: 'un minut',
    mm: '%d minute',
    h: 'o oră',
    hh: '%d ore',
    d: 'o zi',
    dd: '%d zile',
    M: 'o lună',
    MM: '%d luni',
    y: 'un an',
    yy: '%d ani'
  },
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale
