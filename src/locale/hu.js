import dayjs from 'dayjs'

const locale = {
  name: 'hu',
  weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
  weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
  weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
  months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
  monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
  ordinal: n => `${n}.`,
  relativeTime: {
    future: '%s múlva',
    past: '%s',
    s: 'néhány másodperc',
    m: 'egy perce',
    mm: '%d perc',
    h: 'egy órája',
    hh: '%d óra',
    d: 'egy napja',
    dd: '%d nap',
    M: 'egy hónapja',
    MM: '%d hónap',
    y: 'egy éve',
    yy: '%d év'
  }
}

dayjs.locale(locale, null, true)

export default locale
