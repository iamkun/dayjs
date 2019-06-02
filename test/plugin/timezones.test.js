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
})
