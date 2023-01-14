// Lithuanian [lt]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

// TODO: in original locale file, locale.months function.
// All commented out code is from the original locale file.
// I left it in place because it seems to use other ways.
// https://github.com/iamkun/dayjs/commit/255dc54d9295de135a9037ce6ca13cae4bfd2cfb

/*
const monthFormat =
  'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split(
    '_'
  )
const monthStandalone =
  'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split(
    '_'
  )
const MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/

const months = (dayjsInstance, format) => {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()]
  }
  return monthStandalone[dayjsInstance.month()]
}
months.s = monthStandalone
months.f = monthFormat
*/

const locale: Locale = {
  name: 'lt',
  weekdays: [
    'sekmadienis',
    'pirmadienis',
    'antradienis',
    'trečiadienis',
    'ketvirtadienis',
    'penktadienis',
    'šeštadienis',
  ],
  weekdaysShort: ['sek', 'pir', 'ant', 'tre', 'ket', 'pen', 'šeš'],
  weekdaysMin: ['s', 'p', 'a', 't', 'k', 'pn', 'š'],
  months: [
    'sausio',
    'vasario',
    'kovo',
    'balandžio',
    'gegužės',
    'birželio',
    'liepos',
    'rugpjūčio',
    'rugsėjo',
    'spalio',
    'lapkričio',
    'gruodžio',
  ],
  monthsShort: [
    'sau',
    'vas',
    'kov',
    'bal',
    'geg',
    'bir',
    'lie',
    'rgp',
    'rgs',
    'spa',
    'lap',
    'grd',
  ],
  ordinal: (n) => `${n}.`,
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
    yy: '%d metus',
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
    llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
  },
}

dayjs.locale(locale, true)

export default locale
