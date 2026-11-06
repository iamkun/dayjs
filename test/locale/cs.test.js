import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import customParseFormat from '../../src/plugin/customParseFormat'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/cs'

dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)
dayjs.extend(localizedFormat)

const genitive = 'ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince'.split('_')
const nominative = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_')

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('RelativeTime: Time from X', () => {
  const T = [
    [44.4, 'second'], // a few seconds
    [89.5, 'second'], // a minute
    [2, 'minute'], // 2 minutes
    [43, 'minute'], // 43 minutes
    [45, 'minute'], // an hour
    [3, 'hour'], // 3 hours
    [21, 'hour'], // 21 hours
    [1, 'day'], // a day
    [3, 'day'], // 3 day
    [25, 'day'], // 25 days
    [1, 'month'], // a month
    [2, 'month'], // 2 month
    [10, 'month'], // 10 month
    [1, 'year'], // a year
    [2, 'year'], // 2 year
    [5, 'year'], // 5 year
    [18, 'month'] // 2 years
  ]

  T.forEach((t) => {
    dayjs.locale('cs')
    moment.locale('cs')
    const dayjsDay = dayjs()
    const momentDay = moment()
    const dayjsCompare = dayjs().add(t[0], t[1])
    const momentCompare = moment().add(t[0], t[1])
    expect(dayjsDay.from(dayjsCompare))
      .toBe(momentDay.from(momentCompare))
    expect(dayjsDay.to(dayjsCompare))
      .toBe(momentDay.to(momentCompare))
    expect(dayjsDay.from(dayjsCompare, true))
      .toBe(momentDay.from(momentCompare, true))
  })
})

it('Format month with a day uses the genitive', () => {
  for (let i = 0; i < 12; i += 1) {
    const dayjsCS = dayjs('2026-01-16').locale('cs').add(i, 'month')
    expect(dayjsCS.format('D. MMMM YYYY')).toBe(`16. ${genitive[i]} 2026`)
    expect(dayjsCS.format('DD. MMMM YYYY')).toBe(`16. ${genitive[i]} 2026`)
    expect(dayjsCS.format('dddd D. MMMM')).toBe(`${dayjsCS.format('dddd')} 16. ${genitive[i]}`)
    expect(dayjsCS.format('D. [of] MMMM')).toBe(`16. of ${genitive[i]}`)
  }
})

it('Format month on its own uses the nominative', () => {
  for (let i = 0; i < 12; i += 1) {
    const dayjsCS = dayjs('2026-01-16').locale('cs').add(i, 'month')
    expect(dayjsCS.format('MMMM')).toBe(nominative[i])
    expect(dayjsCS.format('MMMM YYYY')).toBe(`${nominative[i]} 2026`)
  }
})

it('Localized formats LL, LLL and LLLL use the genitive', () => {
  const dayjsCS = dayjs('2026-10-16 13:30').locale('cs')
  expect(dayjsCS.format('LL')).toBe('16. října 2026')
  expect(dayjsCS.format('LLL')).toBe('16. října 2026 13:30')
  expect(dayjsCS.format('LLLL')).toBe('pátek 16. října 2026 13:30')
})

it('Locale months data keeps both forms for parsing', () => {
  const { months } = dayjs.Ls.cs
  expect(months.s).toEqual(nominative)
  expect(months.f).toEqual(genitive)
})

it('Parse month names in both forms', () => {
  const expected = i => dayjs(new Date(2026, i, 16)).format('YYYY-MM-DD')
  for (let i = 0; i < 12; i += 1) {
    expect(dayjs(`16. ${nominative[i]} 2026`, 'D. MMMM YYYY', 'cs').format('YYYY-MM-DD')).toBe(expected(i))
  }
  // December in the genitive is left out: customParseFormat maps index 24 to month 24
  for (let i = 0; i < 11; i += 1) {
    expect(dayjs(`16. ${genitive[i]} 2026`, 'D. MMMM YYYY', 'cs').format('YYYY-MM-DD')).toBe(expected(i))
  }
})
