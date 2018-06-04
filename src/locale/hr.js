import dayjs from 'dayjs'

const locale = {
  name: 'hr',
  weekdays: 'Nedjelja_Ponedjeljak_Utorak_Srijeda_Četvrtak_Petak_Subota'.split('_'),
  months: 'Siječanj_Veljača_Ožujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac'.split('_'),
  relativeTime: {
    future: 'za %s',
    past: 'prije %s',
    s: 'sekunda',
    m: 'minuta',
    mm: '%d minuta',
    h: 'sat',
    hh: '%d sati',
    d: 'dan',
    dd: '%d dana',
    M: 'mjesec',
    MM: '%d mjeseci',
    y: 'godina',
    yy: '%d godine'
  },
  ordinal: n => `${n}.`
}

dayjs.locale(locale, null, true)

export default locale
