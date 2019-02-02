import dayjs from 'dayjs'

const locale = {
  name: 'bg',
  weekdays: 'Неделя_Понеделник_Вторник_Сряда_Четвъртък_Петък_Събота'.split('_'),
  months: 'Януари_Февруари_Март_Април_Май_Юни_Юли_Август_Септември_Октомври_Ноември_Декември'.split('_'),
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'D.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY H:mm',
    LLLL: 'dddd, D MMMM YYYY H:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale
