import dayjs from 'dayjs'

const locale = {
  name: 'ms-my',
  weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
  months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
  monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
  weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

