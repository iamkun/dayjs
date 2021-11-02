import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import localeData from '../../src/plugin/localeData'
import preParsePostFormat from '../../src/plugin/preParsePostFormat'
import '../../src/locale/bn'

dayjs.extend(localeData)
dayjs.extend(relativeTime)
dayjs.extend(preParsePostFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format Month with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    const dayjsBN = dayjs()
      .locale('bn')
      .add(i, 'day')
    const momentBN = moment()
      .locale('bn')
      .add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'MMMM'
    const testFormat3 = 'MMM'
    expect(dayjsBN.format(testFormat1)).toEqual(momentBN.format(testFormat1))
    expect(dayjsBN.format(testFormat2)).toEqual(momentBN.format(testFormat2))
    expect(dayjsBN.format(testFormat3)).toEqual(momentBN.format(testFormat3))
  }
})

it('Month short', () => {
  const date = '2021-02-01T05:54:32.005Z'
  const dayjsBN = dayjs(date)
    .locale('bn')
  const momentBN = moment(date)
    .locale('bn')
  const testFormat1 = 'DD MMMM YYYY MMM'
  expect(dayjsBN.format(testFormat1)).toEqual(momentBN.format(testFormat1))
})

it('Preparse with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    dayjs.locale('bn')
    const momentBN = moment()
      .locale('bn')
      .add(i, 'day')
    expect(dayjs(momentBN.format()).format()).toEqual(momentBN.format())
  }
})

it('RelativeTime: Time from X', () => {
  const T = [
    [44.4, 'second'], // a few seconds
    [89.5, 'second'], // a minute
    [130, 'second'], // two minutes
    [43, 'minute'], // 44 minutes
    [1, 'hour'], // 1 hour
    [21, 'hour'], // 21 hours
    [2, 'day'], // 2 days
    [25, 'day'], // 25 days
    [2, 'month'], // 2 months
    [10, 'month'], // 10 months
    [18, 'month'], // 2 years
    [15, 'year'] // 15 years
  ]

  T.forEach((t) => {
    dayjs.locale('bn')
    moment.locale('bn')
    expect(dayjs().from(dayjs().add(t[0], t[1]))).toBe(moment().from(moment().add(t[0], t[1])))
    expect(dayjs().from(dayjs().add(t[0], t[1]), true))
      .toBe(moment().from(moment().add(t[0], t[1]), true))
  })
})
