// Persian [fa]
import dayjs from 'dayjs'

const locale = {
  name: 'fa-us',
  weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
  weekdaysShort: 'یک‌_دو_سه‌_چه_پن_جم_شن'.split('_'),
  weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
  weekStart: 1,
  months: 'ژانویه_فوریه_مارس_آپریل_می_ژوئن_ژولای_آگوست_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
  monthsShort: 'ژان_فور_مار_آپر_می_ژوي_ژول_آگو_سپت_اکت_نوا_دسا'.split('_'),
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
    future: 'در %s',
    past: '%s قبل',
    s: 'چند ثانیه',
    m: 'یک دقیقه',
    mm: '%d دقیقه',
    h: 'یک ساعت',
    hh: '%d ساعت',
    d: 'یک روز',
    dd: '%d روز',
    M: 'یک ماه',
    MM: '%d ماه',
    y: 'یک سال',
    yy: '%d سال'
  }
}

dayjs.locale(locale, null, true)

export default locale
