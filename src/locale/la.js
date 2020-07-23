// Latin [la]
import dayjs from 'dayjs'

/* eslint-disable */
// src: https://stackoverflow.com/a/9083076
function romanise(num) {
  const key = [
    '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'
  ]
  const digits = String(+num).split('')
  let roman = ''
  let i = 3
  if (isNaN(num)) {
    return NaN
  }
  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || '') + roman
  }
  return Array(+digits.join('') + 1).join('M') + roman
}
function getMonthInGenitive(month) {
  switch (month) {
    case 'Ianuarius':
      return 'Ianuarii'
    case 'Februarius':
      return 'Februarii'
    case 'Martius':
      return 'Martii'
    case 'Aprilis':
      return 'Aprilis'
    case 'Maius':
      return 'Maii'
    case 'Iunius':
      return 'Iunii'
    case 'Iulius':
      return 'Iulii'
    case 'Augustus':
      return 'Augusti'
    case 'September':
      return 'Septembris'
    case 'October':
      return 'Octobris'
    case 'November':
      return 'Novembris'
    case 'December':
      return 'Decembris'
  }
}
/* eslint-enable */
const locale = {
  name: 'la',
  weekdays: 'Dominica_feria secunda_feria tertia_feria quarta_feria quinta_feria sexta_Sabbato'.split('_'),
  weekdaysShort: 'Dominica_feria II_feria III_feria IV_feria V_feria VI_Sabbato'.split('_'),
  weekdaysMin: 'Dom._II_III_IV_V_VI_Sab.'.split('_'),
  months: 'Ianuarius_Februarius_Martius_Aprilis_Maius_Iunius_Iulius_Augustus_September_October_November_December'.split('_'),
  monthsShort: 'Ian_Feb_Mar_Apr_Mai_Iun_Iul_Aug_Sep_Oct_Nov_Dec'.split('_'),
  weekStart: 0,
  yearStart: 4,
  // ordinal: n => romanise(n) + 'ᵒ',
  ordinal: n => [romanise(n), 'ᵒ'].join(''),
  // The relative time variables are in Nominative case only
  relativeTime: {
    future: ['ad ', romanise('%s')].join(''),
    past: ['abhinc ', romanise('%s')].join(''),
    s: 'paucæ secundæ',
    m: 'minuta',
    mm: [romanise('%d'), ' minutæ'].join(''),
    h: 'hora',
    hh: [romanise('%d'), ' horæ'].join(''),
    d: 'dies',
    dd: [romanise('%d'), ' dies'].join(''),
    M: 'mensis',
    MM: [romanise('%d'), ' menses'].join(''),
    y: 'annus',
    yy: [romanise('%d'), ' anni'].join('')
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: [romanise('D'), ' MM. ', romanise('YYYY')].join(''),
    LL: [romanise('D'), ' ', getMonthInGenitive('MMMM'), ' ', romanise('YYYY')].join(''),
    LLL: [romanise('D'), ' ', getMonthInGenitive('MMMM'), ' ', romanise('YYYY'), ' HH:mm'].join(''),
    LLLL: ['dddd, ', romanise('D'), ' ', getMonthInGenitive('MMMM'), ' ', romanise('YYYY'), ' HH:mm'].join('')
  }
}

dayjs.locale(locale, null, true)

export default locale
