import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/ru'
import locale from '../../src/locale/ar-ly'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Meridiem', () => {
  dayjs.locale(locale)
  expect(dayjs('2020-01-01 03:00:00').locale('ar-ly').format('A')).toEqual('ص')
  expect(dayjs('2020-01-01 11:00:00').locale('ar-ly').format('A')).toEqual('ص')
  expect(dayjs('2020-01-01 16:00:00').locale('ar-ly').format('A')).toEqual('م')
  expect(dayjs('2020-01-01 20:00:00').locale('ar-ly').format('A')).toEqual('م')
})

it('RelativeTime: Time from X', () => {
  const T = [
    [1, 'second'], // 1 second
    [3, 'second'], // 3 seconds
    [11, 'second'], // 11 seconds
    [44.4, 'second'], // 44 seconds
    [89.5, 'second'], // a minute
    [2, 'minute'], // 2 minutes (dual)
    [3, 'minute'], // 3 minutes
    [11, 'minute'], // 11 minutes
    [43, 'minute'], // 43 minutes
    [1, 'hour'], // an hour
    [2, 'hour'], // 2 hours (dual)
    [21, 'hour'], // 21 hours
    [1, 'day'], // a day
    [2, 'day'], // 2 days (dual)
    [25, 'day'], // 25 days
    [1, 'month'], // a month
    [2, 'month'], // 2 months (dual)
    [10, 'month'], // 10 months
    [2, 'year'], // 2 years (dual)
    [3, 'year'], // 3 years
    [11, 'year'], // 11 years
    [103, 'year'], // 103 years
    [101, 'year'], // 101 years
    [111, 'year'] // 111 years
  ]

  T.forEach((t) => {
    dayjs.locale('ar-ly')
    moment.locale('ar-ly')
    expect(dayjs().from(dayjs().add(t[0], t[1])))
      .toBe(moment().from(moment().add(t[0], t[1])))
    expect(dayjs().from(dayjs().add(t[0], t[1]), true))
      .toBe(moment().from(moment().add(t[0], t[1]), true))
    expect(dayjs().to(dayjs().add(t[0], t[1])))
      .toBe(moment().to(moment().add(t[0], t[1])))
    expect(dayjs().to(dayjs().add(t[0], t[1]), true))
      .toBe(moment().to(moment().add(t[0], t[1]), true))
  })
})

it('RelativeTime: 0 second', () => {
  dayjs.locale('ar-ly')
  expect(dayjs().from(dayjs().add(200, 'millisecond')))
    .toBe('منذ أقل من ثانية')
  expect(dayjs().from(dayjs().add(200, 'millisecond'), true))
    .toBe('أقل من ثانية')
})
