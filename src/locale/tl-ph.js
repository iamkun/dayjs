// Tagalog (Philippines) [tl-ph]
import dayjs from 'dayjs'

const locale = {
  name: 'tl-ph',
  weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
  months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
  monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
  weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'MM/D/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY HH:mm',
    LLLL: 'dddd, MMMM DD, YYYY HH:mm'
  },
  relativeTime: {
    future: 'sa loob ng %s',
    past: '%s ang nakalipas',
    s: 'ilang segundo',
    m: 'isang minuto',
    mm: '%d minuto',
    h: 'isang oras',
    hh: '%d oras',
    d: 'isang araw',
    dd: '%d araw',
    M: 'isang buwan',
    MM: '%d buwan',
    y: 'isang taon',
    yy: '%d taon'
  }
}

dayjs.locale(locale, null, true)

export default locale

