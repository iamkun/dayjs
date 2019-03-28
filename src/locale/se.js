import dayjs from 'dayjs'

const locale = {
  name: 'se',
  weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
  months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
  weekStart: 1,
  weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
  monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
  weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
  ordinal: n => n
}

dayjs.locale(locale, null, true)

export default locale

