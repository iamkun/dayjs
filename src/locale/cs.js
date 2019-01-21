import dayjs from 'dayjs'

const locale = {
  name: 'cs',
  weekdays: 'Neděle_Pondělí_Úterý_Středa_Čtvrtek_Pátek_Sobota'.split('_'),
  months: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
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
  },
  ordinal: n => `${n}º`
}

dayjs.locale(locale, null, true)

export default locale
