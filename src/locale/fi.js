// Finnish [fi]
import dayjs from 'dayjs'

function relativeTimeFormatter(number, withoutSuffix, key, isFuture) {
  const past = {
    s: 'muutama sekunti',
    m: 'minuutti',
    mm: '%d minuuttia',
    h: 'tunti',
    hh: '%d tuntia',
    d: 'päivä',
    dd: '%d päivää',
    M: 'kuukausi',
    MM: '%d kuukautta',
    y: 'vuosi',
    yy: '%d vuotta',
    numbers: 'nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän'.split('_')
  }
  const future = {
    s: 'muutaman sekunnin',
    m: 'minuutin',
    mm: '%d minuutin',
    h: 'tunnin',
    hh: '%d tunnin',
    d: 'päivän',
    dd: '%d päivän',
    M: 'kuukauden',
    MM: '%d kuukauden',
    y: 'vuoden',
    yy: '%d vuoden',
    numbers: 'nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän'.split('_')
  }
  const words = (isFuture && !withoutSuffix) ? future : past
  const result = words[key]
  if (number < 10) {
    return result.replace('%d', words.numbers[number])
  }
  return result.replace('%d', number)
}

const locale = {
  name: 'fi', // Finnish
  weekdays: 'Sunnuntai_Maanantai_Tiistai_Keskiviikko_Torstai_Perjantai_Lauantai'.split('_'), // Note weekdays are not capitalized in Finnish
  weekdaysShort: 'Su_Ma_Ti_Ke_To_Pe_La'.split('_'), // There is no short form of weekdays in Finnish except this 2 letter format so it is used for both 'weekdaysShort' and 'weekdaysMin'
  weekdaysMin: 'Su_Ma_Ti_Ke_To_Pe_La'.split('_'),
  months: 'Tammikuu_Helmikuu_Maaliskuu_Huhtikuu_Toukokuu_Kesäkuu_Heinäkuu_Elokuu_Syyskuu_Lokakuu_Marraskuu_Joulukuu'.split('_'), // Note month names are not capitalized in Finnish
  monthsShort: 'Tammi_Helmi_Maalis_Huhti_Touko_Kesä_Heinä_Elo_Syys_Loka_Marras_Joulu'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: '%s päästä',
    past: '%s sitten',
    s: relativeTimeFormatter,
    m: relativeTimeFormatter,
    mm: relativeTimeFormatter,
    h: relativeTimeFormatter,
    hh: relativeTimeFormatter,
    d: relativeTimeFormatter,
    dd: relativeTimeFormatter,
    M: relativeTimeFormatter,
    MM: relativeTimeFormatter,
    y: relativeTimeFormatter,
    yy: relativeTimeFormatter
  },
  formats: {
    LT: 'HH.mm',
    LTS: 'HH.mm.ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM[ta] YYYY',
    LLL: 'D. MMMM[ta] YYYY, [klo] HH.mm',
    LLLL: 'dddd, D. MMMM[ta] YYYY, [klo] HH.mm',
    l: 'D.M.YYYY',
    ll: 'D. MMM YYYY',
    lll: 'D. MMM YYYY, [klo] HH.mm',
    llll: 'ddd, D. MMM YYYY, [klo] HH.mm'
  }
}

dayjs.locale(locale, null, true)

export default locale

