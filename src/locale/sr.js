import dayjs from 'dayjs'

const locale = {
  name: 'sr',
  weekdays: 'Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota'.split('_'),
  weekdaysShort: 'Ned._Pon._Uto._Sre._Čet._Pet._Sub.'.split('_'),
  weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
  months: 'Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar'.split('_'),
  monthsShort: 'Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.'.split('_'),
  weekStart: 1,
  relativeTime: {
    future: 'za %s',
    past: 'pre %s',
    s: 'sekunda',
    m: 'minut',
    mm: '%d minuta',
    h: 'sat',
    hh: '%d sati',
    d: 'dan',
    dd: '%d dana',
    M: 'mesec',
    MM: '%d meseci',
    y: 'godina',
    yy: '%d godine'
  },
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd, D. MMMM YYYY H:mm'
  }
}

dayjs.locale(locale, null, true)

export default locale
