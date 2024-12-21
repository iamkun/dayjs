// Armenian [hy-am]
import dayjs from 'dayjs'

const locale = {
  name: 'hy-am',
  weekdays: 'Կիրակի_Երկուշաբթի_Երեքշաբթի_Չորեքշաբթի_Հինգշաբթի_Ուրբաթ_Շաբաթ'.split('_'),
  months: 'Հունվարի_Փետրվարի_Մարտի_Ապրիլի_Մայիսի_Հունիսի_Հուլիսի_Օգոստոսի_Սեպտեմբերի_Հոկտեմբերի_Նոյեմբերի_Դեկտեմբերի'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Կրկ_Երկ_Երք_Չրք_Հնգ_Ուրբ_Շբթ'.split('_'),
  monthsShort: 'Հնվ_Փտր_Մրտ_Ապր_Մյս_Հնս_Հլս_Օգս_Սպտ_Հկտ_Նմբ_Դկտ'.split('_'),
  weekdaysMin: 'Կրկ_Երկ_Երք_Չրք_Հնգ_Ուրբ_Շբթ'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY թ.',
    LLL: 'D MMMM YYYY թ., HH:mm',
    LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
  },
  relativeTime: {
    future: '%s հետո',
    past: '%s առաջ',
    s: 'մի քանի վայրկյան',
    m: 'րոպե',
    mm: '%d րոպե',
    h: 'ժամ',
    hh: '%d ժամ',
    d: 'օր',
    dd: '%d օր',
    M: 'ամիս',
    MM: '%d ամիս',
    y: 'տարի',
    yy: '%d տարի'
  }
}

dayjs.locale(locale, null, true)

export default locale

