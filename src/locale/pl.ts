// Polish [pl]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'relativeTime' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'relativeTime' plugin.
// https://github.com/iamkun/dayjs/commit/e93e6b8ffa61036b26382f1763e3864d4a7d5df5

/*
const plural = () => {
  return n % 10 < 5 && n % 10 > 1 && Math.trunc(n / 10) % 10 !== 1
}

function translate(number, withoutSuffix, key) {
  const result = `${number} `
  switch (key) {
    case 'm':
      return withoutSuffix ? 'minuta' : 'minutę'
    case 'mm':
      return result + (plural(number) ? 'minuty' : 'minut')
    case 'h':
      return withoutSuffix ? 'godzina' : 'godzinę'
    case 'hh':
      return result + (plural(number) ? 'godziny' : 'godzin')
    case 'MM':
      return result + (plural(number) ? 'miesiące' : 'miesięcy')
    case 'yy':
      return result + (plural(number) ? 'lata' : 'lat')
  }
}

const monthFormat =
  'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
    '_'
  )
const monthStandalone =
  'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
    '_'
  )
const MONTHS_IN_FORMAT = /D M{4}/

const months = (dayjsInstance, format) => {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()]
  }
  return monthStandalone[dayjsInstance.month()]
}
months.s = monthStandalone
months.f = monthFormat

*/
const locale: Locale = {
  name: 'pl',
  weekdays: [
    'niedziela',
    'poniedziałek',
    'wtorek',
    'środa',
    'czwartek',
    'piątek',
    'sobota',
  ],
  weekdaysShort: ['ndz', 'pon', 'wt', 'śr', 'czw', 'pt', 'sob'],
  weekdaysMin: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
  months: [
    'stycznia',
    'lutego',
    'marca',
    'kwietnia',
    'maja',
    'czerwca',
    'lipca',
    'sierpnia',
    'września',
    'października',
    'listopada',
    'grudnia',
  ],
  monthsShort: [
    'sty',
    'lut',
    'mar',
    'kwi',
    'maj',
    'cze',
    'lip',
    'sie',
    'wrz',
    'paź',
    'lis',
    'gru',
  ],
  ordinal: (n) => `${n}.`,
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: 'za %s',
    past: '%s temu',
    s: 'kilka sekund',
    m: 'minuta',
    mm: '%d minuty',
    h: 'godzina',
    hh: '%d godziny',
    d: '1 dzień',
    dd: '%d dni',
    M: 'miesiąc',
    MM: '%d miesiące',
    y: 'rok',
    yy: '%d lata',
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
}

dayjs.locale(locale, true)

export default locale
