import dayjs from 'dayjs'

const locale = {
  name: 'kh',
  weekdays: 'ថ្ងៃអាទិត្យ_ថ្ងៃច័ន្ទ_ថ្ងៃអង្គារ_ថ្ងៃពុធ_ថ្ងៃព្រហស្បតិ៍_ថ្ងៃសុក្រ_ថ្ងៃសៅរ៍'.split(
    '_'
  ),
  months:
    'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
      '_'
    ),
  weekStart: 1,
  weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
  monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
  weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
  ordinal: (n) => {
    const s = ['th', 'st', 'nd', 'rd']
    const v = n % 100
    return `[${n}${s[(v - 20) % 10] || s[v] || s[0]}]`
  },
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY h:mm A',
    LLLL: 'dddd, D MMMM YYYY h:mm A',
  },
  relativeTime: {
    future: 'in %s',
    past: '%s មកហើយ',
    s: 'ពីរបីវិនាទី',
    m: 'មួយនាទី',
    mm: '%d នាទី',
    h: 'មួយម៉ោង',
    hh: '%d ម៉ោង',
    d: 'មួយថ្ងៃ',
    dd: '%d ថ្ងៃ',
    M: 'មួយខែ',
    MM: '%d ខែ',
    y: 'មួយឆ្នាំ',
    yy: '%d ឆ្នាំ',
  },
meridiem: (hour, minute) => {
    const hm = hour * 100 + minute
    if (hm < 600) {
      return 'កណ្តាលអធ្រាត្រ'
    } else if (hm < 900) {
      return 'ពេលព្រឹក'
    } else if (hm < 1100) {
      return 'ពេលព្រឹក'
    } else if (hm < 1300) {
      return 'ពេលរសៀល'
    } else if (hm < 1800) {
      return 'ពេលល្ងាច'
    }
    return 'ពេលយប់'
  },
}

dayjs.locale(locale, null, true)

export default locale
