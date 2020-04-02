// English (Trinidad & Tobago) [en-tt]
import dayjs from 'dayjs'
import * as baseLocale from './en-gb';

const locale = { ...baseLocale, name: 'en-tt' };

dayjs.locale(locale, null, true)

export default locale

