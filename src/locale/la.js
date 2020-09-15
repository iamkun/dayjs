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
    case 'ianuarius':
      return 'ianuarii'
    case 'februarius':
      return 'februarii'
    case 'martius':
      return 'martii'
    case 'aprilis':
      return 'aprilis'
    case 'maius':
      return 'maii'
    case 'iunius':
      return 'iunii'
    case 'iulius':
      return 'iulii'
    case 'augustus':
      return 'augusti'
    case 'september':
      return 'septembris'
    case 'october':
      return 'octobris'
    case 'november':
      return 'novembris'
    case 'december':
      return 'decembris'
  }
}
/* eslint-enable */
const locale = {
  name: 'la',
  weekdays: 'Dominica_feria secunda_feria tertia_feria quarta_feria quinta_feria sexta_Sabbato'.split('_'),
  weekdaysShort: 'Dominica_feria II_feria III_feria IV_feria V_feria VI_Sabbato'.split('_'),
  weekdaysMin: 'Dom._II_III_IV_V_VI_Sab.'.split('_'),
  months: 'ianuarius_februarius_martius_aprilis_maius_iunius_iulius_augustus_september_october_november_december'.split('_'),
  monthsShort: 'ian_feb_mar_apr_mai_iun_iul_aug_sep_oct_nov_dec'.split('_'),
  weekStart: 0,
  yearStart: 4,
  ordinal: n => [romanise(n), 'ᵒ'].join(''),
  // The relative time variables are in Nominative case only
  relativeTime: {
    future: 'ad %s',
    past: 'abhinc %s',
    s: 'paucæ secundæ',
    m: 'minuta',
    mm: '%d minutæ',
    h: 'hora',
    hh: '%d horæ',
    d: 'dies',
    dd: '%d dies',
    M: 'mensis',
    MM: '%d menses',
    y: 'annus',
    yy: '%d anni'
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: ['D. MM. ', romanise('YYYY')].join(''),
    LL: ['D. ', getMonthInGenitive('MMMM'), ' ', romanise('YYYY')].join(''),
    LLL: ['D. ', getMonthInGenitive('MMMM'), ' ', romanise('YYYY'), ' HH:mm'].join(''),
    LLLL: ['dddd, ', 'D. ', getMonthInGenitive('MMMM'), ' ', romanise('YYYY'), ' HH:mm'].join('')
  }
}

dayjs.locale(locale, null, true)

export default locale
