// Central Atlas Tamazight Latin [tzm-latn]
import dayjs from 'dayjs'

const locale = {
  name: 'tzm-latn',
  weekdays: 'Asamas_Aynas_Asinas_Akras_Akwas_Asimwas_Asiḍyas'.split('_'),
  months: 'Innayr_Brˤayrˤ_Marˤsˤ_Ibrir_Mayyw_Ywnyw_Ywlywz_Ɣwšt_Šwtanbir_Ktˤwbrˤ_Nwwanbir_Dwjnbir'.split('_'),
  weekStart: 6,
  weekdaysShort: 'Asamas_Aynas_Asinas_Akras_Akwas_Asimwas_Asiḍyas'.split('_'),
  monthsShort: 'Innayr_Brˤayrˤ_Marˤsˤ_Ibrir_Mayyw_Ywnyw_Ywlywz_Ɣwšt_Šwtanbir_Ktˤwbrˤ_Nwwanbir_Dwjnbir'.split('_'),
  weekdaysMin: 'Asamas_Aynas_Asinas_Akras_Akwas_Asimwas_Asiḍyas'.split('_'),
  ordinal: n => n,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'dadkh s yan %s',
    past: 'yan %s',
    s: 'imik',
    m: 'minuḍ',
    mm: '%d minuḍ',
    h: 'saɛa',
    hh: '%d tassaɛin',
    d: 'ass',
    dd: '%d ossan',
    M: 'ayowr',
    MM: '%d iyyirn',
    y: 'asgas',
    yy: '%d isgasn'
  }
}

dayjs.locale(locale, null, true)

export default locale

