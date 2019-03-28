import dayjs from 'dayjs'

const locale = {
  name: 'af',
  weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
  months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
  monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
  weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

