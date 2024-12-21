// Lithuanian [lt]
import dayjs from 'dayjs'

const monthFormat = 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_')
const monthStandalone = 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_')
// eslint-disable-next-line no-useless-escape
const MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/

const months = (dayjsInstance, format) => {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()]
  }
  return monthStandalone[dayjsInstance.month()]
}
months.s = monthStandalone
months.f = monthFormat

const locale = {
  name: 'lt',
  weekdays: 'Sekmadienis_Pirmadienis_Antradienis_Trečiadienis_Ketvirtadienis_Penktadienis_Šeštadienis'.split('_'),
  weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
  weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
  months,
  monthsShort: 'Sau_Vas_Kov_Bal_Geg_Bir_Lie_Rgp_Rgs_Spa_Lap_Grd'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  relativeTime: {
    future: 'už %s',
    past: 'prieš %s',
    s: 'kelias sekundes',
    m: 'minutę',
    mm: '%d minutes',
    h: 'valandą',
    hh: '%d valandas',
    d: 'dieną',
    dd: '%d dienas',
    M: 'mėnesį',
    MM: '%d mėnesius',
    y: 'metus',
    yy: '%d metus'
  },
  format: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'YYYY [m.] MMMM D [d.]',
    LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
    LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
    l: 'YYYY-MM-DD',
    ll: 'YYYY [m.] MMMM D [d.]',
    lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
    llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'YYYY [m.] MMMM D [d.]',
    LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
    LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
    l: 'YYYY-MM-DD',
    ll: 'YYYY [m.] MMMM D [d.]',
    lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
    llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
  }
}

dayjs.locale(locale, null, true)

export default locale
