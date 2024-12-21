// Northern Sami [se]
import dayjs from 'dayjs'

const locale = {
  name: 'se',
  weekdays: 'Sotnabeaivi_Vuossárga_Maŋŋebárga_Gaskavahkku_Duorastat_Bearjadat_Lávvardat'.split('_'),
  months: 'Ođđajagemánnu_Guovvamánnu_Njukčamánnu_Cuoŋománnu_Miessemánnu_Geassemánnu_Suoidnemánnu_Borgemánnu_Čakčamánnu_Golggotmánnu_Skábmamánnu_Juovlamánnu'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Sotn_Vuos_Maŋ_Gask_Duor_Bear_Láv'.split('_'),
  monthsShort: 'Ođđj_Guov_Njuk_Cuo_Mies_Geas_Suoi_Borg_Čakč_Golg_Skáb_Juov'.split('_'),
  weekdaysMin: 'S_V_M_G_D_B_L'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'MMMM D. [b.] YYYY',
    LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
    LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
  },
  relativeTime: {
    future: '%s geažes',
    past: 'maŋit %s',
    s: 'moadde sekunddat',
    m: 'okta minuhta',
    mm: '%d minuhtat',
    h: 'okta diimmu',
    hh: '%d diimmut',
    d: 'okta beaivi',
    dd: '%d beaivvit',
    M: 'okta mánnu',
    MM: '%d mánut',
    y: 'okta jahki',
    yy: '%d jagit'
  }
}

dayjs.locale(locale, null, true)

export default locale

