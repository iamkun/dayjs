import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/pl'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format month with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    const dayjsUK = dayjs().locale('pl').add(i, 'day')
    const momentUK = moment().locale('pl').add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'dddd, MMMM D YYYY'
    const testFormat3 = 'MMMM'
    const testFormat4 = 'MMM'
    expect(dayjsUK.format(testFormat1)).toEqual(momentUK.format(testFormat1))
    expect(dayjsUK.format(testFormat2)).toEqual(momentUK.format(testFormat2))
    expect(dayjsUK.format(testFormat3)).toEqual(momentUK.format(testFormat3))
    expect(dayjsUK.format(testFormat4)).toEqual(momentUK.format(testFormat4))
  }
})

it('RelativeTime: Time from X', () => {
  const T = [
    [44.4, 'second'], // a few seconds
    [89.5, 'second'], // a minute
    [2, 'minute'], // 2 minutes
    [5, 'minute'], // 5 minutes
    [43, 'minute'], // 44 minutes
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
    dayjs.locale('pl')
    moment.locale('pl')
    expect(dayjs().from(dayjs().add(t[0], t[1])))
      .toBe(moment().from(moment().add(t[0], t[1])))
    expect(dayjs().from(dayjs().add(t[0], t[1]), true))
      .toBe(moment().from(moment().add(t[0], t[1]), true))
  })
})
