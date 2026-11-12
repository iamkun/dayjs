// Arabic (Lybia) [ar-ly]
import dayjs from 'dayjs'

const pluralForm = (n) => {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  if (n % 100 >= 3 && n % 100 <= 10) {
    return 3
  }
  if (n % 100 >= 11) {
    return 4
  }
  return 5
}

const plurals = {
  s: [
    'أقل من ثانية',
    'ثانية واحدة',
    ['ثانيتان', 'ثانيتين'],
    '%d ثوان',
    '%d ثانية',
    '%d ثانية'
  ],
  m: [
    'أقل من دقيقة',
    'دقيقة واحدة',
    ['دقيقتان', 'دقيقتين'],
    '%d دقائق',
    '%d دقيقة',
    '%d دقيقة'
  ],
  h: [
    'أقل من ساعة',
    'ساعة واحدة',
    ['ساعتان', 'ساعتين'],
    '%d ساعات',
    '%d ساعة',
    '%d ساعة'
  ],
  d: [
    'أقل من يوم',
    'يوم واحد',
    ['يومان', 'يومين'],
    '%d أيام',
    '%d يومًا',
    '%d يوم'
  ],
  M: [
    'أقل من شهر',
    'شهر واحد',
    ['شهران', 'شهرين'],
    '%d أشهر',
    '%d شهرا',
    '%d شهر'
  ],
  y: [
    'أقل من عام',
    'عام واحد',
    ['عامان', 'عامين'],
    '%d أعوام',
    '%d عامًا',
    '%d عام'
  ]
}

const pluralize = u => (number, withoutSuffix) => {
  const f = pluralForm(number)
  let str = plurals[u][f]
  if (f === 2) {
    str = str[withoutSuffix ? 0 : 1]
  }
  return str.replace(/%d/i, number)
}

const locale = {
  name: 'ar-ly',
  weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
  months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
  weekStart: 6,
  weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
  monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
  weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
  ordinal: n => n,
  meridiem: hour => (hour > 12 ? 'م' : 'ص'),
  relativeTime: {
    future: 'بعد %s',
    past: 'منذ %s',
    s: pluralize('s'),
    m: 'دقيقة واحدة',
    mm: pluralize('m'),
    h: 'ساعة واحدة',
    hh: pluralize('h'),
    d: 'يوم واحد',
    dd: pluralize('d'),
    M: 'شهر واحد',
    MM: pluralize('M'),
    y: 'عام واحد',
    yy: pluralize('y')
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'D/‏M/‏YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

