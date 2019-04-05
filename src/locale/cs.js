import dayjs from 'dayjs'

const locale = {
  name: 'cs',
  weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
  months: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
  weekStart: 1,
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd D. MMMM YYYY H:mm',
    l: 'D. M. YYYY'
  },
  relativeTime: {
    future: 'za %s',
    past: 'před %s',
    s: 'několik sekund',
    m: 'minuta',
    mm: '%d minut',
    h: 'hodina',
    hh: '%d hodin',
    d: 'den',
    dd: '%d dnů',
    M: 'měsíc',
    MM: '%d měsíců',
    y: 'rok',
    yy: '%d roků'
  }
}

dayjs.locale(locale, null, true)

export default locale

