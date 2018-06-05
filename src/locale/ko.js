import dayjs from 'dayjs'

const locale = {
  name: 'ko',
  weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
  months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
  ordinal: n => n,
  relativeTime: {
    future: '%s 이내',
    past: '%s 전',
    s: '몇 초',
    m: '1 분',
    mm: '%d 분',
    h: '1 시간',
    hh: '%d 시간',
    d: '1 일',
    dd: '%d 일',
    M: '1 개월',
    MM: '%d 개월',
    y: '1 년',
    yy: '%d 년'
  }
}

dayjs.locale(locale, null, true)

export default locale
