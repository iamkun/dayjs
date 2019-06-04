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
  it.only('respects forward dst', () => {
    // skips an hour on b
    // const a = dayjs.tz('2012-03-11 12:00:00', 'Asia/Almaty').tz('America/New_York').format()
    // const b = dayjs.tz('2012-03-11 13:00:00', 'Asia/Almaty').tz('America/New_York').format()
    // expect(a).toEqual('2012-03-11T01:00:00-05:00')
    // expect(b).toEqual('2012-03-11T03:00:00-04:00')
    // const c = dayjs.tz('2012-03-11 1:00:00', 'America/New_York').format()
    // const d = dayjs.tz('2012-03-11 2:00:00', 'America/New_York').format()
    // expect(c).toEqual('2012-03-11T01:00:00-05:00')
    // expect(d).toEqual('2012-03-11T03:00:00-04:00')
    // const e = dayjs.tz('2019-03-29 1:00:00', 'Asia/Jerusalem').format()
    // const f = dayjs.tz('2019-03-29 2:00:00', 'Asia/Jerusalem').format()
    // expect(e).toEqual('2019-03-29T01:00:00+02:00')
    // expect(f).toEqual('2019-03-29T03:00:00+03:00')
    // the other extremety in case the math is bad, positive tz, and south hemisphere
    // const g = dayjs.tz('1991-10-27 01:00:00', "Australia/Brisbane")
    // console.log(
    //   new Date('1991-10-26 20:00:00').toLocaleString('en', { timeZone: 'Australia/Brisbane' }),
    //   new Date('1991-10-26 21:00:00').toLocaleString('en', { timeZone: 'Australia/Brisbane' }),
    // )
    const h = dayjs.tz('1991-10-27 02:00:00', 'Australia/Brisbane')
    // expect(g.format()).toEqual('1991-10-27T01:00:00+10:00')
    expect(h.format()).toEqual('1991-10-27T03:00:00+11:00')
  })
  it('respects backward dst', () => {
    const a = dayjs.tz('2012-11-04 01:59:59', 'America/New_York') // 2012-11-04T01:59:59-04:00
    const b = dayjs.tz('2012-11-04 02:00:00', 'America/New_York') // 2012-11-04T02:00:00-05:00
    expect(a.format()).toEqual('2012-11-04T01:59:59-04:00')
    expect(b.format()).toEqual('2012-11-04T01:00:00-05:00')
    // specific hour creation with offset
    const c = dayjs.tz('2012-11-04 01:00:00-04:00', 'America/New_York')
    const d = dayjs.tz('2012-11-04 01:00:00-05:00', 'America/New_York')
    expect(c.format()).toEqual('2012-11-04T01:00:00-04:00')
    expect(d.format()).toEqual('2012-11-04T01:00:00-05:00')
    // the other extremety in case the math is bad, positive tz, and south hemisphere
    const e = dayjs.tz('1991-03-03 01:59:59', 'Australia/Brisbane')
    const f = dayjs.tz('1991-03-03 02:00:00', 'Australia/Brisbane')
    expect(e.format()).toEqual('1991-03-03T02:59:59+11:00')
    expect(f.format()).toEqual('1991-03-03T02:00:00+10:00')
    const g = dayjs.tz('1991-03-03 02:00:00+11:00', 'Australia/Brisbane')
    const h = dayjs.tz('1991-03-03 02:00:00+10:00', 'Australia/Brisbane')
    expect(g.format()).toEqual('1991-03-03T02:00:00+11:00')
    expect(h.format()).toEqual('1991-03-03T02:00:00+10:00')
  })
})
