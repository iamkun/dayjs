import dayjs from 'dayjs'

const locale = {
  name: 'sk',
  weekdays: 'Pondelok_Utorok_Streda_Štvrtok_Piatok_Sobota_Nedeľa'.split('_'),
  months: 'Január_Február_Marec_Apríl_Máj_Jún_Júl_August_September_Október_November_December'.split('_'),
  relativeTime: {
    future: 'o %s',
    past: 'pred %s',
    s: 'niekoľko sekúnd',
    m: 'minúta',
    mm: '%d minút',
    h: 'un\' hodina',
    hh: '%d hodín',
    d: 'deň',
    dd: '%d dní',
    M: 'mesiac',
    MM: '%d mesiacov',
    y: 'rok',
    yy: '%d rokov'
  },
  ordinal: n => `${n}º`
}

dayjs.locale(locale, null, true)

export default locale
