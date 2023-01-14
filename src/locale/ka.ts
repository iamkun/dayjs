// Georgian [ka]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ka',
  weekdays: [
    'კვირა',
    'ორშაბათი',
    'სამშაბათი',
    'ოთხშაბათი',
    'ხუთშაბათი',
    'პარასკევი',
    'შაბათი',
  ],
  weekdaysShort: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
  weekdaysMin: ['კვ', 'ორ', 'სა', 'ოთ', 'ხუ', 'პა', 'შა'],
  months: [
    'იანვარი',
    'თებერვალი',
    'მარტი',
    'აპრილი',
    'მაისი',
    'ივნისი',
    'ივლისი',
    'აგვისტო',
    'სექტემბერი',
    'ოქტომბერი',
    'ნოემბერი',
    'დეკემბერი',
  ],
  monthsShort: [
    'იან',
    'თებ',
    'მარ',
    'აპრ',
    'მაი',
    'ივნ',
    'ივლ',
    'აგვ',
    'სექ',
    'ოქტ',
    'ნოე',
    'დეკ',
  ],
  weekStart: 1,
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY h:mm A',
    LLLL: 'dddd, D MMMM YYYY h:mm A',
  },
  relativeTime: {
    future: '%s შემდეგ',
    past: '%s წინ',
    s: 'წამი',
    m: 'წუთი',
    mm: '%d წუთი',
    h: 'საათი',
    hh: '%d საათის',
    d: 'დღეს',
    dd: '%d დღის განმავლობაში',
    M: 'თვის',
    MM: '%d თვის',
    y: 'წელი',
    yy: '%d წლის',
  },
}

dayjs.locale(locale, true)

export default locale
