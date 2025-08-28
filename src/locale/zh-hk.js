// Chinese (Hong Kong) [zh-hk]
import dayjs from 'dayjs'
import tw from './zh-tw'

const locale = {
  ...tw,
  name: 'zh-hk'
}

dayjs.locale(locale, null, true)

export default locale
