// Persian [fa]
import dayjs from 'dayjs'

const symbolMap = {
  1: "١",
  2: "٢",
  3: "٣",
  4: "۴",
  5: "۵",
  6: "۶",
  7: "٧",
  8: "٨",
  9: "٩",
  0: "۰"
}

const numberMap = {
  "١": "1",
  "٢": "2",
  "٣": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
  "۰": "0"
}

const locale = {
  name: 'fa',
  weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
  weekdaysShort: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
  weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
  weekStart: 6,
  months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
  monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
  ordinal: n => n,
  preparse(string) {
    return string
      .replace(
        /[۱۲۳۴۵۶۷۸۹۰]/g,
        match => numberMap[match]
      )
      .replace(/،/g, ',')
  },
  postformat(string) {
    return string
      .replace(/\d/g, match => symbolMap[match])
      .replace(/,/g, '،')
  },
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
    past: '%s پیش',
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
