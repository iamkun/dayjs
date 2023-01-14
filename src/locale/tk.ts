// Turkmen [tk]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'tk',
  weekdays: [
    'Ýekşenbe',
    'Duşenbe',
    'Sişenbe',
    'Çarşenbe',
    'Penşenbe',
    'Anna',
    'Şenbe',
  ],
  weekdaysShort: ['Ýek', 'Duş', 'Siş', 'Çar', 'Pen', 'Ann', 'Şen'],
  weekdaysMin: ['Ýk', 'Dş', 'Sş', 'Çr', 'Pn', 'An', 'Şn'],
  months: [
    'Ýanwar',
    'Fewral',
    'Mart',
    'Aprel',
    'Maý',
    'Iýun',
    'Iýul',
    'Awgust',
    'Sentýabr',
    'Oktýabr',
    'Noýabr',
    'Dekabr',
  ],
  monthsShort: [
    'Ýan',
    'Few',
    'Mar',
    'Apr',
    'Maý',
    'Iýn',
    'Iýl',
    'Awg',
    'Sen',
    'Okt',
    'Noý',
    'Dek',
  ],
  weekStart: 1,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: '%s soň',
    past: '%s öň',
    s: 'birnäçe sekunt',
    m: 'bir minut',
    mm: '%d minut',
    h: 'bir sagat',
    hh: '%d sagat',
    d: 'bir gün',
    dd: '%d gün',
    M: 'bir aý',
    MM: '%d aý',
    y: 'bir ýyl',
    yy: '%d ýyl',
  },
  ordinal: (n) => `${n}.`,
}

dayjs.locale(locale, true)

export default locale
