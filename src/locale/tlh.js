// Klingon [tlh]
import dayjs from 'dayjs'

const numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_')

const numberAsNoun = (number) => {
  const hundred = Math.floor((number % 1000) / 100)
  const ten = Math.floor((number % 100) / 10)
  const one = number % 10
  let word = ''
  if (hundred > 0) {
    word += `${numbersNouns[hundred]}vatlh`
  }
  if (ten > 0) {
    word += `${(word !== '' ? ' ' : '') + numbersNouns[ten]}maH`
  }
  if (one > 0) {
    word += (word !== '' ? ' ' : '') + numbersNouns[one]
  }
  return word === '' ? 'pagh' : word
}

const translateFuture = (output) => {
  if (output.indexOf('jaj') !== -1) {
    return `${output.slice(0, -3)}leS`
  }
  if (output.indexOf('jar') !== -1) {
    return `${output.slice(0, -3)}waQ`
  }
  if (output.indexOf('DIS') !== -1) {
    return `${output.slice(0, -3)}nem`
  }
  return `${output} pIq`
}

const translatePast = (output) => {
  if (output.indexOf('jaj') !== -1) {
    return `${output.slice(0, -3)}Hu’`
  }
  if (output.indexOf('jar') !== -1) {
    return `${output.slice(0, -3)}wen`
  }
  if (output.indexOf('DIS') !== -1) {
    return `${output.slice(0, -3)}ben`
  }
  return `${output} ret`
}

const translate = (number, withoutSuffix, key) => {
  const numberNoun = numberAsNoun(number)
  const format = {
    mm: `${numberNoun} tup`,
    hh: `${numberNoun} rep`,
    dd: `${numberNoun} jaj`,
    MM: `${numberNoun} jar`,
    yy: `${numberNoun} DIS`
  }
  return format[key]
}

const locale = {
  name: 'tlh',
  weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
  months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
  weekStart: 1,
  weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
  monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
  weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
  ordinal: n => n,
  relativeTime: {
    future: translateFuture,
    past: translatePast,
    s: 'puS lup',
    m: 'wa’ tup',
    mm: translate,
    h: 'wa’ rep',
    hh: translate,
    d: 'wa’ jaj',
    dd: translate,
    M: 'wa’ jar',
    MM: translate,
    y: 'wa’ DIS',
    yy: translate
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

