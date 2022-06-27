// Slovenian [sl]
import dayjs from 'dayjs'

function processRelativeTime(number, withoutSuffix, key, isFuture) {
  const relativeTimeMap = {
    s: withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami',
    ss: [withoutSuffix ? 'sekundo' : 'sekundi',
      withoutSuffix || isFuture ? 'sekundi' : 'sekundah',
      withoutSuffix || isFuture ? 'sekunde' : 'sekundah',
      'sekund'],
    m: withoutSuffix ? 'ena minuta' : 'eno minuto',
    mm: [
      withoutSuffix ? 'minuta' : 'minuto',
      withoutSuffix || isFuture ? 'minuti' : 'minutama',
      withoutSuffix || isFuture ? 'minute' : 'minutami',
      withoutSuffix || isFuture ? 'minut' : 'minutami'
    ],
    h: withoutSuffix ? 'ena ura' : 'eno uro',
    hh: [
      withoutSuffix ? 'ura' : 'uro',
      withoutSuffix || isFuture ? 'uri' : 'urama',
      withoutSuffix || isFuture ? 'ure' : 'urami',
      withoutSuffix || isFuture ? 'ur' : 'urami'
    ],
    d: withoutSuffix || isFuture ? 'en dan' : 'enim dnem',
    dd: [
      withoutSuffix || isFuture ? 'dan' : 'dnem',
      withoutSuffix || isFuture ? 'dni' : 'dnevoma',
      withoutSuffix || isFuture ? 'dni' : 'dnevi'
    ],
    M: withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem',
    MM: [
      withoutSuffix || isFuture ? 'mesec' : 'mesecem',
      withoutSuffix || isFuture ? 'meseca' : 'mesecema',
      withoutSuffix || isFuture ? 'mesece' : 'meseci',
      withoutSuffix || isFuture ? 'mesecev' : 'meseci'
    ],
    y: withoutSuffix || isFuture ? 'eno leto' : 'eno letom',
    yy: [
      withoutSuffix || isFuture ? 'leto' : 'letom',
      withoutSuffix || isFuture ? 'leti' : 'letoma',
      withoutSuffix || isFuture ? 'leta' : 'leti',
      withoutSuffix || isFuture ? 'let' : 'leti'
    ]
  }
  const getArrayIndex = (defaultVal = 3) => {
    if (number === 1) {
      return 0
    } else if (number === 2) {
      return 1
    } else if (number < 5) {
      return 2
    }
    return defaultVal
  }
  switch (key) {
    case 's':
    case 'm':
    case 'h':
    case 'd':
    case 'M':
    case 'y':
      return relativeTimeMap[key]
    case 'ss':
    case 'mm':
    case 'hh':
    case 'MM':
    case 'yy':
      return `${number} ${relativeTimeMap[key][getArrayIndex()]}`
    case 'dd':
      return `${number} ${relativeTimeMap[key][getArrayIndex(2)]}`
    default:
      return ''
  }
}

const locale = {
  name: 'sl',
  weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
  months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
  weekStart: 1,
  weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
  monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
  weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm'
  },
  relativeTime: {
    future: 'čez %s',
    past: 'pred %s',
    s: processRelativeTime,
    m: processRelativeTime,
    mm: processRelativeTime,
    h: processRelativeTime,
    hh: processRelativeTime,
    d: processRelativeTime,
    dd: processRelativeTime,
    M: processRelativeTime,
    MM: processRelativeTime,
    y: processRelativeTime,
    yy: processRelativeTime
  }
}

dayjs.locale(locale, null, true)

export default locale

