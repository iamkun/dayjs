import dayjs from 'dayjs'

const locale = {
  name: 'sr-cyrl',
  weekdays: 'Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота'.split('_'),
  months: 'Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар'.split('_'),
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
  ordinal: n => `${n}.`
}

dayjs.locale(locale, null, true)

export default locale
