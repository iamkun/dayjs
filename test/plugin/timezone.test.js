import MockDate from 'mockdate'
// import moment from 'moment'
import dayjs from '../../src'
import timezone from '../../src/plugin/timezome'

dayjs.extend(timezone)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Basic timezone format', () => {
  const dateStr = '2019-08-19T16:15:00+08:00'
  const LATZString = 'america/los_angeles'
  const TokyoTZString = 'Asia/Tokyo'
  const formatToken = 'YYYY-MM-DD HH:mm:ss'
  expect(dayjs(dateStr).tz(LATZString).format(formatToken)).toEqual('2019-08-19 01:15:00')
  expect(dayjs(dateStr).tz(TokyoTZString).format(formatToken)).toEqual('2019-08-19 17:15:00')

  expect(dayjs.tz(dateStr, LATZString).format(formatToken)).toEqual('2019-08-19 01:15:00')
  expect(dayjs.tz(dateStr, TokyoTZString).format(formatToken)).toEqual('2019-08-19 17:15:00')
})
