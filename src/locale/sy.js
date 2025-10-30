// Aramaic Syriac [sy]
import dayjs from 'dayjs'

const texts = {
  s: 'ܡܡ̈ܢܹܐ  ܫܢܝܘܬܐ',
  ss: '%d ܫܢܝܘܝܢ',
  m: 'ܝܼܪܚ',
  mm: '%d ܝܲܪܚܝܼܢ',
  h: 'ܫܥܬܐ',
  hh: '%d ܫܥܝܢ',
  hh2: 'ܫܥܝܢ',
  d: 'ܝܲܘܡܵܐ',
  dd: '%d ܝܲܘܡܝܼܢ',
  dd2: 'ܝܲܘܡܝܝܢ',
  M: 'ܝܼܪܲܚ',
  MM: '%d ܝܲܪܚܝܼܢ',
  MM2: 'ܝܪܚܝܢ',
  y: 'ܫܰܢ݈ܬ݁ܳܐ',
  yy: '%d ܫܢܝܢ',
  yy2: 'ܫܢܝܢ'
}

function relativeTimeFormatter(number, withoutSuffix, key) {
  const text = texts[key + (number === 2 ? '2' : '')] || texts[key]
  return text.replace('%d', number)
}

const locale = {
  name: 'sy',
  weekdays: 'ܚܰܕ_ܬܪܶܝܢ_ܬܠܳܬ_ܐܲܪܒ݁ܥܵܐ_ܚܡܶܫ_ܥܪܳܒܳܐ_ܫܰܒܬܳܐ'.split('_'),
  weekdaysShort: 'ܐ׳_ܒ׳_ܓ׳_ܕ׳_ܗ׳_ܘ׳_ܫ׳'.split('_'),
  weekdaysMin: 'ܐ׳_ܒ׳_ܓ׳_ܕ׳_ܗ׳_ܘ_ܫ׳'.split('_'),
  months:    
  // 'ܝܢܘܐܪ_ܦܒܪܘܐܪ_ܡܪܨ_ܐܦܪܝܠ_ܡܐܝ_ܝܘܢܝ_ܝܘܠܝ_ܐܘܓܘܣܛ_ܣܦܛܡܒܪ_ܐܘܩܛܘܒܪ_ܢܘܒܡܒܪ_ܕܨܡܒܪ'.split('_'), 
  'ܟܳܢܽܘܢ ܒ_ܫܒ݂ܛ_ܐܳܕܳܪ_ܟܳܢܽܘܢ_ܐܺܝܳܪ_ܚܙܺܝܪܳܢ_ܬܰܡܽܘܙ_ܐܳܒ_ܐܺܝܠܽܘܠ_ܩܰܕܡܳܝܳܐ_ܐ̱ܚܪܳܝܳܐ_ܟܳܢܽܘܢ ܐ'.split('_'),
  monthsShort: 'ܝܢܘ_ܦܒܪ_ܡܪܨ_ܐܦܪ_ܡܐܝ_ܝܘܢ_ܝܘܠ_ܐܘܓ_ܣܦܛ_ܐܘܩ_ܢܘܒ_ܕܨܡ'.split('_'),
  relativeTime: {
    future: '‏ܡܸܢ ܩܵܕ݂ܹܡ %s', //ܠܩܵܕ݂ܹܡ
    past: '‏ܡܸܢ ܒ݂݁ܵܬܸܪ %s',
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
  ordinal: n => n,
  format: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [ܒ]MMMM YYYY',
    LLL: 'D [ܒ]MMMM YYYY HH:mm',
    LLLL: 'dddd, D [ܒ]MMMM YYYY HH:mm',
    l: 'D/M/YYYY',
    ll: 'D MMM YYYY',
    lll: 'D MMM YYYY HH:mm',
    llll: 'ddd, D MMM YYYY HH:mm'
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [ܒ]MMMM YYYY',
    LLL: 'D [ܒ]MMMM YYYY HH:mm',
    LLLL: 'dddd, D [ܒ]MMMM YYYY HH:mm',
    l: 'D/M/YYYY',
    ll: 'D MMM YYYY',
    lll: 'D MMM YYYY HH:mm',
    llll: 'ddd, D MMM YYYY HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale
