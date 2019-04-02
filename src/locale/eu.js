import dayjs from 'dayjs'

const locale = {
  name: 'eu',
  weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
  months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
  weekStart: 1,
  weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
  monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
  weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

