import dayjs from 'dayjs'

const locale = {
  name: 'mk',
  weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
  months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
  weekStart: 1,
  weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
  monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
  weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

