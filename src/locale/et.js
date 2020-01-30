// Estonian [et]
import dayjs from 'dayjs'

function relativeTimeWithTense(number, withoutSuffix, key, isFuture) {
  const pastTense = {
    s: 'mõni sekund',
    m: 'minut',
    mm: '%d minutit',
    h: 'tund',
    hh: '%d tundi',
    d: 'päev',
    dd: '%d päeva',
    M: 'kuu',
    MM: '%d kuud',
    y: 'aasta',
    yy: '%d aastat'
  }

  // in Estonian future tenses don't care about plural
  const futureTense = {
    s: 'mõne sekundi',
    m: 'minuti',
    mm: '%d minuti',
    h: 'tunni',
    hh: '%d tunni',
    d: 'päeva',
    dd: '%d päeva',
    M: 'kuu',
    MM: '%d kuu',
    y: 'aasta',
    yy: '%d aasta'
  }

  return (isFuture ? futureTense : pastTense)[key].replace('%d', number)
}

const locale = {
  name: 'et', // Estonian
  weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'), // Note weekdays are not capitalized in Estonian
  weekdaysShort: 'P_E_T_K_N_R_L'.split('_'), // There is no short form of weekdays in Estonian except this 1 letter format so it is used for both 'weekdaysShort' and 'weekdaysMin'
  weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
  months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'), // Note month names are not capitalized in Estonian
  monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  relativeTime: {
    future: '%s pärast',
    past: '%s tagasi',
    s: relativeTimeWithTense,
    m: relativeTimeWithTense,
    mm: relativeTimeWithTense,
    h: relativeTimeWithTense,
    hh: relativeTimeWithTense,
    d: relativeTimeWithTense,
    dd: relativeTimeWithTense,
    M: relativeTimeWithTense,
    MM: relativeTimeWithTense,
    y: relativeTimeWithTense,
    yy: relativeTimeWithTense
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

