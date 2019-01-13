import dayjs from 'dayjs'

const locale = {
  name: 'fi', // Finnish
  weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'), // Note weekdays are not capitalized in Finnish
  weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'), // There is no short form of weekdays in Finnish except this 2 letter format so it is used for both 'weekdaysShort' and 'weekdaysMin'
  weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
  months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'), // Note month names are not capitalized in Finnish
  monthsShort: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'), // There is no short form of months in Finnish so just use the regular long form always
  ordinal: n => `${n}.`,
  /*
   * This relativeTime is currently configured for having proper past
   * tense forms since Finnish needs a separate version for future tense
   * and I think past tense is a more common use case for this kind of
   * library.
   *
   * Doing this properly requires this issue to be fixed:
   * https://github.com/iamkun/dayjs/issues/302
   */
  relativeTime: {
    future: '%s kuluttua',
    past: '%s sitten',
    s: 'muutama sekunti', // for past tense
    m: 'minuutti', // for past tense
    mm: '%d minuuttia', // for past tense
    h: 'tunti', // for past tense
    hh: '%d tuntia', // for past tense
    d: 'päivä', // for past tense
    dd: '%d päivää', // for past tense
    M: 'kuukausi', // for past tense
    MM: '%d kuukautta', // for past tense
    y: 'vuosi', // for past tense
    yy: '%d vuotta' // for past tense
  }
}

dayjs.locale(locale, null, true)

export default locale
