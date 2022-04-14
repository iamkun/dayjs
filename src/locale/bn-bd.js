// Bengali (Bangladesh) [bn-bd]
import dayjs from 'dayjs'

const symbolMap = {
  1: '১',
  2: '২',
  3: '৩',
  4: '৪',
  5: '৫',
  6: '৬',
  7: '৭',
  8: '৮',
  9: '৯',
  0: '০'
}

const numberMap = {
  '১': '1',
  '২': '2',
  '৩': '3',
  '৪': '4',
  '৫': '5',
  '৬': '6',
  '৭': '7',
  '৮': '8',
  '৯': '9',
  '০': '0'
}

const locale = {
  name: 'bn-bd',
  weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
  months: 'জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
  weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
  monthsShort: 'জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
  weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
  weekStart: 0,
  preparse(string) {
    return string.replace(/[১২৩৪৫৬৭৮৯০]/g, match => numberMap[match])
  },
  postformat(string) {
    return string.replace(/\d/g, match => symbolMap[match])
  },
  ordinal: (n) => {
    const s = ['ই', 'লা', 'রা', 'ঠা', 'শে']
    const v = n % 100
    return `[${n}${s[(v - 20) % 10] || s[v] || s[0]}]`
  },
  formats: {
    LT: 'A h:mm সময়',
    LTS: 'A h:mm:ss সময়',
    L: 'DD/MM/YYYY খ্রিস্টাব্দ',
    LL: 'D MMMM YYYY খ্রিস্টাব্দ',
    LLL: 'D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়',
    LLLL: 'dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়'
  },
  meridiem: hour =>
  /* eslint-disable no-nested-ternary */
    (hour < 4
      ? 'রাত'
      : hour < 6
        ? 'ভোর'
        : hour < 12
          ? 'সকাল'
          : hour < 15
            ? 'দুপুর'
            : hour < 18
              ? 'বিকাল'
              : hour < 20
                ? 'সন্ধ্যা'
                : 'রাত'),
  relativeTime: {
    future: '%s পরে',
    past: '%s আগে',
    s: 'কয়েক সেকেন্ড',
    m: 'এক মিনিট',
    mm: '%d মিনিট',
    h: 'এক ঘন্টা',
    hh: '%d ঘন্টা',
    d: 'এক দিন',
    dd: '%d দিন',
    M: 'এক মাস',
    MM: '%d মাস',
    y: 'এক বছর',
    yy: '%d বছর'
  }
}

dayjs.locale(locale, null, true)

export default locale
