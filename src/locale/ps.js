// Pashto [ps]
import dayjs from 'dayjs'

const locale = {
  name: 'ps',
  weekdays: 'يونۍ_دونۍ_درېنۍ_څلرنۍ_پينځنۍ_جمعه_اونۍ'.split('_'),
  weekdaysShort: 'يونۍ_دونۍ_درېنۍ_څلرنۍ_پينځنۍ_جمعه_اونۍ'.split('_'),
  weekStart: 6,
  months: 'جنوري_فبروري_مارچ_اپریل_مۍ_جون_جولای_اګست_سېپتمبر_اکتوبر_نومبر_دسمبر'.split('_'),
  monthsShort: 'جنوري_فبروري_مارچ_اپریل_مۍ_جون_جولای_اګست_سېپتمبر_اکتوبر_نومبر_دسمبر'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd، D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'په %s کې',
    past: '%s مخکې',
    s: 'څو ثانيې',
    m: 'يوه دقيقه',
    mm: '%d دقيقې',
    h: 'يو ساعت',
    hh: '%d ساعتونه',
    d: 'يوه ورځ',
    dd: '%d ورځې',
    M: 'يوه مياشت',
    MM: '%d مياشتې',
    y: 'يو کال',
    yy: '%d کاله'
  }
}

dayjs.locale(locale, null, true)

export default locale
