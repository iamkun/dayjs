import moment from 'moment'
import dayjs from '../../src'
import customParseFormat from '../../src/plugin/customParseFormat'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/el'

dayjs.extend(customParseFormat)
dayjs.extend(localizedFormat)

const genitive = 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_')
const nominative = 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_')

it('Format month with a day uses the genitive, like Moment', () => {
  for (let i = 0; i < 12; i += 1) {
    const dayjsEL = dayjs('2024-01-11').locale('el').add(i, 'month')
    const momentEL = moment('2024-01-11').locale('el').add(i, 'month')
    const testFormat1 = 'D MMMM YYYY'
    const testFormat2 = 'DD MMMM YYYY'
    const testFormat3 = 'dddd, D MMMM YYYY'
    const testFormat4 = 'D [του] MMMM'
    expect(dayjsEL.format(testFormat1)).toEqual(momentEL.format(testFormat1))
    expect(dayjsEL.format(testFormat2)).toEqual(momentEL.format(testFormat2))
    expect(dayjsEL.format(testFormat3)).toEqual(momentEL.format(testFormat3))
    expect(dayjsEL.format(testFormat4)).toEqual(momentEL.format(testFormat4))
    expect(dayjsEL.format(testFormat1)).toBe(`11 ${genitive[i]} 2024`)
  }
})

it('Format month on its own uses the nominative, like Moment', () => {
  for (let i = 0; i < 12; i += 1) {
    const dayjsEL = dayjs('2024-01-11').locale('el').add(i, 'month')
    const momentEL = moment('2024-01-11').locale('el').add(i, 'month')
    const testFormat1 = 'MMMM'
    const testFormat2 = 'MMMM YYYY'
    expect(dayjsEL.format(testFormat1)).toEqual(momentEL.format(testFormat1))
    expect(dayjsEL.format(testFormat2)).toEqual(momentEL.format(testFormat2))
    expect(dayjsEL.format(testFormat1)).toBe(nominative[i])
  }
})

it('Localized formats LL, LLL and LLLL use the genitive', () => {
  const dayjsEL = dayjs('2024-03-11 13:30').locale('el')
  const momentEL = moment('2024-03-11 13:30').locale('el')
  expect(dayjsEL.format('LL')).toBe('11 Μαρτίου 2024')
  expect(dayjsEL.format('LL')).toBe(momentEL.format('LL'))
  expect(dayjsEL.format('LLL')).toContain('11 Μαρτίου 2024')
  expect(dayjsEL.format('LLLL')).toContain('Δευτέρα, 11 Μαρτίου 2024')
  expect(dayjsEL.format('LLL')).not.toContain('Μάρτιος')
  expect(dayjsEL.format('LLLL')).not.toContain('Μάρτιος')
})

it('Locale months data keeps both forms for parsing', () => {
  const { months } = dayjs.Ls.el
  expect(months.s).toEqual(nominative)
  expect(months.f).toEqual(genitive)
})

it('Parse month names in both forms', () => {
  const expected = i => dayjs(new Date(2024, i, 11)).format('YYYY-MM-DD')
  for (let i = 0; i < 12; i += 1) {
    expect(dayjs(`11 ${nominative[i]} 2024`, 'D MMMM YYYY', 'el').format('YYYY-MM-DD')).toBe(expected(i))
  }
  // December in the genitive is left out: customParseFormat maps index 24 to month 24
  for (let i = 0; i < 11; i += 1) {
    expect(dayjs(`11 ${genitive[i]} 2024`, 'D MMMM YYYY', 'el').format('YYYY-MM-DD')).toBe(expected(i))
  }
})
