import MockDate from 'mockdate'
import { utcToZonedTime } from 'date-fns-tz'
import moment from 'moment-timezone'
import dayjs from '../../src'
import tz from '../../src/plugin/timezones'
import '../../src/plugin/timezones/timezonesTestData.js'

dayjs.extend(tz) // use plugin

function momentTzParity(date, TZ) {
  const day = dayjs.tz(date, TZ).format()
  const mom = moment.tz(date, TZ).format()
  return expect(day).toEqual(mom)
}

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
    // no daylight savings, +6
    const a = dayjs.tz('2013-11-18 11:55', 'Asia/Almaty').tz('Etc/utc')
    const b = dayjs.tz('2013-11-18 11:55', 'Etc/utc').tz('Asia/Almaty')

    expect(a.format()).toEqual('2013-11-18T05:55:00+00:00') // 2013-11-18T19:55:00+08:00
    expect(b.format()).toEqual('2013-11-18T17:55:00+06:00') // 2013-11-18T06:55:00-05:00
  })
  it('respects forward dst', () => {
    // skips an hour on b
    const z = dayjs.tz('2012-03-11 11:00:00', 'Asia/Almaty').tz('America/New_York').format()
    const a = dayjs.tz('2012-03-11 12:00:00', 'Asia/Almaty').tz('America/New_York').format()
    const b = dayjs.tz('2012-03-11 13:00:00', 'Asia/Almaty').tz('America/New_York').format()
    const ba = dayjs.tz('2012-03-11 14:00:00', 'Asia/Almaty').tz('America/New_York').format()
    const zz = moment.tz('2012-03-11 11:00:00', 'Asia/Almaty').tz('America/New_York').format()
    const az = moment.tz('2012-03-11 12:00:00', 'Asia/Almaty').tz('America/New_York').format()
    const bz = moment.tz('2012-03-11 13:00:00', 'Asia/Almaty').tz('America/New_York').format()
    const baz = moment.tz('2012-03-11 14:00:00', 'Asia/Almaty').tz('America/New_York').format()
    expect(z).toEqual(zz)
    expect(a).toEqual(az)
    expect(b).toEqual(bz)
    expect(ba).toEqual(baz)

    momentTzParity('2012-03-10 01:59:59', 'America/New_York')
    momentTzParity('2012-03-11 01:59:59', 'America/New_York')
    momentTzParity('2012-03-11 02:00:00', 'America/New_York')
    momentTzParity('2012-03-11 03:00:00', 'America/New_York')
    momentTzParity('2012-03-12 20:59:59', 'America/New_York')


    momentTzParity('2019-03-29 01:00:00', 'Asia/Jerusalem')
    momentTzParity('2019-03-29 02:00:00', 'Asia/Jerusalem')
    momentTzParity('2019-03-29 03:00:00', 'Asia/Jerusalem')

    // the other extremety in case the math is bad, positive tz, and south hemisphere
    momentTzParity('1991-10-26 01:00:00', 'Australia/Brisbane')
    momentTzParity('1991-10-27 01:00:00', 'Australia/Brisbane')
    momentTzParity('1991-10-27 02:00:00', 'Australia/Brisbane')
    momentTzParity('1991-10-27 03:00:00', 'Australia/Brisbane')
    momentTzParity('1991-10-28 20:00:00', 'Australia/Brisbane')
  })
  it('respects backward dst', () => {
    momentTzParity('2012-11-03 01:59:59', 'America/New_York')
    momentTzParity('2012-11-04 01:59:59', 'America/New_York')
    momentTzParity('2012-11-04 02:00:00', 'America/New_York')
    momentTzParity('2012-11-04 03:00:00', 'America/New_York')
    momentTzParity('2012-11-04 04:00:00', 'America/New_York')
    momentTzParity('2012-11-05 01:59:59', 'America/New_York')

    momentTzParity('1991-03-02 01:00:00', 'Australia/Brisbane')
    momentTzParity('1991-03-03 01:00:00', 'Australia/Brisbane')
    momentTzParity('1991-03-03 02:00:00', 'Australia/Brisbane')
    momentTzParity('1991-03-03 03:00:00', 'Australia/Brisbane')
    momentTzParity('1991-03-03 04:00:00', 'Australia/Brisbane')
    momentTzParity('1991-03-04 20:00:00', 'Australia/Brisbane')
  })
  it('will create backwards dst specific duplicated hour', () => {
    momentTzParity('2012-11-04 01:00:00-04:00', 'America/New_York')
    momentTzParity('2012-11-04 01:00:00-05:00', 'America/New_York')

    momentTzParity('1991-03-03 02:00:00+11:00', 'Australia/Brisbane')
    momentTzParity('1991-03-03 02:00:00+10:00', 'Australia/Brisbane')
  })
  it('gives zone info', () => {
    expect(dayjs.tz('2012-1-1', 'America/New_York').zoneAbbr()).toEqual('EST') // EST
    expect(dayjs.tz('2012-5-1', 'America/New_York').zoneName()).toEqual('Eastern Daylight Time') // PST
  })
  it('works in local dst', () => {
    // my tz being almaty
    momentTzParity('2004-03-27 01:00:00', 'Asia/Almaty')
    momentTzParity('2004-03-28 01:00:00', 'Asia/Almaty')
    momentTzParity('2004-03-28 02:00:00', 'Asia/Almaty')
    momentTzParity('2004-03-28 03:00:00', 'Asia/Almaty')
    momentTzParity('2004-03-28 04:00:00', 'Asia/Almaty')
    momentTzParity('2004-03-29 20:00:00', 'Asia/Almaty')

    momentTzParity('2004-10-30 01:00:00', 'Asia/Almaty')
    momentTzParity('2004-10-31 01:00:00', 'Asia/Almaty')
    momentTzParity('2004-10-31 02:00:00', 'Asia/Almaty')
    momentTzParity('2004-10-31 03:00:00', 'Asia/Almaty')
    momentTzParity('2004-10-31 04:00:00', 'Asia/Almaty')
    momentTzParity('2004-10-31 23:00:00', 'Asia/Almaty')
  })
  it.skip('changes default timezone and uses utc otherwise', () => {
    // should be utc, default of default
    // moment.tz.setDefault("America/New_York");
    // moment.tz.setDefault(); //reset to utc
  })
  it.skip('works with non-plugin methods', () => {
    const m = dayjs.tz('2013-11-18 11:55', 'America/Toronto')
    expect(m.startOf('day').tz('Europe/Berlin').format())
      .toEqual('2013-11-18T00:00:00+01:00')// 2013-11-18T06:00:00+01:00
    const a = dayjs.tz('1991-03-03 01:59:59', 'America/New_York')
    expect(a.format()).toEqual('1991-03-03T01:59:59-05:00')
    expect(a.add(1, 'hour').format()).toEqual('1991-03-03TT03:59:59-04:00')
  // not sure when dst happens for australia anymore
    // const a = dayjs.tz('1991-03-03 01:59:59', 'Australia/Brisbane').add(1, 'hour')
    // expect(a.format()).toEqual('1991-03-03T02:00:00+10:00')
  })
})

