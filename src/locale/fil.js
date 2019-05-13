import dayjs from 'dayjs'
import tlLocale from './tl-ph'

const locale = Object.assign({}, tlLocale, { name: 'fil' })
dayjs.locale(locale, null, true)

export default locale
