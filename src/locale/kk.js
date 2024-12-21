// Kazakh [kk]
import dayjs from 'dayjs'

const locale = {
  name: 'kk',
  weekdays: 'Жексенбі_Дүйсенбі_Сейсенбі_Сәрсенбі_Бейсенбі_Жұма_Сенбі'.split('_'),
  weekdaysShort: 'Жек_Дүй_Сей_Сәр_Бей_Жұм_Сен'.split('_'),
  weekdaysMin: 'Жк_Дй_Сй_Ср_Бй_Жм_Сн'.split('_'),
  months: 'Қаңтар_Ақпан_Наурыз_Сәуір_Мамыр_Маусым_Шілде_Тамыз_Қыркүйек_Қазан_Қараша_Желтоқсан'.split('_'),
  monthsShort: 'Қаң_Ақп_Нау_Сәу_Мам_Мау_Шіл_Там_Қыр_Қаз_Қар_Жел'.split('_'),
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

