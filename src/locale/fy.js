import dayjs from 'dayjs'

const locale = {
  name: 'fy',
  weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
  months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
  weekStart: 1,
  weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
  weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

