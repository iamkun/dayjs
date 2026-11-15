// Chinese [zh]
import dayjs from 'dayjs'
import cn from './zh-cn'

const locale = {
  ...cn,
  name: 'zh'
}

dayjs.locale(locale, null, true)

export default locale
