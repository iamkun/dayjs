// Icelandic [is]
import dayjs from 'dayjs'

const texts = {
  s: ['nokkrar sekúndur', 'nokkrar sekúndur', 'nokkrum sekúndum'],
  m: ['mínúta', 'mínútu', 'mínútu'],
  mm: ['mínútur', 'mínútur', 'mínútum'],
  h: ['klukkustund', 'klukkustund', 'klukkustund'],
  hh: ['klukkustundir', 'klukkustundir', 'klukkustundum'],
  d: ['dagur', 'dag', 'degi'],
  dd: ['dagar', 'daga', 'dögum'],
  M: ['mánuður', 'mánuð', 'mánuði'],
  MM: ['mánuðir', 'mánuði', 'mánuðum'],
  y: ['ár', 'ár', 'ári'],
  yy: ['ár', 'ár', 'árum']
}

function resolveTemplate(key, number, isFuture, withoutSuffix) {
  const suffixIndex = isFuture
    ? 1
    : 2

  const index = withoutSuffix
    ? 0
    : suffixIndex

  const keyShouldBeSingular = key.length === 2 && number % 10 === 1

  const correctedKey = keyShouldBeSingular ? key[0] : key
  const unitText = texts[correctedKey]
  const text = unitText[index]
  return key.length === 1
    ? text
    : `%d ${text}`
}

function relativeTimeFormatter(number, withoutSuffix, key, isFuture) {
  const template = resolveTemplate(key, number, isFuture, withoutSuffix)

  return template.replace('%d', number)
}

const locale = {
  name: 'is',
  weekdays: 'Sunnudagur_Mánudagur_Þriðjudagur_Miðvikudagur_Fimmtudagur_Föstudagur_Laugardagur'.split('_'),
  months: 'Janúar_Febrúar_Mars_Apríl_Maí_Júní_Júlí_Ágúst_September_Október_Nóvember_Desember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Sun_Mán_Þri_Mið_Fim_Fös_Lau'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_Maí_Jún_Júl_Ágú_Sep_Okt_Nóv_Des'.split('_'),
  weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY [kl.] H:mm',
    LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
  },
  relativeTime: {
    future: 'eftir %s',
    past: 'fyrir %s síðan',
    s: relativeTimeFormatter,
    m: relativeTimeFormatter,
    mm: relativeTimeFormatter,
    h: relativeTimeFormatter,
    hh: relativeTimeFormatter,
    d: relativeTimeFormatter,
    dd: relativeTimeFormatter,
    M: relativeTimeFormatter,
    MM: relativeTimeFormatter,
    y: relativeTimeFormatter,
    yy: relativeTimeFormatter
  }
}

dayjs.locale(locale, null, true)

export default locale
