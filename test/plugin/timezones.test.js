import MockDate from 'mockdate'
import {
  zonedTimeToUtc,
  utcToZonedTime
} from 'date-fns-tz'
import dayjs from '../../src'
import tz from '../../src/plugin/timezones'

dayjs.extend(tz) // use plugin
beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})
describe('timezone plugin', () => {
  it('converts to UTC', () => {
    const date = dayjs(new Date(1559387786000)) // 2019-06-01T17:16:26+06:00
    expect(date.toUTC('America/New_York').toDate()).toEqual(zonedTimeToUtc(new Date(1559387786000), 'America/New_York'))
    expect(date.toUTC('Asia/Almaty').toDate()).toEqual(zonedTimeToUtc(new Date(1559387786000), 'Asia/Almaty'))
  })
  it('converts from UTC', () => {
    const or = new Date(Date.UTC(96, 1, 2, 3, 4, 5))
    const date = dayjs(or) // 2019-06-01T17:16:26+06:00
    expect(date.toZone('America/New_York').toDate()).toEqual(utcToZonedTime(or, 'America/New_York'))
    expect(date.toZone('Asia/Almaty').toDate()).toEqual(utcToZonedTime(or, 'Asia/Almaty'))
  })
  it('parses offset', () => {
    function date(st) {
      return new Date(st).toLocaleString('en-US', { timeZone: 'America/New_York' })
    }
    const b = date('2013-06-01T05:00:00-04:00')
    const c = date('2013-06-01T05:00:00+00:00')
    console.log(
      b.toLocaleString('en-US', { timeZone: 'America/New_York', timeZoneName: 'long' }),
      new Date(c).toLocaleString('en-US', { timeZone: 'America/New_York', timeZoneName: 'long' })
    )
  })
  it('takes constructor on tz', () => {
    const a = dayjs.tz('2013-11-18 11:55', 'Asia/Taipei')
    const b = dayjs.tz('2013-11-18 11:55', 'America/Toronto')

    expect(a.format()).toEqual('2013-11-18T11:55:00+08:00') // 2013-11-18T11:55:00+08:00
    expect(b.format()).toEqual('2013-11-18T11:55:00-05:00') // 2013-11-18T11:55:00-05:00

    expect(a.utc().format()).toEqual('2013-11-18T03:55:00+00:00') // 2013-11-18T03:55Z
    expect(b.utc().format()).toEqual('2013-11-18T16:55:00+00:00') // 2013-11-18T16:55Z
  })
  it.only('converts to tz', () => {
    const a = dayjs('2013-11-18 11:55').tz('Asia/Taipei')
    const b = dayjs('2013-11-18 11:55').tz('America/Toronto')

    expect(a.format()).toEqual('2013-11-18T19:55:00+08:00') // 2013-11-18T19:55:00+08:00
    expect(b.format()).toEqual('2013-11-18T06:55:00-05:00') // 2013-11-18T06:55:00-05:00

    expect(a.utc().format()).toEqual('2013-11-18T11:55Z') // 2013-11-18T11:55Z
    expect(b.utc().format()).toEqual('2013-11-18T11:55Z') // 2013-11-18T11:55Z
  })
  it('offset', () => {
    function date(st) {
      return new Date(st).toLocaleString('en-US', { timeZone: 'America/New_York' })
    }
    const b = date('2013-06-01T05:00:00-04:00')
    const c = date('2013-06-01T05:00:00+00:00')
    console.log(
      new Date(b).getTimezoneOffset(),
      new Date(c).getTimezoneOffset()
    )
  })
})
