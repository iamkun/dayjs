// Dutch [nl]
import dayjs from 'dayjs'

const locale = {
  name: 'nl',
  weekdays: 'Zondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrijdag_Zaterdag'.split('_'),
  weekdaysShort: 'Zo._Ma._Di._Wo._Do._Vr._Za.'.split('_'),
  weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
  months: 'Januari_Februari_Maart_April_Mei_Juni_Juli_Augustus_September_Oktober_November_December'.split('_'),
  monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
  ordinal: n => `[${n}${n === 1 || n === 8 || n >= 20 ? 'ste' : 'de'}]`,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD-MM-YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'over %s',
    past: '%s geleden',
    s: 'een paar seconden',
    m: 'een minuut',
    mm: '%d minuten',
    h: 'een uur',
    hh: '%d uur',
    d: 'een dag',
    dd: '%d dagen',
    M: 'een maand',
    MM: '%d maanden',
    y: 'een jaar',
    yy: '%d jaar'
  }
}

dayjs.locale(locale, null, true)

export default locale
