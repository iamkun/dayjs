// Yoruba Nigeria [yo]
import dayjs from 'dayjs'

const locale = {
  name: 'yo',
  weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
  months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
  monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
  weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY h:mm A',
    LLLL: 'dddd, D MMMM YYYY h:mm A'
  },
  relativeTime: {
    future: 'ní %s',
    past: '%s kọjá',
    s: 'ìsẹjú aayá die',
    m: 'ìsẹjú kan',
    mm: 'ìsẹjú %d',
    h: 'wákati kan',
    hh: 'wákati %d',
    d: 'ọjọ́ kan',
    dd: 'ọjọ́ %d',
    M: 'osù kan',
    MM: 'osù %d',
    y: 'ọdún kan',
    yy: 'ọdún %d'
  }
}

dayjs.locale(locale, null, true)

export default locale

