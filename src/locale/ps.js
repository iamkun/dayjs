// Pashto [ps]
import dayjs from 'dayjs'

const locale = {
  name: 'ps',
  weekdays: 'یکشنبه_دوشنبه_سه شنبه_چهارشنبه_پنجشنبه_جمعه_شنبه'.split('_'),
  months: 'جنوري_فبروري_مارچ_اپریل_مۍ_جون_جولای_اګست_سپتمبر_اکتوبر_نومبر_دسمبر'.split('_'),
  weekdaysShort: 'یک_دو_سه_چهار_پنج_جمعه_شنبه'.split('_'),
  monthsShort: 'جنوري_فبروري_مارچ_اپریل_مۍ_جون_جولای_اګست_سپتمبر_اکتوبر_نومبر_دسمبر'.split('_'),
  weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY د MMMM D',
    LLL: 'YYYY د MMMM D HH:mm',
    LLLL: 'dddd د YYYY د MMMM D HH:mm'
  },
  relativeTime: {
    future: 'په %s کې',
    past: '%s مخکې',
    s: 'څو ثانیې',
    m: 'یوه دقیقه',
    mm: '%d دقیقې',
    h: 'یو ساعت',
    hh: '%d ساعته',
    d: 'یوه ورځ',
    dd: '%d ورځې',
    M: 'يوه مياشت',
    MM: '%d میاشتې',
    y: 'یو کال',
    yy: '%d کاله'
  }
}

dayjs.locale(locale, null, true)

export default locale