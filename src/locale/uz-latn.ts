// Uzbek Latin [uz-latn]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'uz-latn',
  weekdays: [
    'Yakshanba',
    'Dushanba',
    'Seshanba',
    'Chorshanba',
    'Payshanba',
    'Juma',
    'Shanba',
  ],
  months: [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentabr',
    'Oktabr',
    'Noyabr',
    'Dekabr',
  ],
  weekStart: 1,
  weekdaysShort: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'],
  monthsShort: [
    'Yan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'Iyun',
    'Iyul',
    'Avg',
    'Sen',
    'Okt',
    'Noy',
    'Dek',
  ],
  weekdaysMin: ['Ya', 'Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'D MMMM YYYY, dddd HH:mm',
  },
  relativeTime: {
    future: 'Yaqin %s ichida',
    past: 'Bir necha %s oldin',
    s: 'soniya',
    m: 'bir daqiqa',
    mm: '%d daqiqa',
    h: 'bir soat',
    hh: '%d soat',
    d: 'bir kun',
    dd: '%d kun',
    M: 'bir oy',
    MM: '%d oy',
    y: 'bir yil',
    yy: '%d yil',
  },
}

dayjs.locale(locale, true)

export default locale
