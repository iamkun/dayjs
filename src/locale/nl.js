import dayjs from 'dayjs'

const locale = {
  name: 'nl',
  weekdays: 'Zondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrijdag_Zaterdag'.split('_'),
  months: 'Januari_Februari_Maart_April_Mei_Juni_Juli_Augustus_September_Oktober_November_December'.split('_'),
  ordinal: n => `${n}.`
}

dayjs.locale(locale, null, true)

export default locale
