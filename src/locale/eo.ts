// Esperanto [eo]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'eo',
  weekdays: [
    'dimanĉo',
    'lundo',
    'mardo',
    'merkredo',
    'ĵaŭdo',
    'vendredo',
    'sabato',
  ],
  months: [
    'januaro',
    'februaro',
    'marto',
    'aprilo',
    'majo',
    'junio',
    'julio',
    'aŭgusto',
    'septembro',
    'oktobro',
    'novembro',
    'decembro',
  ],
  weekStart: 1,
  weekdaysShort: ['dim', 'lun', 'mard', 'merk', 'ĵaŭ', 'ven', 'sab'],
  monthsShort: [
    'jan',
    'feb',
    'mar',
    'apr',
    'maj',
    'jun',
    'jul',
    'aŭg',
    'sep',
    'okt',
    'nov',
    'dec',
  ],
  weekdaysMin: ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa'],
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'D[-a de] MMMM, YYYY',
    LLL: 'D[-a de] MMMM, YYYY HH:mm',
    LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm',
  },
  relativeTime: {
    future: 'post %s',
    past: 'antaŭ %s',
    s: 'sekundoj',
    m: 'minuto',
    mm: '%d minutoj',
    h: 'horo',
    hh: '%d horoj',
    d: 'tago',
    dd: '%d tagoj',
    M: 'monato',
    MM: '%d monatoj',
    y: 'jaro',
    yy: '%d jaroj',
  },
}

dayjs.locale(locale, true)

export default locale
