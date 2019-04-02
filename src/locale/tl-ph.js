import dayjs from 'dayjs'

const locale = {
  name: 'tl-ph',
  weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
  months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
  monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
  weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

