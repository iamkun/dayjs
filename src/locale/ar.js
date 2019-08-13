import dayjs from 'dayjs'

const symbolMap = {
  1: '١',
  2: '٢',
  3: '٣',
  4: '٤',
  5: '٥',
  6: '٦',
  7: '٧',
  8: '٨',
  9: '٩',
  0: '٠'
};
const numberMap = {
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
  '٠': '0'
}

const months = 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_');
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

const pluralForm = (n) => {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  } else if (n % 100 >= 3 && n % 100 <= 10) {
    return 3
  } else if (n % 100 >= 11) {
    return 4
  }

  return 5
}

const pluralize = u => (number, withoutSuffix) => {
  const f = pluralForm(number)
  let str = plurals[u][pluralForm(number)]

  if (f === 2) {
    str = str[withoutSuffix ? 0 : 1]
  }

  return str.replace(/%d/i, number)
}

const locale = {
  name: 'ar',
  weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
  weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
  weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
  months,
  monthsShort: months,
  weekStart: 6,
  preparse: string => string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, match => numberMap[match]).replace(/،/g, ','),
  postFormat: string => string.replace(/\d/g, match => symbolMap[match].replace(/,/g, '،')),
  relativeTime: {
    future: 'بعد %s',
    past: 'منذ %s',
    s: 'ثانية واحدة',
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
  ordinal: n => n,
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
