import dayjs from 'dayjs'

const locale = {
  name: 'et', // Estonian
  weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'), // Note weekdays are not capitalized in Estonian
  weekdaysShort: 'P_E_T_K_N_R_L'.split('_'), // There is no short form of weekdays in Estonian except this 1 letter format so it is used for both 'weekdaysShort' and 'weekdaysMin'
  weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
  months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'), // Note month names are not capitalized in Estonian
  monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  /*
   * This relativeTime is currently configured for having proper past
   * tense forms since Estonian needs a separate version for future tense
   * and I think past tense is a more common use case for this kind of library.
   *
   * Doing this properly requires this issue to be fixed:
   * https://github.com/iamkun/dayjs/issues/302
   */
  relativeTime: {
    future: '%s pärast',
    past: '%s tagasi',
    s: 'mõni sekund', // for past tense
    m: 'minut', // for past tense
    mm: '%d minutit', // for past tense
    h: 'tund', // for past tense
    hh: '%d tundi', // for past tense
    d: 'päev', // for past tense
    dd: '%d päeva', // for past tense
    M: 'kuu', // for past tense
    MM: '%d kuud', // for past tense
    y: 'aasta', // for past tense
    yy: '%d aastat' // for past tense
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

