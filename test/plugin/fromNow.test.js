import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import fromNow from '../../src/plugin/fromNow'

dayjs.extend(fromNow)

beforeEach(() => {
  MockDate.set(new Date('2018-04-04T16:00:00.000Z'))
})

afterEach(() => {
  MockDate.reset()
})

it('Time from X', () => {
  const T = [
    [0, 'second'], // a few seconds
    [44, 'second'], // a few seconds
    [45, 'second'], // a minute
    [89, 'second'], // a minute
    [90, 'second'], // 2 minutes
    [44, 'minute'], // 44 minutes
    [45, 'minute'], // an hour
    [89, 'minute'], // an hour
    [90, 'minute'], // 2 hours
    [21, 'hour'], // 21 hours
    [22, 'hour'], // a day
    [35, 'hour'], // a day
    [36, 'hour'], // 2 days
    [25, 'day'], // 25 days
    [26, 'day'], // a month
    [45, 'day'], // a month
    [47, 'day'], // 2 month
    [10, 'month'], // 2 month
    [11, 'month'], // a year
    [17, 'month'], // a year
    [18, 'month'] // 2 years
  ]

  T.forEach((t) => {
    expect(dayjs().from(dayjs().add(t[0], t[1]))).toBe(moment().from(moment().add(t[0], t[1])))
  })
  // withoutSuffix
  expect(dayjs().from(dayjs().add(3, 'year'), true)).toBe(moment().from(moment().add(3, 'year'), true))
  // past date
  expect(dayjs().from(dayjs().subtract(3, 'year'))).toBe(moment().from(moment().subtract(3, 'year')))
})

it('Time from now', () => {
  expect(dayjs().fromNow()).toBe(moment().fromNow())
  expect(dayjs().fromNow(true)).toBe(moment().fromNow(true))
})


it('Time to now', () => {
  expect(dayjs().toNow()).toBe(moment().toNow())
  expect(dayjs().toNow(true)).toBe(moment().toNow(true))
})

it('Time to X', () => {
  // withoutSuffix
  expect(dayjs().to(dayjs().add(3, 'year'), true)).toBe(moment().to(moment().add(3, 'year'), true))
  // past date
  expect(dayjs().to(dayjs().subtract(3, 'year'))).toBe(moment().to(moment().subtract(3, 'year')))
})
