// Hungarian [hu]
import dayjs from 'dayjs'

const locale = {
  name: 'hu',
  weekdays: 'Vasárnap_Hétfő_Kedd_Szerda_Csütörtök_Péntek_Szombat'.split('_'),
  weekdaysShort: 'Vas_Hét_Kedd_Sze_Csüt_Pén_Szo'.split('_'),
  weekdaysMin: 'V_H_K_Sze_Cs_P_Szo'.split('_'),
  months: 'Január_Február_Március_Április_Május_Június_Július_Augusztus_Szeptember_Október_November_December'.split('_'),
  monthsShort: 'Jan_Feb_Márc_Ápr_Máj_Jún_Júl_Aug_Szept_Okt_Nov_Dec'.split('_'),
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
