import dayjs from 'dayjs'

const locale = {
  name: 'tg',
  weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
  months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
  weekStart: 1,
  weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
  monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
  weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

