// Northern Kurdish [ku-kmr]
// authors : Mazlum Özdogan : https://github.com/mergehez

// All rules except for month names are according to
// the spelling rules which are defined in the book 'Rêbera Rastnivîsînê'
// from Komxebata Kurmancîyê.
// Komxebata Kurmancîyê is a work group that studied different uses
// in Kurdish language (Kurmanji/Northern Kurdish),
// chose one of alternatives as standard and publish them via their book.
// There are 18 Kurdish linguists in the group.
// The group was formed by Mesopotamia Foundation

import dayjs from 'dayjs'

function processRelativeTime(num, withoutSuffix, key) {
  const format = {
    s: ['çend sanîye', 'çend sanîyeyan'],
    ss: ['%d sanîye', '%d sanîyeyan'],
    m: ['deqîqeyek', 'deqîqeyekê'],
    mm: ['%d deqîqe', '%d deqîqeyan'],
    h: ['saetek', 'saetekê'],
    hh: ['%d saet', '%d saetan'],
    d: ['rojek', 'rojekê'],
    dd: ['%d roj', '%d rojan'],
    w: ['hefteyek', 'hefteyekê'],
    ww: ['%d hefte', '%d hefteyan'],
    M: ['mehek', 'mehekê'],
    MM: ['%d meh', '%d mehan'],
    y: ['salek', 'salekê'],
    yy: ['%d sal', '%d salan']
  }
  return (withoutSuffix ? format[key][0] : format[key][1]).replace('%d', num)
}
function ezafeNumSuffix(num) {
  num = '%d'.replace('%d', num)
  const l = num.substring(num.length - 1)
  const ll = num.length > 1 ? num.substring(num.length - 2) : ''
  if (
    !(ll === '12' || ll === '13') &&
    (l === '2' || l === '3' || ll === '50' || l === '70' || l === '80')
  ) {
    return 'yê'
  }
  return 'ê'
}

const locale = {
  name: 'ku-kmr',
  weekdays: 'Yekşem_Duşem_Sêşem_Çarşem_Pêncşem_În_Şemî'.split('_'),
  weekdaysShort: 'Yek_Du_Sê_Çar_Pên_În_Şem'.split('_'),
  weekdaysMin: 'Ye_Du_Sê_Ça_Pê_În_Şe'.split('_'),
  /* According to 'Rêbera Rastnivîsînê' this should be:
  Kanûna Paşîn_..._Çirîya Pêşîn_Çirîya Paşîn_Kanûna Pêşîn
  But the names below are more well known and handy */
  months:
    'Rêbendan_Sibat_Adar_Nîsan_Gulan_Hezîran_Tîrmeh_Tebax_Îlon_Cotmeh_Mijdar_Berfanbar'.split('_'),
  monthsShort: 'Rêb_Sib_Ada_Nîs_Gul_Hez_Tîr_Teb_Îlo_Cot_Mij_Ber'.split('_'),
  ordinal: (num, period) => {
    const p = period.toLowerCase()
    if (p.includes('w') || p.includes('m')) {
      return '%d.'.replace('%d', num)
    }

    return num + ezafeNumSuffix(num)
  },
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'Do MMMM[a] YYYY[an]',
    LLL: 'Do MMMM[a] YYYY[an] HH:mm',
    LLLL: 'dddd, Do MMMM[a] YYYY[an] HH:mm',
    ll: 'Do MMM[.] YYYY[an]',
    lll: 'Do MMM[.] YYYY[an] HH:mm',
    llll: 'ddd[.], Do MMM[.] YYYY[an] HH:mm'
  },
  relativeTime: {
    future: 'di %s de',
    past: 'berî %s',
    s: processRelativeTime,
    ss: processRelativeTime,
    m: processRelativeTime,
    mm: processRelativeTime,
    h: processRelativeTime,
    hh: processRelativeTime,
    d: processRelativeTime,
    dd: processRelativeTime,
    w: processRelativeTime,
    ww: processRelativeTime,
    M: processRelativeTime,
    MM: processRelativeTime,
    y: processRelativeTime,
    yy: processRelativeTime
  },
  meridiem: (hours, minutes, isLower) => {
    if (hours < 12) {
      return isLower ? 'bn' : 'BN'
    }

    return isLower ? 'pn' : 'PN'
  },
  meridiemParse: /bn|BN|pn|PN/
}

dayjs.locale(locale, null, true)

export default locale
