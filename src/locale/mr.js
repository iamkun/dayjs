// Marathi [mr]
import dayjs from 'dayjs'

const locale = {
  name: 'mr',
  weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
  months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
  weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
  monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
  weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
  ordinal: n => n,
  meridiem: (hour) => {
    if (hour < 6) {
      return 'पहाटे'
    }
    if (hour < 12) {
      return 'सकाळी'
    }
    if (hour < 17) {
      return 'दुपारी'
    }
    if (hour < 20) {
      return 'सायंकाळी'
    }
    return 'रात्री'
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

