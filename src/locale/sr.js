import dayjs from 'dayjs'

const locale = {
  name: 'sr',
  weekdays: 'Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota'.split('_'),
  months: 'Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar'.split('_'),
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
  ordinal: n => `${n}.`
}

dayjs.locale(locale, null, true)

export default locale
