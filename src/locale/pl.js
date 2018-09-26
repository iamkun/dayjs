import dayjs from 'dayjs'

const locale = {
  name: 'pl',
  weekdays: 'Niedziela_Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota'.split('_'),
  months: 'Styczeń_Luty_Marzec_Kwiecień_Maj_Czerwiec_Lipiec_Sierpień_Wrzesień_Październik_Listopad_Grudzień'.split('_'),
  ordinal: n => `${n}.`,
  relativeTime: {
    future: 'za %s',
    past: 'po %s',
    s: 'kilka Sekund',
    m: 'Minuta',
    mm: '%d Minut',
    h: 'Godzina',
    hh: '%d Godzin',
    d: 'Tydzień',
    dd: '%d Tygodni',
    M: 'Miesiąc',
    MM: '%d Miesięcy',
    y: 'Rok',
    yy: '%d Lat'
  }
}

dayjs.locale(locale, null, true)

export default locale
