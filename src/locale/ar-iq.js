//  Arabic (Iraq) [ar-iq]
import dayjs from 'dayjs'

const locale = {
  name: 'ar-iq',
  weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
  months: 'كانون الثاني_شباط_آذار_نيسان_أيار_حزيران_تموز_آب_أيلول_تشرين الأول_ تشرين الثاني_كانون الأول'.split('_'),
  weekStart: 1,
  weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
  monthsShort: 'كانون الثاني_شباط_آذار_نيسان_أيار_حزيران_تموز_آب_أيلول_تشرين الأول_ تشرين الثاني_كانون الأول'.split('_'),
  weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  meridiem: hour => (hour > 12 ? 'م' : 'ص'),
  relativeTime: {
    future: 'في %s',
    past: 'منذ %s',
    s: 'ثوان',
    m: 'دقيقة',
    mm: '%d دقائق',
    h: 'ساعة',
    hh: '%d ساعات',
    d: 'يوم',
    dd: '%d أيام',
    M: 'شهر',
    MM: '%d أشهر',
    y: 'سنة',
    yy: '%d سنوات'
  }
}

dayjs.locale(locale, null, true)

export default locale
