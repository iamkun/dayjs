import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/cs'

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

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

it('Format: month in a date uses the genitive case', () => {
  dayjs.locale('cs')
  const d = dayjs('2026-10-16')

  expect(d.format('LL')).toBe('16. října 2026')
  expect(d.format('LLL')).toBe('16. října 2026 0:00')
  expect(d.format('LLLL')).toBe('pátek 16. října 2026 0:00')
  expect(d.format('D. MMMM YYYY')).toBe('16. října 2026')
})

it('Format: a standalone month stays in the nominative case', () => {
  dayjs.locale('cs')
  const d = dayjs('2026-10-16')

  expect(d.format('MMMM')).toBe('říjen')
  expect(d.format('MMMM YYYY')).toBe('říjen 2026')
})
