import dayjs from 'dayjs'

const locale = {
  name: 'hu',
  weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
  weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
  weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
  months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
  monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  relativeTime: {
    future: '%s múlva',
    past: '%s',
    s: 'néhány másodperc',
    m: 'egy perc',
    mm: '%d perc',
    h: 'egy óra',
    hh: '%d óra',
    d: 'egy nap',
    dd: '%d nap',
    M: 'egy hónap',
    MM: '%d hónap',
    y: 'egy éve',
    yy: '%d év'
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'YYYY.MM.DD.',
    LL: 'YYYY. MMMM D.',
    LLL: 'YYYY. MMMM D. H:mm',
    LLLL: 'YYYY. MMMM D., dddd H:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

