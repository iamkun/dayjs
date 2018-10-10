import dayjs from 'dayjs'

const locale = {
  name: 'sk',
  weekdays: 'Nedeľa_Pondelok_Utorok_Streda_Štvrtok_Piatok_Sobota'.split('_'),
  months: 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
  relativeTime: {
    future: 'o %s',
    past: 'pred %s',
    s: 'niekoľko sekúnd',
    m: 'minúta',
    mm: '%d minút',
    h: 'hodina',
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
