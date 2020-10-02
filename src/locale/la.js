// Latin [la]
import dayjs from 'dayjs'

const monthFormat = 'ianuarii_februarii_martii_aprilis_maii_iunii_iulii_augusti_septembris_octobris_novembris_decembris'.split('_')
const monthStandalone = 'ianuarius_februarius_martius_aprilis_maius_iunius_iulius_augustus_september_october_november_december'.split('_')
const MONTHS_IN_FORMAT = /D[oD.ᵒ]?(\[[^[\]]*\]|\s)+MMMM?|MMMM?(\[[^[\]]*\]|\s)+D[oD.ᵒ]?/
const months = (dayjsInstance, format) => {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()]
  }
  return monthStandalone[dayjsInstance.month()]
}
months.s = monthStandalone
months.f = monthFormat

// src: https://stackoverflow.com/a/9083076
/* eslint-disable */
function romanise(num) {
  const key = [
    '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'
  ]
  const digits = String(+num).split('')
  let roman = ''
  let i = 3
  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || '') + roman
  }
  return Array(+digits.join('') + 1).join('M') + roman
}
/* eslint-disable */

const locale = {
  name: 'la',
  weekdays: 'Dominica_feria secunda_feria tertia_feria quarta_feria quinta_feria sexta_Sabbato'.split('_'),
  weekdaysShort: 'Dominica_feria II_feria III_feria IV_feria V_feria VI_Sabbato'.split('_'),
  weekdaysMin: 'Dom._II_III_IV_V_VI_Sab.'.split('_'),
  months,
  monthsShort: 'ian._feb._mar._apr._mai._iun._iul._aug._sep._oct._nov._dec.'.split('_'),
  weekStart: 0,
  yearStart: 4,
  ordinal: n => [romanise(n), 'ᵒ'].join(''),
  // The relative time variables are in nominative case only
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
    L: 'D. MM. YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, HH:mm',
    LLLL: 'dddd, D MMMM YYYY, HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale
