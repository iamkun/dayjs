import MockDate from 'mockdate'
import { utcToZonedTime } from 'date-fns-tz'
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
  it('converts from UTC', () => {
    const or = new Date(Date.UTC(96, 1, 2, 3, 4, 5))
    const date = dayjs(or) // 2019-06-01T17:16:26+06:00
    expect(date.tz('America/New_York').toDate()).toEqual(utcToZonedTime(or, 'America/New_York'))
    expect(date.tz('Asia/Almaty').toDate()).toEqual(utcToZonedTime(or, 'Asia/Almaty'))
  })
  it('takes constructor on tz', () => {
    const a = dayjs.tz('2013-11-18 11:55', 'Asia/Taipei')
    const b = dayjs.tz('2013-11-18 11:55', 'America/Toronto')

    expect(a.format()).toEqual('2013-11-18T11:55:00+08:00') // 2013-11-18T11:55:00+08:00
    expect(b.format()).toEqual('2013-11-18T11:55:00-05:00') // 2013-11-18T11:55:00-05:00

    expect(a.utc().format()).toEqual('2013-11-18T03:55:00+00:00') // 2013-11-18T03:55Z
    expect(b.utc().format()).toEqual('2013-11-18T16:55:00+00:00') // 2013-11-18T16:55Z
  })
  it('converts to tz', () => {
    // no daylight savings
    const a = dayjs.tz('2013-11-18 11:55', 'Asia/Almaty').tz('Etc/utc')
    const b = dayjs.tz('2013-11-18 11:55', 'Etc/utc').tz('Asia/Almaty')

    expect(a.format()).toEqual('2013-11-18T05:55:00+00:00') // 2013-11-18T19:55:00+08:00
    expect(b.format()).toEqual('2013-11-18T17:55:00+06:00') // 2013-11-18T06:55:00-05:00
  })
})
