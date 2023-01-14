// Icelandic [is]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: Add support for 'relativeTime' plugin
// All commented out code is from the original locale file.
// I left it in place because it seems to use the 'relativeTime' plugin.
// https://github.com/iamkun/dayjs/commit/76f9e1756de7e99c01e471dab30ea074b9ec9629

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
  yy: ['ár', 'ár', 'árum'],
}

/*
function resolveTemplate(key, number, isFuture, withoutSuffix) {
  const suffixIndex = isFuture ? 1 : 2

  const index = withoutSuffix ? 0 : suffixIndex

  const keyShouldBeSingular = key.length === 2 && number % 10 === 1

  const correctedKey = keyShouldBeSingular ? key[0] : key
  const unitText = texts[correctedKey]
  const text = unitText[index]
  return key.length === 1 ? text : `%d ${text}`
}

function relativeTimeFormatter(number, withoutSuffix, key, isFuture) {
  const template = resolveTemplate(key, number, isFuture, withoutSuffix)

  return template.replace('%d', number)
}
*/

const locale: Locale = {
  name: 'is',
  weekdays: [
    'sunnudagur',
    'mánudagur',
    'þriðjudagur',
    'miðvikudagur',
    'fimmtudagur',
    'föstudagur',
    'laugardagur',
  ],
  months: [
    'janúar',
    'febrúar',
    'mars',
    'apríl',
    'maí',
    'júní',
    'júlí',
    'ágúst',
    'september',
    'október',
    'nóvember',
    'desember',
  ],
  weekStart: 1,
  weekdaysShort: ['sun', 'mán', 'þri', 'mið', 'fim', 'fös', 'lau'],
  monthsShort: [
    'jan',
    'feb',
    'mar',
    'apr',
    'maí',
    'jún',
    'júl',
    'ágú',
    'sep',
    'okt',
    'nóv',
    'des',
  ],
  weekdaysMin: ['Su', 'Má', 'Þr', 'Mi', 'Fi', 'Fö', 'La'],
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY [kl.] H:mm',
    LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
  },
  relativeTime: {
    future: 'eftir %s',
    past: 'fyrir %s síðan',
    s: texts.s[0],
    m: texts.m[0],
    mm: texts.mm[0],
    h: texts.h[0],
    hh: texts.hh[0],
    d: texts.d[0],
    dd: texts.dd[0],
    M: texts.M[0],
    MM: texts.MM[0],
    y: texts.y[0],
    yy: texts.yy[0],
  },
}

dayjs.locale(locale, true)

export default locale
