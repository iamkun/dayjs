// Kurdish [ku]
import dayjs from 'dayjs'

const locale = {
  name: 'ku',
  weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
  months: 'کانونی دووەم_شوبات_ئازار_نیسان_ئایار_حوزەیران_تەمموز_ئاب_ئەیلوول_تشرینی یەكەم_تشرینی دووەم_كانونی یەکەم'.split('_'),
  weekStart: 6,
  weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
  monthsShort: 'کانونی دووەم_شوبات_ئازار_نیسان_ئایار_حوزەیران_تەمموز_ئاب_ئەیلوول_تشرینی یەكەم_تشرینی دووەم_كانونی یەکەم'.split('_'),
  weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  meridiem: hour => (hour < 12 ? 'پ.ن' : 'د.ن'),
  relativeTime: {
    future: 'له‌ %s',
    past: '%s',
    s: 'چه‌ند چركه‌یه‌ك',
    m: 'یه‌ك خوله‌ك',
    mm: '%d خوله‌ك',
    h: 'یه‌ك كاتژمێر',
    hh: '%d كاتژمێر',
    d: 'یه‌ك ڕۆژ',
    dd: '%d ڕۆژ',
    M: 'یه‌ك مانگ',
    MM: '%d مانگ',
    y: 'یه‌ك ساڵ',
    yy: '%d ساڵ'
  }
}

dayjs.locale(locale, null, true)

export default locale

