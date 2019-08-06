import dayjs from 'dayjs'

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
    past: 'po %s',
    s: 'kilka sekund',
    m: 'minuta',
    mm: '%d minut',
    h: 'godzina',
    hh: '%d godzin',
    d: 'tydzień',
    dd: '%d tygodni',
    M: 'miesiąc',
    MM: '%d miesięcy',
    y: 'rok',
    yy: '%d lat'
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
