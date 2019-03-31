import dayjs from 'dayjs'

const locale = {
  name: 'ca',
  weekdays: 'Dimenge_Diluns_Dimars_Dimècres_Dijòus_Divendres_Dissabte'.split('_'),
  months: 'Genièr_Febrièr_Març_Abrial_Mai_Junh_Julhet_Agost_Setembre_Octòbre_Novembre_Decembre'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM [de] YYYY',
    LLL: 'D MMMM [de] YYYY [a] H:mm',
    LLLL: 'dddd D MMMM [de] YYYY [a] H:mm'
  },
  relativeTime: {
    future: 'en %s',
    past: 'fa %s',
    s: 'unas segondas',
    m: 'una minuta',
    mm: '%d minutas',
    h: 'una ora',
    hh: '%d oras',
    d: 'un jorn',
    dd: '%d jorn',
    M: 'un mes',
    MM: '%d meses',
    y: 'un an',
    yy: '%d ans'
  },
  ordinal: n => `${n}º`
}

dayjs.locale(locale, null, true)

export default locale
