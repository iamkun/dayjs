// Norwegian Bokmål [nb]
import dayjs from 'dayjs'

const locale = {
  name: 'nb',
  weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
  weekdaysShort: 'Sø._Ma._Ti._On._To._Fr._Lø.'.split('_'),
  weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
  months: 'Januar_Februar_Mars_April_Mai_Juni_Juli_August_September_Oktober_November_Desember'.split('_'),
  monthsShort: 'Jan._Feb._Mars_April_Mai_Juni_Juli_Aug._Sep._Okt._Nov._Des.'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY [kl.] HH:mm',
    LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
  },
  relativeTime: {
    future: 'om %s',
    past: '%s siden',
    s: 'noen sekunder',
    m: 'ett minutt',
    mm: '%d minutter',
    h: 'en time',
    hh: '%d timer',
    d: 'en dag',
    dd: '%d dager',
    M: 'en måned',
    MM: '%d måneder',
    y: 'ett år',
    yy: '%d år'
  }
}

dayjs.locale(locale, null, true)

export default locale
