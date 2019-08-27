import MockDate from 'mockdate'
import moment from 'moment-timezone'
import dayjs from '../../src'
import utc from '../../src/plugin/utc'
import timezone from '../../src/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

// describe('Parse date string with zone', () => {
//   const dateStr = '2019-08-19T16:15:00+08:00'
//   const LATZString = 'America/Los_Angeles'
//   const TokyoTZString = 'Asia/Tokyo'
//   const formatToken = 'YYYY-MM-DD HH:mm:ss'
//   it('dayjs().tz', () => {
//     const d1 = dayjs(dateStr).tz(LATZString).format(formatToken)
//     const d2 = dayjs(dateStr).tz(TokyoTZString).format(formatToken)
//     expect(d1).toEqual('2019-08-19 01:15:00')
//     expect(d1).toEqual(moment(dateStr).tz(LATZString).format(formatToken))
//     expect(d2).toEqual('2019-08-19 17:15:00')
//     expect(d2).toEqual(moment(dateStr).tz(TokyoTZString).format(formatToken))
//   })

//   it('dayjs.tz', () => {
//     const d1 = dayjs.tz(dateStr, LATZString).format(formatToken)
//     const d2 = dayjs.tz(dateStr, TokyoTZString).format(formatToken)
//     expect(d1).toEqual('2019-08-19 01:15:00')
//     expect(d1).toEqual(moment.tz(dateStr, LATZString).format(formatToken))
//     expect(d2).toEqual('2019-08-19 17:15:00')
//     expect(d2).toEqual(moment.tz(dateStr, TokyoTZString).format(formatToken))
//   })
// })

// describe('Parse date string without zone (target zone time)', () => {
//   const dateStr = '2017-03-12 01:00:00'
//   const LATZString = 'America/Los_Angeles'
//   const TokyoTZString = 'Asia/Tokyo'
//   const formatToken = 'YYYY-MM-DD HH:mm:ss'

//   it('dayjs.tz', () => {
//     const d1 = dayjs.tz(dateStr, LATZString).format(formatToken)
//     const d2 = dayjs.tz(dateStr, TokyoTZString).format(formatToken)
//     expect(d1).toEqual('2017-03-12 01:00:00')
//     expect(d1).toEqual(moment.tz(dateStr, LATZString).format(formatToken))
//     expect(d2).toEqual('2017-03-12 01:00:00')
//     expect(d2).toEqual(moment.tz(dateStr, TokyoTZString).format(formatToken))
//   })
// })

describe('Parse date string without zone (target zone time)', () => {
  const dateStr = '2017-03-11 02:00:00'
  const dateDstStr = '2017-03-12 02:00:00'
  // parse result 2017-03-12T03:00:00-07:00 (DST)
  const LATZString = 'America/Los_Angeles'
  // const TokyoTZString = 'Asia/Tokyo'

  it('dayjs.tz', () => {
    const d1 = dayjs.tz(dateStr, LATZString)
    const m1 = moment.tz(dateStr, LATZString)
    expect(d1.toDate()).toEqual(m1.toDate())
    expect(d1.format()).toEqual('2017-03-11T02:00:00-08:00')
    expect(d1.format()).toEqual(m1.format())
    // DST
    const d2 = dayjs.tz(dateDstStr, LATZString)
    const m2 = moment.tz(dateDstStr, LATZString)
    expect(d2.toDate()).toEqual(m2.toDate())
    expect(d2.format()).toEqual('2017-03-12T03:00:00-07:00')
    expect(d2.format()).toEqual(m2.format())
  })
})

