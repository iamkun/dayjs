import dayjs from 'dayjs'

const locale = {
  name: 'ur',
  weekdays: 'اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ'.split('_'),
  months: 'جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر'.split('_'),
  weekStart: 1,
  weekdaysShort: 'اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ'.split('_'),
  monthsShort: 'جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر'.split('_'),
  weekdaysMin: 'اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

