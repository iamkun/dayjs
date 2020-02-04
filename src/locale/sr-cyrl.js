// Serbian Cyrillic [sr-cyrl]
import dayjs from 'dayjs'

const locale = {
  name: 'sr-cyrl',
  weekdays: 'Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота'.split('_'),
  weekdaysShort: 'Нед._Пон._Уто._Сре._Чет._Пет._Суб.'.split('_'),
  weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
  months: 'Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар'.split('_'),
  monthsShort: 'Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.'.split('_'),
  weekStart: 1,
  relativeTime: {
    future: 'за %s',
    past: 'пре %s',
    s: 'секунда',
    m: 'минут',
    mm: '%d минута',
    h: 'сат',
    hh: '%d сати',
    d: 'дан',
    dd: '%d дана',
    M: 'месец',
    MM: '%d месеци',
    y: 'година',
    yy: '%d године'
  },
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale
