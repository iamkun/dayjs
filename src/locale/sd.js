import dayjs from 'dayjs'

const locale = {
  name: 'sd',
  weekdays: 'آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر'.split('_'),
  months: 'جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر'.split('_'),
  weekStart: 1,
  weekdaysShort: 'آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر'.split('_'),
  monthsShort: 'جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر'.split('_'),
  weekdaysMin: 'آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

