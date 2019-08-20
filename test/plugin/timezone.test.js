import MockDate from 'mockdate'
import moment from 'moment-timezone'
import dayjs from '../../src'
import timezone from '../../src/plugin/timezome'

dayjs.extend(timezone)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

describe('Parse date string with zone', () => {
  const dateStr = '2019-08-19T16:15:00+08:00'
  const LATZString = 'America/Los_Angeles'
  const TokyoTZString = 'Asia/Tokyo'
  const formatToken = 'YYYY-MM-DD HH:mm:ss'
  it('dayjs().tz', () => {
    const d1 = dayjs(dateStr).tz(LATZString).format(formatToken)
    const d2 = dayjs(dateStr).tz(TokyoTZString).format(formatToken)
    expect(d1).toEqual('2019-08-19 01:15:00')
    expect(d1).toEqual(moment(dateStr).tz(LATZString).format(formatToken))
    expect(d2).toEqual('2019-08-19 17:15:00')
    expect(d2).toEqual(moment(dateStr).tz(TokyoTZString).format(formatToken))
  })

  it('dayjs.tz', () => {
    const d1 = dayjs.tz(dateStr, LATZString).format(formatToken)
    const d2 = dayjs.tz(dateStr, TokyoTZString).format(formatToken)
    expect(d1).toEqual('2019-08-19 01:15:00')
    expect(d1).toEqual(moment.tz(dateStr, LATZString).format(formatToken))
    expect(d2).toEqual('2019-08-19 17:15:00')
    expect(d2).toEqual(moment.tz(dateStr, TokyoTZString).format(formatToken))
  })
})

describe('Parse date string without zone (target zone time)', () => {
  const dateStr = '2017-03-13 01:00:00'
  const LATZString = 'America/Los_Angeles'
  const TokyoTZString = 'Asia/Tokyo'
  const formatToken = 'YYYY-MM-DD HH:mm:ss'

  it('dayjs.tz', () => {
    const d1 = dayjs.tz(dateStr, LATZString).format(formatToken)
    const d2 = dayjs.tz(dateStr, TokyoTZString).format(formatToken)
    expect(d1).toEqual('2017-03-13 01:00:00')
    expect(d1).toEqual(moment.tz(dateStr, LATZString).format(formatToken))
    expect(d2).toEqual('2017-03-13 01:00:00')
    expect(d2).toEqual(moment.tz(dateStr, TokyoTZString).format(formatToken))
  })
})

