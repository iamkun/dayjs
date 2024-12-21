// Slovenian [sl]
import dayjs from 'dayjs'

function dual(n) {
  return (n % 100) == 2 // eslint-disable-line
}

function threeFour(n) {
  return (n % 100) == 3 || (n % 100) == 4 // eslint-disable-line
}

/* eslint-disable */
function translate(number, withoutSuffix, key, isFuture) {
  const result = `${number} `
  switch (key) {
    case 's': // a few seconds / in a few seconds / a few seconds ago
      return (withoutSuffix || isFuture) ? 'nekaj sekund' : 'nekaj sekundami'
    case 'm': // a minute / in a minute / a minute ago
      return withoutSuffix ? 'ena minuta' : 'eno minuto'
    case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
      if (dual(number)) {
        return result + ((withoutSuffix || isFuture) ? 'minuti' : 'minutama')
      }
      if (threeFour(number)) {
        return result + ((withoutSuffix || isFuture) ? 'minute' : 'minutami')
      }
      return result + ((withoutSuffix || isFuture) ? 'minut' : 'minutami')
    case 'h': // an hour / in an hour / an hour ago
      return withoutSuffix ? 'ena ura' : (isFuture ? 'eno uro' : 'eno uro')
    case 'hh': // 9 hours / in 9 hours / 9 hours ago
      if (dual(number)) {
        return result + ((withoutSuffix || isFuture) ? 'uri' : 'urama')
      }
      if (threeFour(number)) {
        return result + ((withoutSuffix || isFuture) ? 'ure' : 'urami')
      }
      return result + ((withoutSuffix || isFuture) ? 'ur' : 'urami')
    case 'd': // a day / in a day / a day ago
      return (withoutSuffix || isFuture) ? 'en dan' : 'enim dnem'
    case 'dd': // 9 days / in 9 days / 9 days ago
      if (dual(number)) {
        return result + ((withoutSuffix || isFuture) ? 'dneva' : 'dnevoma')
      }
      return result + ((withoutSuffix || isFuture) ? 'dni' : 'dnevi')
    case 'M': // a month / in a month / a month ago
      return (withoutSuffix || isFuture) ? 'en mesec' : 'enim mesecem'
    case 'MM': // 9 months / in 9 months / 9 months ago
      if (dual(number)) { // 2 minutes / in 2 minutes
        return result + ((withoutSuffix || isFuture) ? 'meseca' : 'mesecema')
      }
      if (threeFour(number)) {
        return result + ((withoutSuffix || isFuture) ? 'mesece' : 'meseci')
      }
      return result + ((withoutSuffix || isFuture) ? 'mesecev' : 'meseci')
    case 'y': // a year / in a year / a year ago
      return (withoutSuffix || isFuture) ? 'eno leto' : 'enim letom'
    case 'yy': // 9 years / in 9 years / 9 years ago
      if (dual(number)) { // 2 minutes / in 2 minutes
        return result + ((withoutSuffix || isFuture) ? 'leti' : 'letoma')
      }
      if (threeFour(number)) {
        return result + ((withoutSuffix || isFuture) ? 'leta' : 'leti')
      }
      return result + ((withoutSuffix || isFuture) ? 'let' : 'leti')
  }
}

/* eslint-enable */
const locale = {
  name: 'sl',
  weekdays: 'Nedelja_Ponedeljek_Torek_Sreda_Četrtek_Petek_Sobota'.split('_'),
  months: 'Januar_Februar_Marec_April_Maj_Junij_Julij_Avgust_September_Oktober_November_December'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Ned._Pon._Tor._Sre._Čet._Pet._Sob.'.split('_'),
  monthsShort: 'Jan._Feb._Mar._Apr._Maj._Jun._Jul._Avg._Sep._Okt._Nov._Dec.'.split('_'),
  weekdaysMin: 'Ne_Po_To_Sr_Če_Pe_So'.split('_'),
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm',
    l: 'D. M. YYYY'
  },
  relativeTime: {
    future: 'čez %s',
    past: 'pred %s',
    s: translate,
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: translate,
    dd: translate,
    M: translate,
    MM: translate,
    y: translate,
    yy: translate
  }
}

dayjs.locale(locale, null, true)

export default locale
