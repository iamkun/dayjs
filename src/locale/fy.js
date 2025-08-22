// Frisian [fy]
import dayjs from 'dayjs'

const locale = {
  name: 'fy',
  weekdays: 'Snein_Moandei_Tiisdei_Woansdei_Tongersdei_Freed_Sneon'.split('_'),
  months: 'Jannewaris_Febrewaris_Maart_April_Maaie_Juny_July_Augustus_Septimber_Oktober_Novimber_Desimber'.split('_'),
  monthsShort: 'Jan._Feb._Mrt._Apr._Mai_Jun._Jul._Aug._Sep._Okt._Nov._Des.'.split('_'),
  weekStart: 1,
  weekdaysShort: 'Si._Mo._Ti._Wo._To._Fr._So.'.split('_'),
  weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD-MM-YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'oer %s',
    past: '%s lyn',
    s: 'in pear sekonden',
    m: 'ien minút',
    mm: '%d minuten',
    h: 'ien oere',
    hh: '%d oeren',
    d: 'ien dei',
    dd: '%d dagen',
    M: 'ien moanne',
    MM: '%d moannen',
    y: 'ien jier',
    yy: '%d jierren'
  }
}

dayjs.locale(locale, null, true)

export default locale
