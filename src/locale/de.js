import dayjs from 'dayjs'

const locale = {
  name: 'de',
  weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  ordinal: n => `${n}.`,
  relativeTime: {
    future: 'in %s',
    past: 'vor %s',
    s: 'wenige Sekunden',
    m: 'eine Minute',
    mm: '%d Minuten',
    h: 'eine Stunde',
    hh: '%d Stunden',
    d: 'einen Tag',
    dd: '%d Tage',
    M: 'ein Monat',
    MM: '%d Monate',
    y: 'ein Jahr',
    yy: '%d Jahre'
  }
}

dayjs.locale(locale, null, true)

export default locale
