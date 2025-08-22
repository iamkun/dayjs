// Czech [cs]
import dayjs from 'dayjs'

function plural(n) {
  return (n > 1) && (n < 5) && (~~(n / 10) !== 1) // eslint-disable-line
}
/* eslint-disable */ 
function translate(number, withoutSuffix, key, isFuture) {
  const result = `${number} `
  switch (key) {
    case 's': // a few seconds / in a few seconds / a few seconds ago
      return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami'
    case 'm': // a minute / in a minute / a minute ago
      return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou')
    case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'minuty' : 'minut')
      }
      return `${result}minutami`
    case 'h': // an hour / in an hour / an hour ago
      return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou')
    case 'hh': // 9 hours / in 9 hours / 9 hours ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'hodiny' : 'hodin')
      }
      return `${result}hodinami`
    case 'd': // a day / in a day / a day ago
      return (withoutSuffix || isFuture) ? 'den' : 'dnem'
    case 'dd': // 9 days / in 9 days / 9 days ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'dny' : 'dní')
      }
      return `${result}dny`
    case 'M': // a month / in a month / a month ago
      return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem'
    case 'MM': // 9 months / in 9 months / 9 months ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'měsíce' : 'měsíců')
      }
      return `${result}měsíci`
    case 'y': // a year / in a year / a year ago
      return (withoutSuffix || isFuture) ? 'rok' : 'rokem'
    case 'yy': // 9 years / in 9 years / 9 years ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'roky' : 'let')
      }
      return `${result}lety`
  }
}
/* eslint-enable */
const locale = {
  name: 'cs',
  weekdays: 'Neděle_Pondělí_Úterý_Středa_Čtvrtek_Pátek_Sobota'.split('_'),
  weekdaysShort: 'Ne_Po_Út_St_Čt_Pá_So'.split('_'),
  weekdaysMin: 'Ne_Po_Út_St_Čt_Pá_So'.split('_'),
  months: 'Leden_Únor_Březen_Duben_Květen_Červen_Červenec_Srpen_Září_Říjen_Listopad_Prosinec'.split('_'),
  monthsShort: 'Led_Úno_Bře_Dub_Kvě_Čvn_Čvc_Srp_Zář_Říj_Lis_Pro'.split('_'),
  weekStart: 1,
  yearStart: 4,
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd D. MMMM YYYY H:mm',
    l: 'D. M. YYYY'
  },
  relativeTime: {
    future: 'za %s',
    past: 'před %s',
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
