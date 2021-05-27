import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../../src'
import relativeTime from '../../src/plugin/relativeTime'
import advancedFormat from '../../src/plugin/advancedFormat'
import '../../src/locale/bg'

dayjs.extend(relativeTime)
dayjs.extend(advancedFormat)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Format Month with locale function', () => {
  for (let i = 0; i <= 7; i += 1) {
    const dayjsBG = dayjs().locale('bg').add(i, 'day')
    const momentBG = moment().locale('bg').add(i, 'day')
    const testFormat1 = 'DD MMMM YYYY MMM'
    const testFormat2 = 'MMMM'
    const testFormat3 = 'MMM'
    expect(dayjsBG.format(testFormat1)).toEqual(momentBG.format(testFormat1))
    expect(dayjsBG.format(testFormat2)).toEqual(momentBG.format(testFormat2))
    expect(dayjsBG.format(testFormat3)).toEqual(momentBG.format(testFormat3))
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
    dayjs.locale('bg')
    moment.locale('bg')
    expect(dayjs().from(dayjs().add(t[0], t[1])))
      .toBe(moment().from(moment().add(t[0], t[1])))
    expect(dayjs().from(dayjs().add(t[0], t[1]), true))
      .toBe(moment().from(moment().add(t[0], t[1]), true))
  })
})

it('Ordinal', () => {
  dayjs.locale('bg')
  moment.locale('bg')

  for (let d = 1; d <= 31; d += 1) {
    const day = d < 10 ? `0${d}` : d
    const date = `2021-01-${day}`
    expect(dayjs(date).format('Do')).toBe(moment(date).format('Do'))
  }
})
