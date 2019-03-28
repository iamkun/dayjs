import dayjs from 'dayjs'

const locale = {
  name: 'uz',
  weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
  months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
  monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
  weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

