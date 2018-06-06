import dayjs from 'dayjs'

const locale = {
  name: 'th',
  weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
  weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
  months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฏาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
  monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
  relativeTime: {
    future: 'อีก %s',
    past: '%s ที่ผ่านมา',
    s: 'ไม่กี่วิ',
    m: 'นาที',
    mm: '%d นาที',
    h: 'ชั่วโมง',
    hh: '%d ชั่วโมง',
    d: 'วัน',
    dd: '%d วัน',
    M: 'เดือน',
    MM: '%d เดือน',
    y: 'ปี',
    yy: '%d ปี'
  },
  ordinal: n => `${n}.`
}

dayjs.locale(locale, null, true)

export default locale
