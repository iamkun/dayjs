import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/ru'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format Month with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    const dayjsRU = dayjs().locale('ru').add(i, 'day')
    const momentRU = moment().locale('ru').add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'MMMM'
    const testFormat3 = 'MMM'
    expect(dayjsRU.format(testFormat1)).toEqual(momentRU.format(testFormat1))
    expect(dayjsRU.format(testFormat2)).toEqual(momentRU.format(testFormat2))
    expect(dayjsRU.format(testFormat3)).toEqual(momentRU.format(testFormat3))
  }
})

it('RelativeTime: Time from X', () => {
  const T = [
    [44.4, 'second'], // a few seconds
    [89.5, 'second'], // a minute
    [43, 'minute'], // 44 minutes
    [21, 'hour'], // 21 hours
    [25, 'day'], // 25 days
    [10, 'month'], // 2 month
    [18, 'month'] // 2 years
  ]

  T.forEach((t) => {
    dayjs.locale('ru')
    moment.locale('ru')
    expect(dayjs().from(dayjs().add(t[0], t[1])))
      .toBe(moment().from(moment().add(t[0], t[1])))
    expect(dayjs().from(dayjs().add(t[0], t[1]), true))
      .toBe(moment().from(moment().add(t[0], t[1]), true))
  })
})
