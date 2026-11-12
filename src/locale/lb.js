// Luxembourgish [lb]
import dayjs from 'dayjs'

const processRelativeTime = (number, withoutSuffix, key) => {
  const format = {
    m: ['eng Minutt', 'enger Minutt'],
    h: ['eng Stonn', 'enger Stonn'],
    d: ['een Dag', 'engem Dag'],
    M: ['ee Mount', 'engem Mount'],
    y: ['ee Joer', 'engem Joer']
  }
  return withoutSuffix ? format[key][0] : format[key][1]
}

// Returns true if the word before the given number loses the '-n' ending.
// e.g. 'an 10 Deeg' but 'a 5 Deeg'
const eifelerRegelAppliesToNumber = (number) => {
  const value = parseInt(number, 10)
  if (Number.isNaN(value)) {
    return false
  }
  if (value < 10) {
    return value >= 4 && value <= 7
  }
  if (value < 100) {
    const lastDigit = value % 10
    const firstDigit = value / 10
    if (lastDigit === 0) {
      return eifelerRegelAppliesToNumber(firstDigit)
    }
    return eifelerRegelAppliesToNumber(lastDigit)
  }
  if (value < 10000) {
    let n = value
    while (n >= 10) {
      n /= 10
    }
    return eifelerRegelAppliesToNumber(n)
  }
  return eifelerRegelAppliesToNumber(value / 1000)
}

const processFutureTime = (string) => {
  const number = string.substr(0, string.indexOf(' '))
  if (eifelerRegelAppliesToNumber(number)) {
    return `a ${string}`
  }
  return `an ${string}`
}

const processPastTime = (string) => {
  const number = string.substr(0, string.indexOf(' '))
  if (eifelerRegelAppliesToNumber(number)) {
    return `viru ${string}`
  }
  return `virun ${string}`
}

const locale = {
  name: 'lb',
  weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
  months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
  monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
  weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
  ordinal: n => n,
  relativeTime: {
    future: processFutureTime,
    past: processPastTime,
    s: 'e puer Sekonnen',
    m: processRelativeTime,
    mm: '%d Minutten',
    h: processRelativeTime,
    hh: '%d Stonnen',
    d: processRelativeTime,
    dd: '%d Deeg',
    M: processRelativeTime,
    MM: '%d Méint',
    y: processRelativeTime,
    yy: '%d Joer'
  },
  formats: {
    LT: 'H:mm [Auer]',
    LTS: 'H:mm:ss [Auer]',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm [Auer]',
    LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
  }
}

dayjs.locale(locale, null, true)

export default locale

