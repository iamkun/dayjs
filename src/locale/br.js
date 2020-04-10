// Breton [br]
import dayjs from 'dayjs'

const locale = {
  name: 'br',
  weekdays: 'Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn'.split('_'),
  months: 'Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
  monthsShort: 'Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
  weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'h[e]mm A',
    LTS: 'h[e]mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D [a viz] MMMM YYYY',
    LLL: 'D [a viz] MMMM YYYY h[e]mm A',
    LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A'
  },
  meridiem: hour => (hour < 12 ? 'a.m.' : 'g.m.') // a-raok merenn | goude merenn
}

dayjs.locale(locale, null, true)

export default locale
