// Klingon [tlh]
import dayjs from 'dayjs'

const locale = {
  name: 'tlh',
  weekdays: 'LojmItjaj_DaSjaj_Povjaj_GhItlhjaj_Loghjaj_Buqjaj_GhInjaj'.split('_'),
  months: 'Tera’ jar wa’_Tera’ jar cha’_Tera’ jar wej_Tera’ jar loS_Tera’ jar vagh_Tera’ jar jav_Tera’ jar Soch_Tera’ jar chorgh_Tera’ jar Hut_Tera’ jar wa’maH_Tera’ jar wa’maH wa’_Tera’ jar wa’maH cha’'.split('_'),
  weekStart: 1,
  weekdaysShort: 'LojmItjaj_DaSjaj_Povjaj_GhItlhjaj_Loghjaj_Buqjaj_GhInjaj'.split('_'),
  monthsShort: 'Jar wa’_Jar cha’_Jar wej_Jar loS_Jar vagh_Jar jav_Jar Soch_Jar chorgh_Jar Hut_Jar wa’maH_Jar wa’maH wa’_Jar wa’maH cha’'.split('_'),
  weekdaysMin: 'LojmItjaj_DaSjaj_Povjaj_GhItlhjaj_Loghjaj_Buqjaj_GhInjaj'.split('_'),
  ordinal: n => n,
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

