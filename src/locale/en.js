// English [en]
// We don't need weekdaysShort, weekdaysMin, monthsShort in en.js locale
export default {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'MM-DD-YYYY',
    LL: 'MMMM D YYYY',
    LLL: 'MMMM D YYYY HH:mm',
    LLLL: 'dddd, MMMM D YYYY HH:mm'
  },
  ordinal: (n) => {
    const s = ['th', 'st', 'nd', 'rd']
    const v = n % 100
    return `[${n}${(s[(v - 20) % 10] || s[v] || s[0])}]`
  }
}
