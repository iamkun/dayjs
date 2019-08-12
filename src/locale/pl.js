import dayjs from 'dayjs'

const monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
const monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');

function plural(n) {
  return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
}

function translate(number, withoutSuffix, key) {
  const result = `${number} `;
  switch (key) {
    case 'ss':
      return result + (plural(number) ? 'sekundy' : 'sekund');
    case 'm':
      return withoutSuffix ? 'minuta' : 'minutę';
    case 'mm':
      return result + (plural(number) ? 'minuty' : 'minut');
    case 'h':
      return withoutSuffix ? 'godzina' : 'godzinę';
    case 'hh':
      return result + (plural(number) ? 'godziny' : 'godzin');
    case 'MM':
      return result + (plural(number) ? 'miesiące' : 'miesięcy');
    case 'yy':
      return result + (plural(number) ? 'lata' : 'lat');
  }
}

const locale = {
  name: 'pl',
  weekdays: 'Niedziela_Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota'.split('_'),
  weekdaysShort: 'Ndz_Pon_Wt_Śr_Czw_Pt_Sob'.split('_'),
  weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
  months: (dayjsInstance, format) => {
    if (/D MMMM/.test(format)) {
      return monthsSubjective[dayjsInstance.month()];
    }

    return monthsNominative[dayjsInstance.month()];
  },
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
