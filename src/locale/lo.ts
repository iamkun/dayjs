// Lao [lo]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'lo',
  weekdays: ['ອາທິດ', 'ຈັນ', 'ອັງຄານ', 'ພຸດ', 'ພະຫັດ', 'ສຸກ', 'ເສົາ'],
  months: [
    'ມັງກອນ',
    'ກຸມພາ',
    'ມີນາ',
    'ເມສາ',
    'ພຶດສະພາ',
    'ມິຖຸນາ',
    'ກໍລະກົດ',
    'ສິງຫາ',
    'ກັນຍາ',
    'ຕຸລາ',
    'ພະຈິກ',
    'ທັນວາ',
  ],
  weekdaysShort: ['ທິດ', 'ຈັນ', 'ອັງຄານ', 'ພຸດ', 'ພະຫັດ', 'ສຸກ', 'ເສົາ'],
  monthsShort: [
    'ມັງກອນ',
    'ກຸມພາ',
    'ມີນາ',
    'ເມສາ',
    'ພຶດສະພາ',
    'ມິຖຸນາ',
    'ກໍລະກົດ',
    'ສິງຫາ',
    'ກັນຍາ',
    'ຕຸລາ',
    'ພະຈິກ',
    'ທັນວາ',
  ],
  weekdaysMin: ['ທ', 'ຈ', 'ອຄ', 'ພ', 'ພຫ', 'ສກ', 'ສ'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'ວັນdddd D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'ອີກ %s',
    past: '%sຜ່ານມາ',
    s: 'ບໍ່ເທົ່າໃດວິນາທີ',
    m: '1 ນາທີ',
    mm: '%d ນາທີ',
    h: '1 ຊົ່ວໂມງ',
    hh: '%d ຊົ່ວໂມງ',
    d: '1 ມື້',
    dd: '%d ມື້',
    M: '1 ເດືອນ',
    MM: '%d ເດືອນ',
    y: '1 ປີ',
    yy: '%d ປີ',
  },
}

dayjs.locale(locale, true)

export default locale
