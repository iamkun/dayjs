// Slovak [sk]
import dayjs from 'dayjs'

const locale = {
  name: 'sk',
  weekdays: 'Nedeľa_Pondelok_Utorok_Streda_Štvrtok_Piatok_Sobota'.split('_'),
  weekdaysShort: 'Ne_Po_Ut_St_Št_Pi_So'.split('_'),
  weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
  months: 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
  monthsShort: 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_'),
  weekStart: 1,
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
  ordinal: n => `${n}º`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd D. MMMM YYYY H:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale
