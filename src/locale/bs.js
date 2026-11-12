// Bosnian [bs]
import dayjs from 'dayjs'

const translate = (number, withoutSuffix, key) => {
  const format = {
    m: ['jedna minuta', 'jedne minute'],
    h: ['jedan sat', 'jednog sata']
  }
  if (format[key]) {
    return withoutSuffix ? format[key][0] : format[key][1]
  }
  const words = {
    mm: ['minuta', 'minute', 'minuta'],
    hh: ['sat', 'sata', 'sati'],
    dd: ['dan', 'dana', 'dana'],
    MM: ['mjesec', 'mjeseca', 'mjeseci'],
    yy: ['godina', 'godine', 'godina']
  }
  const index = (number === 2 || number === 3 || number === 4) ? 1 : 2
  return `${number} ${words[key][index]}`
}

const locale = {
  name: 'bs',
  weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
  months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
  weekStart: 1,
  weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
  monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
  weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
  ordinal: n => n,
  relativeTime: {
    future: 'za %s',
    past: 'prije %s',
    s: 'par sekundi',
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: 'dan',
    dd: translate,
    M: 'mjesec',
    MM: translate,
    y: 'godinu',
    yy: translate
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

