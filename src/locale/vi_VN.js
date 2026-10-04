// Vietnamese [vi]
import dayjs from 'dayjs'

const locale = {
  name: 'vi_VN',
  weekdays: 'Chủ Nhật_thứ Hai_thứ Ba_thứ Tư_thứ Năm_thứ Sáu_thứ Bảy'.split('_'),
  months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
  weekStart: 1,
  weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
  monthsShort: 'thg 1_thg 2_thg 3_thg 4_thg 5_thg 6_thg 7_thg 8_thg 9_thg 10_thg 11_thg 12'.split('_'),
  weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM [năm] YYYY',
    LLL: 'D MMMM [năm] YYYY HH:mm',
    LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
    l: 'DD/M/YYYY',
    ll: 'D MMM YYYY',
    lll: 'D MMM YYYY HH:mm',
    llll: 'ddd, D MMM YYYY HH:mm'
  },
  relativeTime: {
    future: '%s tới',
    past: '%s trước',
    s: 'vài giây',
    m: 'một phút',
    mm: '%d phút',
    h: 'một giờ',
    hh: '%d giờ',
    d: 'một ngày',
    dd: '%d ngày',
    M: 'một tháng',
    MM: '%d tháng',
    y: 'một năm',
    yy: '%d năm'
  }
}

dayjs.locale(locale, null, true)

export default locale

