// Kurdish (Badini) [ku-ba]
export const englishToKurdishNumbersMap = {
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
}

const kurdishToEnglishNumbersMap = {
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

const months = [
  'کانونا دووێ',
  'شوبات',
  'ئادار',
  'نیسان',
  'گولان',
  'حزیران',
  'تیرمەه',
  'تەباخ',
  'ئەیلول',
  'چریا ئێکێ',
  'چریا دووێ',
  'كانونا ئێکێ'
]
const weekdays = [
  'ئێکشەمب',
  'دووشه‌مب',
  'سێشه‌مب',
  'چارشه‌مب',
  'پێنجشه‌مب',
  'جومعە',
  'شه‌مبی‌'
]

const locale = {
  name: 'ku-ba',
  months,
  monthsShort: months,
  weekdays,
  weekdaysShort: weekdays,
  weekStart: 6,
  weekdaysMin: 'ئ_د_س_چ_پ_ج_ش'.split('_'),
  preparse(string) {
    return string
      .replace(/[١٢٣٤٥٦٧٨٩٠]/g, match => kurdishToEnglishNumbersMap[match])
      .replace(/،/g, ',')
  },
  postformat(string) {
    return string
      .replace(/\d/g, match => englishToKurdishNumbersMap[match])
      .replace(/,/g, '،')
  },
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  meridiem: (hour) => {
    if (hour > 6 && hour <= 12) return 'ی سپێدێ'
    if (hour > 12 && hour <= 15) return 'ی نیڤرو'
    if (hour > 15 && hour <= 18) return 'ی ئێڤارێ'
    if (hour > 18 && hour <= 24) return 'ی شەڤێ'
    if (hour > 0 && hour <= 6) return 'ی سپێدێ'
    return ''
  },
  relativeTime: {
    future: 'ل‌ %s',
    past: '%s',
    s: 'چه‌ند چركه‌هه‌ک',
    m: 'ئێک خوله‌ك',
    mm: '%d خوله‌ك',
    h: 'ئێک كاتژمێر',
    hh: '%d كاتژمێر',
    d: 'ئێک ڕوژ',
    dd: '%d ڕوژ',
    M: 'ئێک هەیڤ',
    MM: '%d هەیڤ',
    y: 'ئێک ساڵ',
    yy: '%d ساڵ'
  },

  calendar: {
    sameDay: '[ئەڤڕو] h:mm A',
    nextDay: '[سباهی] h:mm A',
    nextWeek: 'dddd h:mm A',
    sameElse: 'YYYY/MM/DD',
    lastDay: '[دوهی] HH:mm',
    lastWeek: '[حەفتیا بەرێ] dddd h:mm A'
  }
}

dayjs.locale(locale, null, true)

export default locale
