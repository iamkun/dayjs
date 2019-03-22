import dayjs from 'dayjs'

const locale = {
  name: 'nl-be',
  weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
  months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
  weekStart: 1,
  weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
  weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

