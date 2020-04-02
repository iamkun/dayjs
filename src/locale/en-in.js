// English (India) [en-in]
import dayjs from 'dayjs'
import * as baseLocale from './en-gb'

const locale = { ...baseLocale, name: 'en-in' }

dayjs.locale(locale, null, true)

export default locale

