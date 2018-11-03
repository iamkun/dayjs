import dayjs from 'dayjs'

const locale = {
  name: 'de',
  weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  monthsShort: 'Jan_Feb_März_Apr_Mai_Juni_Juli_Aug_Sept_Okt_Nov_Dez'.split('_'),
  ordinal: n => `${n}.`,
  relativeTime: {
    future: 'in %s',
    past: 'vor %s',
    s: 'wenigen Sekunden',
    m: 'einer Minute',
    mm: '%d Minuten',
    h: 'einer Stunde',
    hh: '%d Stunden',
    d: 'einem Tag',
    dd: '%d Tagen',
    M: 'einem Monat',
    MM: '%d Monaten',
    y: 'einem Jahr',
    yy: '%d Jahren'
  }
}

dayjs.locale(locale, null, true)

export default locale
