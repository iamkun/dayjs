import dayjs from 'dayjs'

const locale = {
  name: 'he',
  weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
  weekdaysMin: 'א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳'.split('_'),
  months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
  monthsShort: 'ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ'.split('_'),
  relativeTime: {
    future: 'בעוד %s',
    past: 'לפני %s',
    s: 'כמה שניות',
    m: 'דקה',
    mm: '%d דקות',
    h: 'שעה',
    hh: '%d שעות',
    d: 'יום',
    dd: '%d ימים',
    M: 'חודש',
    MM: '%d חודשים',
    y: 'שנה',
    yy: '%d שנים'
  },
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale
