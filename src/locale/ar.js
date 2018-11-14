import dayjs from 'dayjs'

const locale = {
  name: 'ar',
  weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
  months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
  relativeTime: {
    future: 'بعد %s',
    past: 'منذ %s',
    s: 'ثانية واحدة',
    m: 'دقيقة واحدة',
    mm: 'دقائق %d',
    h: 'ساعة واحدة',
    hh: 'ساعات %d',
    d: 'يوم واحد',
    dd: 'أيام %d',
    M: 'شهر واحد',
    MM: 'شهرا %d',
    y: 'عام واحد',
    yy: 'أعوام %d'
  },
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale
