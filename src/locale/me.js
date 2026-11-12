// Montenegrin [me]
import dayjs from 'dayjs'

const translator = {
  words: {
    // Different grammatical cases
    m: ['jedan minut', 'jednog minuta'],
    mm: ['minut', 'minuta', 'minuta'],
    h: ['jedan sat', 'jednog sata'],
    hh: ['sat', 'sata', 'sati'],
    dd: ['dan', 'dana', 'dana'],
    MM: ['mjesec', 'mjeseca', 'mjeseci'],
    yy: ['godina', 'godine', 'godina']
  },
  correctGrammaticalCaseNumber(number, wordKey) {
    if (number >= 2 && number <= 4) {
      return wordKey[1]
    }
    return wordKey[2]
  },
  translate(number, withoutSuffix, key) {
    const wordKey = translator.words[key]
    if (key.length === 1) {
      return withoutSuffix ? wordKey[0] : wordKey[1]
    }
    return `${number} ${translator.correctGrammaticalCaseNumber(number, wordKey)}`
  }
}

const locale = {
  name: 'me',
  weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
  months: 'januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar'.split('_'),
  weekStart: 1,
  weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
  monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
  weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
  ordinal: n => n,
  relativeTime: {
    future: 'za %s',
    past: 'prije %s',
    s: 'nekoliko sekundi',
    m: translator.translate,
    mm: translator.translate,
    h: translator.translate,
    hh: translator.translate,
    d: 'dan',
    dd: translator.translate,
    M: 'mjesec',
    MM: translator.translate,
    y: 'godinu',
    yy: translator.translate
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

