import dayjs from 'dayjs'

const locale = {
  name: 'cs',
  weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
  months: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
  ordinal: n => `${n}.`,
  relativeTime: {
    // 3 plural forms for 1, 2-4, 5-
    pluralRule: 8,
    duration: {
      s: ['několik sekund'],
      m: ['minuta', '%d minuty', '%d minut'],
      h: ['hodina', '%d hodiny', '%d hodin'],
      d: ['den', '%d dny', '%d dní'],
      M: ['měsíc', '%d měsíce', '%d měsícú'],
      y: ['rok', '%d roky', '%d let']
    },
    future: {
      s: ['za několik sekund'],
      m: ['za minutu', 'za %d minuty', 'za %d minut'],
      h: ['za hodinu', 'za %d hodiny', 'za %d hodin'],
      d: ['zítra', 'za %d dny', 'za %d dní'],
      M: ['za měsíc', 'za %d měsíce', 'za %d měsícú'],
      y: ['za rok', 'za %d roky', 'za %d let']
    },
    past: {
      s: ['před několika sekundami'],
      m: ['před minutou', 'před %d minutami', 'před %d minutami'],
      h: ['před hodinou', 'před %d hodinami', 'před %d hodinami'],
      d: ['včera', 'před %d dny', 'před %d dny'],
      M: ['před měsícem', 'před %d měsíci', 'před %d měsíci'],
      y: ['vloni', 'před %d roky', 'před %d lety']
    }
  }
}

dayjs.locale(locale, null, true)

export default locale
