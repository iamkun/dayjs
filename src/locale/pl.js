// Polish [pl]
import dayjs from 'dayjs'

function plural(n) {
  return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1) // eslint-disable-line
}
/* eslint-disable */ 
function translate(number, withoutSuffix, key) {
  const result = `${number} `
  switch (key) {
    case 'm':
      return withoutSuffix ? 'minuta' : 'minutę'
    case 'mm':
      return result + (plural(number) ? 'minuty' : 'minut')
    case 'h':
      return withoutSuffix ? 'godzina' : 'godzinę'
    case 'hh':
      return result + (plural(number) ? 'godziny' : 'godzin')
    case 'MM':
      return result + (plural(number) ? 'miesiące' : 'miesięcy')
    case 'yy':
      return result + (plural(number) ? 'lata' : 'lat')
  }
}
/* eslint-enable */
const locale = {
  name: 'pl',
  weekdays: 'Niedziela_Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota'.split('_'),
  weekdaysShort: 'Ndz_Pon_Wt_Śr_Czw_Pt_Sob'.split('_'),
  weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
  months: 'Styczeń_Luty_Marzec_Kwiecień_Maj_Czerwiec_Lipiec_Sierpień_Wrzesień_Październik_Listopad_Grudzień'.split('_'),
  monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  relativeTime: {
    future: 'za %s',
    past: '%s temu',
    s: 'kilka sekund',
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: '1 dzień',
    dd: '%d dni',
    M: 'miesiąc',
    MM: translate,
    y: 'rok',
    yy: translate
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale
