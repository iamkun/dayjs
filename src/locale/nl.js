// Dutch [nl]
import dayjs from 'dayjs'

const locale = {
  name: 'nl',
  weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
  weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
  weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
  months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
  monthsShort: 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
  ordinal: n => `${n}${n === 1 || n === 8 || n >= 20 ? 'ste' : 'de'}`,
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
  },
  greet: (i) => {
    const hour = i.hour()
    if (hour >= 4 && hour < 12) {
      return 'Goedemorgen%s' // (4:00 - 11:59)
    } else if (hour >= 12 && hour < 18) {
      return 'Goedemiddag%s' // (12:00 - 17:59)
    }
    return 'Goedenavond%s'
  }
}

dayjs.locale(locale, null, true)

export default locale
