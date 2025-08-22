// Dutch (Belgium) [nl-be]
import dayjs from 'dayjs'

const locale = {
  name: 'nl-be',
  weekdays: 'Zondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrijdag_Zaterdag'.split('_'),
  months: 'Januari_Februari_Maart_April_Mei_Juni_Juli_Augustus_September_Oktober_November_December'.split('_'),
  monthsShort: 'Jan._Feb._Mrt._Apr._Mei_Jun._Jul._Aug._Sep._Okt._Nov._Dec.'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Zo._Ma._Di._Wo._Do._Vr._Za.'.split('_'),
  weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'over %s',
    past: '%s geleden',
    s: 'een paar seconden',
    m: 'één minuut',
    mm: '%d minuten',
    h: 'één uur',
    hh: '%d uur',
    d: 'één dag',
    dd: '%d dagen',
    M: 'één maand',
    MM: '%d maanden',
    y: 'één jaar',
    yy: '%d jaar'
  }
}

dayjs.locale(locale, null, true)

export default locale
