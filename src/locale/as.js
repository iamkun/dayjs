// Assamese [as]
import dayjs from 'dayjs'

const locale = {
  name: 'as',
  weekdays: 'দেওবাৰ_সোমবাৰ_মঙলবাৰ_বুধবাৰ_বৃহস্পতিবাৰ_শুক্ৰবাৰ_শনিবাৰ'.split('_'),
  months: 'জানুৱাৰী_ফেব্ৰুৱাৰী_মাৰ্চ_এপ্ৰিল_মে_জুন_জুলাই_আগষ্ট_ছেপ্টেম্বৰ_অক্টোবৰ_নৱেম্বৰ_ডিচেম্বৰ'.split('_'),
  weekdaysShort: 'দেও_সোম_মঙল_বুধ_বৃহস্পতি_শুক্ৰ_শনি'.split('_'),
  monthsShort: 'জানু_ফেব্ৰু_মাৰ্চ_এপ্ৰিল_মে_জুন_জুলাই_আগষ্ট_ছেপ্টে_অক্টো_নৱে_ডিচে'.split('_'),
  weekdaysMin: 'দে_সো_ম_বু_বৃ_শু_শ'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'A h:mm',
    LTS: 'A h:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, A h:mm',
    LLLL: 'dddd, D MMMM YYYY, A h:mm'
  },
  relativeTime: {
    future: '%s পিছত',
    past: '%s আগতে',
    s: 'কেইটামান ছেকেণ্ড',
    m: 'এক মিনিট',
    mm: '%d মিনিট',
    h: 'এক ঘণ্টা',
    hh: '%d ঘণ্টা',
    d: 'এদিন',
    dd: '%d দিন',
    M: 'এমাহ',
    MM: '%d মাহ',
    y: 'এবছৰ',
    yy: '%d বছৰ'
  }
}

dayjs.locale(locale, null, true)

export default locale