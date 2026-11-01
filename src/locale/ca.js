// Catalan [ca]
import dayjs from 'dayjs'

const locale = {
  name: 'ca',
  weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
  weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
  weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
  months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
  monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY [a les] H:mm',
    LLLL: 'dddd D [de] MMMM [de] YYYY [a les] H:mm',
    ll: 'D MMM YYYY',
    lll: 'D MMM YYYY, H:mm',
    llll: 'ddd D MMM YYYY, H:mm'
  },
  relativeTime: {
    future: 'd\'aquí %s',
    past: 'fa %s',
    s: 'uns segons',
    m: 'un minut',
    mm: '%d minuts',
    h: 'una hora',
    hh: '%d hores',
    d: 'un dia',
    dd: '%d dies',
    M: 'un mes',
    MM: '%d mesos',
    y: 'un any',
    yy: '%d anys'
  },
  ordinal: (n) => {
    let ord

    if (n === 1 || n === 3) ord = 'r'
    else if (n === 2) ord = 'n'
    else if (n === 4) ord = 't'
    else ord = 'è'

    return `${n}${ord}`
  }
}

dayjs.locale(locale, null, true)

export default locale
