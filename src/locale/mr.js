// Marathi [mr]
import dayjs from 'dayjs'

const symbolMap = {
  1: '१',
  2: '२',
  3: '३',
  4: '४',
  5: '५',
  6: '६',
  7: '७',
  8: '८',
  9: '९',
  0: '०'
}

const numberMap = {
  '१': '1',
  '२': '2',
  '३': '3',
  '४': '4',
  '५': '5',
  '६': '6',
  '७': '7',
  '८': '8',
  '९': '9',
  '०': '0'
}

const texts = {
  s: 'काही सेकंदां',
  m: ['एक मिनिट', 'एका मिनिटा'],
  mm: ['%d मिनिटां', '%d मिनिटां'],
  h: ['एक तास', 'एका तासा'],
  hh: ['%d तास', '%d तासां'],
  d: ['एक दिवस', 'एका दिवसा'],
  dd: ['%d दिवस', '%d दिवसां'],
  M: ['एक महिना', 'एका महिन्या'],
  MM: ['%d महिने', '%d महिन्यां'],
  y: ['एक वर्ष', 'एका वर्षा'],
  yy: ['%d वर्षे', '%d वर्षां']
}

function relativeTimeFormatter(number, withoutSuffix, key) {
  let l = texts[key]
  if (Array.isArray(l)) {
    l = l[withoutSuffix ? 0 : 1]
  }
  return l.replace('%d', number)
}

const locale = {
  name: 'mr',
  weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
  months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
  weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
  monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
  weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'A h:mm वाजता',
    LTS: 'A h:mm:ss वाजता',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm वाजता',
    LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
  },
  relativeTime: {
    future: '%sमध्ये',
    past: '%sपूर्वी',
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
  },
  preparse(string) {
    return string
      .replace(
        /[१२३४५६७८९०]/g,
        match => numberMap[match]
      )
      .replace(/،/g, ',')
  },
  postformat(string) {
    return string
      .replace(/\d/g, match => symbolMap[match])
      .replace(/,/g, '،')
  }
}

dayjs.locale(locale, null, true)

export default locale

