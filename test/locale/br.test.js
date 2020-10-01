import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import '../../src/locale/br'

dayjs.extend(relativeTime)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format Month with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    const dayjsBR = dayjs().locale('br').add(i, 'day')
    const momentBR = moment().locale('br').add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'MMMM'
    const testFormat3 = 'MMM'
    expect(dayjsBR.format(testFormat1)).toEqual(momentBR.format(testFormat1))
    expect(dayjsBR.format(testFormat2)).toEqual(momentBR.format(testFormat2))
    expect(dayjsBR.format(testFormat3)).toEqual(momentBR.format(testFormat3))
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
    dayjs.locale('br')
    moment.locale('br')
    expect(dayjs().from(dayjs().add(t[0], t[1])))
      .toBe(moment().from(moment().add(t[0], t[1])))
    expect(dayjs().from(dayjs().add(t[0], t[1]), true))
      .toBe(moment().from(moment().add(t[0], t[1]), true))
  })
})

it('hour', () => {
  const from = '2020-03-18 19:15:00'
  const to = '2020-03-18 20:15:00'
  const result = dayjs(from).locale('br').to(to)

  expect(result).toEqual(moment(from).locale('br').to(to))
  const result2 = dayjs(to).locale('br').to(from, true)
  expect(result2).toEqual('a-benn un eur')
})