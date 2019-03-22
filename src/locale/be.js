import dayjs from 'dayjs'

const locale = {
  name: 'be',
  weekdays: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
  months: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
  weekStart: 1,
  weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
  monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
  weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

