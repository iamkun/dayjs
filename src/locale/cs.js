import dayjs from 'dayjs'

const locale = {
  name: 'cs',
  weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
  months: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
  ordinal: n => `${n}.`,
  relativeTime: {
    // Using 3 plural forms for 1, 2-4, 5-
    duration: {
      s: 'několik sekund',
      m: 'minuta',
      mm: ['%d minuta', '%d minuty', '%d minut'],
      h: 'hodina',
      hh: ['%d hodina', '%d hodiny', '%d hodin'],
      d: 'den',
      dd: ['%d den', '%d dny', '%d dní'],
      M: 'měsíc',
      MM: ['%d měsíc', '%d měsíce', '%d měsícú'],
      y: 'rok',
      yy: ['%d rok', '%d roky', '%d let']
    },
    future: {
      s: 'za několik sekund',
      m: 'za minutu',
      mm: ['za %d minutu', 'za %d minuty', 'za %d minut'],
      h: 'za hodinu',
      hh: ['za %d hodinu', 'za %d hodiny', 'za %d hodin'],
      d: 'zítra',
      dd: ['za %d den', 'za %d dny', 'za %d dní'],
      M: 'za měsíc',
      MM: ['za %d měsíc', 'za %d měsíce', 'za %d měsícú'],
      y: 'za rok',
      yy: ['za %d rok', 'za %d roky', 'za %d let']
    },
    past: {
      s: 'před několika sekundami',
      m: 'před minutou',
      mm: ['před %d minutou', 'před %d minutami', 'před %d minutami'],
      h: 'před hodinou',
      hh: ['před %d hodinou', 'před %d hodinami', 'před %d hodinami'],
      d: 'včera',
      dd: ['před %d dnem', 'před %d dny', 'před %d dny'],
      M: 'před měsícem',
      MM: ['před %d měsícem', 'před %d měsíci', 'před %d měsíci'],
      y: 'vloni',
      yy: ['před %d rokem', 'před %d roky', 'před %d lety']
    }
  }
}

dayjs.locale(locale, null, true)

export default locale
