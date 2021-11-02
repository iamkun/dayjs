// Kazakh [kk]
import dayjs from 'dayjs'

const locale = {
  name: 'kk',
  weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
  weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
  weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
  months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
  monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
  weekStart: 1,
  relativeTime: {
    future: '%s ішінде',
    past: '%s бұрын',
    s: 'бірнеше секунд',
    m: 'бір минут',
    mm: '%d минут',
    h: 'бір сағат',
    hh: '%d сағат',
    d: 'бір күн',
    dd: '%d күн',
    M: 'бір ай',
    MM: '%d ай',
    y: 'бір жыл',
    yy: '%d жыл'
  },
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

