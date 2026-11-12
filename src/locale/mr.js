// Marathi [mr]
import dayjs from 'dayjs'

const relativeTimeMr = (number, withoutSuffix, key) => {
  const format = {
    s: ['काही सेकंद', 'काही सेकंदां'],
    m: ['एक मिनिट', 'एका मिनिटा'],
    mm: [`${number} मिनिटे`, `${number} मिनिटां`],
    h: ['एक तास', 'एका तासा'],
    hh: [`${number} तास`, `${number} तासां`],
    d: ['एक दिवस', 'एका दिवसा'],
    dd: [`${number} दिवस`, `${number} दिवसां`],
    M: ['एक महिना', 'एका महिन्या'],
    MM: [`${number} महिने`, `${number} महिन्यां`],
    y: ['एक वर्ष', 'एका वर्षा'],
    yy: [`${number} वर्षे`, `${number} वर्षां`]
  }
  return withoutSuffix ? format[key][0] : format[key][1]
}

const locale = {
  name: 'mr',
  weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
  months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
  weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
  monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून_जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
  weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
  ordinal: n => n,
  relativeTime: {
    future: '%sमध्ये',
    past: '%sपूर्वी',
    s: relativeTimeMr,
    m: relativeTimeMr,
    mm: relativeTimeMr,
    h: relativeTimeMr,
    hh: relativeTimeMr,
    d: relativeTimeMr,
    dd: relativeTimeMr,
    M: relativeTimeMr,
    MM: relativeTimeMr,
    y: relativeTimeMr,
    yy: relativeTimeMr
  },
  formats: {
    LT: 'A h:mm वाजता',
    LTS: 'A h:mm:ss वाजता',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm वाजता',
    LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
  }
}

dayjs.locale(locale, null, true)

export default locale

