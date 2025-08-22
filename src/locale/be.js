// Belarusian [be]
import dayjs from 'dayjs'

const locale = {
  name: 'be',
  weekdays: 'Нядзелю_Панядзелак_Аўторак_Сераду_Чацвер_Пятніцу_Суботу'.split('_'),
  months: 'Студзеня_Лютага_Сакавіка_Красавіка_Траўня_Чэрвеня_Ліпеня_Жніўня_Верасня_Кастрычніка_Лістапада_Снежня'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Нд_Пн_Ат_Ср_Чц_Пт_Сб'.split('_'),
  monthsShort: 'Студ_Лют_Сак_Крас_Трав_Чэрв_Ліп_Жнів_Вер_Каст_Ліст_Снеж'.split('_'),
  weekdaysMin: 'Нд_Пн_Ат_Ср_Чц_Пт_Сб'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY г.',
    LLL: 'D MMMM YYYY г., HH:mm',
    LLLL: 'dddd, D MMMM YYYY г., HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

