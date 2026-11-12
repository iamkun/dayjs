import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/ka'

dayjs.extend(relativeTime)

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
    [130, 'second'], // two minutes
    [43, 'minute'], // 44 minutes
    [1, 'hour'], // 1 hour
    [21, 'hour'], // 21 hours
    [1, 'day'], // 1 day
    [2, 'day'], // 2 days
    [25, 'day'], // 25 days
    [1, 'month'], // 1 month
    [2, 'month'], // 2 months
    [10, 'month'], // 10 months
    [1, 'year'], // 1 year
    [18, 'month'], // 2 years
    [15, 'year'] // 15 years
  ]

  T.forEach((t) => {
    dayjs.locale('ka')
    moment.locale('ka')
    // past
    expect(dayjs().from(dayjs().add(t[0], t[1])))
      .toBe(moment().from(moment().add(t[0], t[1])))
    // future
    expect(dayjs().from(dayjs().subtract(t[0], t[1])))
      .toBe(moment().from(moment().subtract(t[0], t[1])))
    // without suffix
    expect(dayjs().from(dayjs().add(t[0], t[1]), true))
      .toBe(moment().from(moment().add(t[0], t[1]), true))
  })
})

it('RelativeTime: uses genitive case before "ago"', () => {
  dayjs.locale('ka')
  expect(dayjs().subtract(3, 'minute').fromNow()).toBe('3 წუთის წინ')
  expect(dayjs().add(3, 'minute').fromNow()).toBe('3 წუთში')
  expect(dayjs().subtract(1, 'day').fromNow()).toBe('დღის წინ')
  expect(dayjs().subtract(2, 'year').fromNow()).toBe('2 წლის წინ')
})
