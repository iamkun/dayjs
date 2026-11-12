import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/mr'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

// moment localizes digits to Devanagari numerals through postformat,
// which dayjs does not support, so both outputs are normalized before
// comparing.
const normalizeDigits = s => s.replace(/[०-९]/g, d => String.fromCharCode((d.charCodeAt(0) - 0x0966) + 0x30))

it('RelativeTime: Time from X', () => {
  const T = [
    [0.3, 'second'], // 0 second
    [5, 'second'], // 5 seconds
    [44.4, 'second'], // 44 seconds
    [89.5, 'second'], // a minute
    [2, 'minute'], // 2 minutes
    [3, 'minute'], // 3 minutes
    [11, 'minute'], // 11 minutes
    [43, 'minute'], // 43 minutes
    [1, 'hour'], // an hour
    [2, 'hour'], // 2 hours
    [5, 'hour'], // 5 hours
    [21, 'hour'], // 21 hours
    [1, 'day'], // a day
    [2, 'day'], // 2 days
    [5, 'day'], // 5 days
    [25, 'day'], // 25 days
    [1, 'month'], // a month
    [2, 'month'], // 2 months
    [10, 'month'], // 10 months
    [18, 'month'], // 2 years
    [2, 'year'], // 2 years
    [5, 'year'], // 5 years
    [25, 'year'] // 25 years
  ]

  T.forEach((t) => {
    dayjs.locale('mr')
    moment.locale('mr')
    const dayjsResult = normalizeDigits(dayjs().from(dayjs().add(t[0], t[1])))
    const momentResult = normalizeDigits(moment().from(moment().add(t[0], t[1])))
    expect(dayjsResult).toBe(momentResult)
    expect(normalizeDigits(dayjs().from(dayjs().add(t[0], t[1]), true)))
      .toBe(normalizeDigits(moment().from(moment().add(t[0], t[1]), true)))
    expect(normalizeDigits(dayjs().to(dayjs().add(t[0], t[1]))))
      .toBe(normalizeDigits(moment().to(moment().add(t[0], t[1]))))
    expect(normalizeDigits(dayjs().to(dayjs().add(t[0], t[1]), true)))
      .toBe(normalizeDigits(moment().to(moment().add(t[0], t[1]), true)))
  })
})
