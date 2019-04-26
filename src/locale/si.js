import dayjs from 'dayjs'

const locale = {
  name: 'si',
  weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
  months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
  weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
  monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
  weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'a h:mm',
    LTS: 'a h:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY MMMM D',
    LLL: 'YYYY MMMM D, a h:mm',
    LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
  },
  relativeTime: {
    future: '%sකින්',
    past: '%sකට පෙර',
    s: 'තත්පර කිහිපය',
    m: 'මිනිත්තුව',
    mm: 'මිනිත්තු %d',
    h: 'පැය',
    hh: 'පැය %d',
    d: 'දිනය',
    dd: 'දින %d',
    M: 'මාසය',
    MM: 'මාස %d',
    y: 'වසර',
    yy: 'වසර %d'
  }
}

dayjs.locale(locale, null, true)

export default locale

