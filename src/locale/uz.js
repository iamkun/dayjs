// Uzbek [uz]
import dayjs from 'dayjs'

const locale = {
  name: 'uz',
  weekdays: 'якшанба_душанба_сешанба_чоршанба_пайшанба_жума_шанба'.split('_'),
  months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
  weekStart: 1,
  weekdaysShort: 'якш_душ_сеш_чор_пай_жум_шан'.split('_'),
  monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
  weekdaysMin: 'як_ду_се_чо_па_жу_ша'.split('_'),
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
    future: '%sдан кейин',
    past: '%s олдин',
    s: 'сония',
    m: 'бир дақиқа',
    mm: '%d дақиқа',
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

