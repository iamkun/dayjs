// Greek [el]
// Generated: Sat Jan 14 2023

import { dayjs } from '../dayjs'
import type { Locale } from '.'

const locale: Locale = {
  name: 'el',
  weekdays: [
    'Κυριακή',
    'Δευτέρα',
    'Τρίτη',
    'Τετάρτη',
    'Πέμπτη',
    'Παρασκευή',
    'Σάββατο',
  ],
  weekdaysShort: ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'],
  weekdaysMin: ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα'],
  months: [
    'Ιανουάριος',
    'Φεβρουάριος',
    'Μάρτιος',
    'Απρίλιος',
    'Μάιος',
    'Ιούνιος',
    'Ιούλιος',
    'Αύγουστος',
    'Σεπτέμβριος',
    'Οκτώβριος',
    'Νοέμβριος',
    'Δεκέμβριος',
  ],
  monthsShort: [
    'Ιαν',
    'Φεβ',
    'Μαρ',
    'Απρ',
    'Μαι',
    'Ιουν',
    'Ιουλ',
    'Αυγ',
    'Σεπτ',
    'Οκτ',
    'Νοε',
    'Δεκ',
  ],
  weekStart: 1,
  relativeTime: {
    future: 'σε %s',
    past: 'πριν %s',
    s: 'μερικά δευτερόλεπτα',
    m: 'ένα λεπτό',
    mm: '%d λεπτά',
    h: 'μία ώρα',
    hh: '%d ώρες',
    d: 'μία μέρα',
    dd: '%d μέρες',
    M: 'ένα μήνα',
    MM: '%d μήνες',
    y: 'ένα χρόνο',
    yy: '%d χρόνια',
  },
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY h:mm A',
    LLLL: 'dddd, D MMMM YYYY h:mm A',
  },
}

dayjs.locale(locale, true)

export default locale
