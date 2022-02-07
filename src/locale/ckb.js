// Kurdish [ckb]
import dayjs from 'dayjs'

const locale = {
  name: 'ckb',
  weekdays: 'یەکشەمە_دووشەمە_سێشەمە_چوارشەمە_پێنجشەمە_هەینی_شەمە'.split('_'),
  weekdaysShort: 'یەکشەمە_دووشەمە_سێشەمە_چوارشەمە_پێنجشەمە_هەینی_شەمە'.split('_'),
  weekdaysMin: 'یەک_دوو_سێ_چوار_پێنج_هەی_شە'.split('_'),
  weekStart: 6,
  months: 'ڕێبەندان_ڕەشەمە_نەورۆز_گوڵان_جۆزەردان_پوشپەڕ_گەلاوێژ_خەرمانان_ڕەزبەر_گەڵاڕێزان_سەرماوەرز_بەفرانبار'.split('_'),
  monthsShort: 'ڕێبەندان_ڕەشەمە_نەورۆز_گوڵان_جۆزەردان_پوشپەڕ_گەلاوێژ_خەرمانان_ڕەزبەر_گەڵاڕێزان_سەرماوەرز_بەفرانبار'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'لە %s',
    past: '%s پێش',
    s: 'چەند چرکە',
    m: 'یەک خولەک',
    mm: '%d خولەک',
    h: 'یەک کاتژمێر',
    hh: '%d کاتژمێر',
    d: 'یەک ڕۆژ',
    dd: '%d ڕۆژ',
    M: 'یەک مانگ',
    MM: '%d مانگ',
    y: 'یەک ساڵ',
    yy: '%d ساڵ'
  }
}

dayjs.locale(locale, null, true)

export default locale
