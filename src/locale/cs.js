import dayjs from 'dayjs'

const locale = {
  name: 'cs',
  weekdays: 'Pondělí_Úterý_Středa_Čtvrtek_Pátek_Sobota_Neděle'.split('_'),
  months: 'Leden_Únor_Březen_Duben_Květen_Červen_Červenec_Srpen_Září_Říjen_Listopad_Prosinec'.split('_'),
  relativeTime: {
    future: 'po %s',
    past: '%s před',
    s: 'vteřin',
    m: 'minuta',
    mm: '%d minut',
    h: 'hodina',
    hh: '%d hodin',
    d: 'den',
    dd: '%d dní',
    M: 'měsíc',
    MM: '%d měsíců',
    y: 'rok',
    yy: '%d let'
  },
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale
