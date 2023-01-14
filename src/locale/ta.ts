// Tamil [ta]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'ta',
  weekdays: [
    'ஞாயிற்றுக்கிழமை',
    'திங்கட்கிழமை',
    'செவ்வாய்கிழமை',
    'புதன்கிழமை',
    'வியாழக்கிழமை',
    'வெள்ளிக்கிழமை',
    'சனிக்கிழமை',
  ],
  months: [
    'ஜனவரி',
    'பிப்ரவரி',
    'மார்ச்',
    'ஏப்ரல்',
    'மே',
    'ஜூன்',
    'ஜூலை',
    'ஆகஸ்ட்',
    'செப்டெம்பர்',
    'அக்டோபர்',
    'நவம்பர்',
    'டிசம்பர்',
  ],
  weekdaysShort: [
    'ஞாயிறு',
    'திங்கள்',
    'செவ்வாய்',
    'புதன்',
    'வியாழன்',
    'வெள்ளி',
    'சனி',
  ],
  monthsShort: [
    'ஜனவரி',
    'பிப்ரவரி',
    'மார்ச்',
    'ஏப்ரல்',
    'மே',
    'ஜூன்',
    'ஜூலை',
    'ஆகஸ்ட்',
    'செப்டெம்பர்',
    'அக்டோபர்',
    'நவம்பர்',
    'டிசம்பர்',
  ],
  weekdaysMin: ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, HH:mm',
    LLLL: 'dddd, D MMMM YYYY, HH:mm',
  },
  relativeTime: {
    future: '%s இல்',
    past: '%s முன்',
    s: 'ஒரு சில விநாடிகள்',
    m: 'ஒரு நிமிடம்',
    mm: '%d நிமிடங்கள்',
    h: 'ஒரு மணி நேரம்',
    hh: '%d மணி நேரம்',
    d: 'ஒரு நாள்',
    dd: '%d நாட்கள்',
    M: 'ஒரு மாதம்',
    MM: '%d மாதங்கள்',
    y: 'ஒரு வருடம்',
    yy: '%d ஆண்டுகள்',
  },
}

dayjs.locale(locale, true)

export default locale
