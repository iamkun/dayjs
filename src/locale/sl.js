// Slovenian [sl]
import dayjs from 'dayjs'

const locale = {
  name: 'sl',
  weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
  months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
  weekStart: 1,
  weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
  monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
  weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm'
  },
  relativeTime: {
    future: 'čez %s',
    past: '%s nazaj',
    s: 'nekaj sekund',
    m: 'eno minuto',
    mm: '%d minut',
    h: 'eno uro',
    hh: '%d ur',
    d: 'en dan',
    dd: '%d dni',
    M: 'en mesec',
    MM: '%d mesecev',
    y: 'eno leto',
    yy: '%d let'
  }
}

dayjs.locale(locale, null, true)

export default locale

