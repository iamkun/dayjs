// Malagasy 🇲🇬 [mg]
import dayjs from 'dayjs'

const locale = {
  name: 'mg',
  weekdays: 'alahady_alatsinainy_talata_alarobia_alakamisy_zoma_asabotsy'.split('_'),
  weekdaysShort: 'alh._lts._tlt._lrb._lkm._zom._sab.'.split('_'),
  weekdaysMin: 'alh_lts_tlt_lrb_lkm_zom_sab'.split('_'),
  months: 'janoary_febroary_martsa_aprily_may_jona_jolay_aogositra_septambra_octobra_novambra_desambra'.split('_'),
  monthsShort: 'jan._feb._mar_apr._mai_jon_jol._aog_sep._oct._nov._des.'.split('_'),
  weekStart: 1,
  yearStart: 4,
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'afaka %s',
    past: '%s lasa',
    s: 'segondra vitsy',
    m: 'iray minitra',
    mm: '%d minitra',
    h: 'ora iray',
    hh: '%d ora',
    d: 'iray andro',
    dd: '%d andro',
    M: 'iray volana',
    MM: '%d volana',
    y: 'iray taona',
    yy: '%d taona'
  },
  calendar: {
    sameDay: "[Anio amin'ny] HH:mm",
    nextDay: "[Rahampitso amin'ny] HH:mm",
    nextWeek: "dddd [amin'ny] HH:mm",
    lastDay: "[Omaly tamin'ny] HH:mm",
    lastWeek: "dddd [tamin'ny] HH:mm",
    sameElse: 'DD/MM/YYYY'
  }
}

dayjs.locale(locale, null, true)

export default locale
