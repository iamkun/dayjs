import dayjs from 'dayjs'

const locale = {
  name: 'cs',
  weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
  months: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
  ordinal: n => `${n}.`,
  relativeTime: {
    duration: {
      s: 'několik sekund',
      m: 'minuta',
      mm: '%d minuty',
      mmm: '%d minut',
      h: 'hodina',
      hh: '%d hodiny',
      hhh: '%d hodin',
      d: 'den',
      dd: '%d dny',
      ddd: '%d dní',
      M: 'měsíc',
      MM: '%d měsíce',
      MMM: '%d měsícú',
      y: 'rok',
      yy: '%d roky',
      yyy: '%d let'
    },
    future: {
      s: 'za několik sekund',
      m: 'za minutu',
      mm: 'za %d minuty',
      mmm: 'za %d minut',
      h: 'za hodinu',
      hh: 'za %d hodiny',
      hhh: 'za %d hodin',
      d: 'zítra',
      dd: 'za %d dny',
      ddd: 'za %d dní',
      M: 'za měsíc',
      MM: 'za %d měsíce',
      MMM: 'za %d měsícú',
      y: 'za rok',
      yy: 'za %d roky',
      yyy: 'za %d let'
    },
    past: {
      s: 'před několika sekundami',
      m: 'před minutou',
      mm: 'před %d minutami',
      mmm: 'před %d minutami',
      h: 'před hodinu',
      hh: 'před %d hodinami',
      hhh: 'před %d hodinami',
      d: 'včera',
      dd: 'před %d dny',
      ddd: 'před %d dny',
      M: 'před měsícem',
      MM: 'před %d měsíci',
      MMM: 'před %d měsíci',
      y: 'před rokem',
      yy: 'před %d roky',
      yyy: 'před %d lety'
    }
  }
}

dayjs.locale(locale, null, true)

export default locale
