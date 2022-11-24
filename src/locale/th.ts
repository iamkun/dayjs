// Thai [th]

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'th',
  weekdays: [
    'อาทิตย์',
    'จันทร์',
    'อังคาร',
    'พุธ',
    'พฤหัสบดี',
    'ศุกร์',
    'เสาร์',
  ],
  weekdaysShort: [
    'อาทิตย์',
    'จันทร์',
    'อังคาร',
    'พุธ',
    'พฤหัส',
    'ศุกร์',
    'เสาร์',
  ],
  weekdaysMin: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  months: [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ],
  monthsShort: [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ],
  ordinal: (n) => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY เวลา H:mm',
    LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm',
  },
  relativeTime: {
    future: 'อีก %s',
    past: '%sที่แล้ว',
    s: 'ไม่กี่วินาที',
    m: '1 นาที',
    mm: '%d นาที',
    h: '1 ชั่วโมง',
    hh: '%d ชั่วโมง',
    d: '1 วัน',
    dd: '%d วัน',
    M: '1 เดือน',
    MM: '%d เดือน',
    y: '1 ปี',
    yy: '%d ปี',
  },
}

dayjs.locale(locale, true)

export default locale
