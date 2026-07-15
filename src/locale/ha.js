// Hausa [ha]
import dayjs from 'dayjs'

const locale = {
  name: 'ha',
  weekdays: 'Lahadi_Litinin_Talata_Laraba_Alhamis_Juma\'a_Asabar'.split('_'),
  months: 'Janairu_Fabrairu_Maris_Afirilu_Mayu_Yuni_Yuli_Agusta_Satumba_Oktoba_Nuwamba_Disamba'.split('_'),
  weekdaysShort: 'Lah_Lit_Tal_Lar_Alh_Jum_Asa'.split('_'),
  monthsShort: 'Jan_Fab_Mar_Afi_May_Yun_Yul_Agu_Sat_Okt_Nuw_Dis'.split('_'),
  weekdaysMin: 'Lh_Li_Ta_Lr_Al_Ju_As'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, HH:mm',
    LLLL: 'dddd, D MMMM YYYY, HH:mm'
  },
  relativeTime: {
    future: 'a cikin %s',
    past: 'kimanin %s da suka wuce',
    s: 'yan dakiku',
    m: 'minti daya',
    mm: 'mintuna %d',
    h: 'sa\'a daya',
    hh: 'sa\'o\'i %d',
    d: 'rana daya',
    dd: 'kwanaki %d',
    M: 'wata daya',
    MM: 'watanni %d',
    y: 'shekara daya',
    yy: 'shekaru %d'
  }
}

dayjs.locale(locale, null, true)

export default locale