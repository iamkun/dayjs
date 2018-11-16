import dayjs from 'dayjs'

const locale = {
  name: 'fa',
  weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
  months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
  ordinal: n => n,
  relativeTime: {
    future: '%s در',
    past: 'پیش %s',
    s: 'چند ثانیه',
    m: 'یک دقیقه',
    mm: 'دقیقه %d',
    h: 'یک ساعت',
    hh: 'ساعت %d',
    d: 'یک روز',
    dd: 'روز %d',
    M: 'یک ماه',
    MM: 'ماه %d',
    y: 'یک سال',
    yy: 'سال %d'
  }
}

dayjs.locale(locale, null, true)

export default locale
