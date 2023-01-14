// Bislama [bi]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'bi',
  weekdays: ['Sande', 'Mande', 'Tusde', 'Wenesde', 'Tosde', 'Fraede', 'Sarade'],
  months: [
    'Januari',
    'Februari',
    'Maj',
    'Eprel',
    'Mei',
    'Jun',
    'Julae',
    'Okis',
    'Septemba',
    'Oktoba',
    'Novemba',
    'Disemba',
  ],
  weekStart: 1,
  weekdaysShort: ['San', 'Man', 'Tus', 'Wen', 'Tos', 'Frae', 'Sar'],
  monthsShort: [
    'Jan',
    'Feb',
    'Maj',
    'Epr',
    'Mai',
    'Jun',
    'Jul',
    'Oki',
    'Sep',
    'Okt',
    'Nov',
    'Dis',
  ],
  weekdaysMin: ['San', 'Ma', 'Tu', 'We', 'To', 'Fr', 'Sar'],
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY h:mm A',
    LLLL: 'dddd, D MMMM YYYY h:mm A',
  },
  relativeTime: {
    future: 'lo %s',
    past: '%s bifo',
    s: 'sam seken',
    m: 'wan minit',
    mm: '%d minit',
    h: 'wan haoa',
    hh: '%d haoa',
    d: 'wan dei',
    dd: '%d dei',
    M: 'wan manis',
    MM: '%d manis',
    y: 'wan yia',
    yy: '%d yia',
  },
}

dayjs.locale(locale, true)

export default locale
