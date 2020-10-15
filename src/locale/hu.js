// Hungarian [hu]
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
    s: (_, s, ___, isFuture) => `néhány másodperc${isFuture || s ? '' : 'e'}`,
    m: (_, s, ___, isFuture) => `egy perc${isFuture || s ? '' : 'e'}`,
    mm: (n, s, ___, isFuture) => `${n} perc${isFuture || s ? '' : 'e'}`,
    h: (_, s, ___, isFuture) => `egy ${isFuture || s ? 'óra' : 'órája'}`,
    hh: (n, s, ___, isFuture) => `${n} ${isFuture || s ? 'óra' : 'órája'}`,
    d: (_, s, ___, isFuture) => `egy ${isFuture || s ? 'nap' : 'napja'}`,
    dd: (n, s, ___, isFuture) => `${n} ${isFuture || s ? 'nap' : 'napja'}`,
    M: (_, s, ___, isFuture) => `egy ${isFuture || s ? 'hónap' : 'hónapja'}`,
    MM: (n, s, ___, isFuture) => `${n} ${isFuture || s ? 'hónap' : 'hónapja'}`,
    y: (_, s, ___, isFuture) => `egy ${isFuture || s ? 'év' : 'éve'}`,
    yy: (n, s, ___, isFuture) => `${n} ${isFuture || s ? 'év' : 'éve'}`
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
