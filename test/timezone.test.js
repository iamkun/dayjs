import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../src'
import timezone from '../src/plugin/timezone'
import utc from '../src/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Add Time days (DST)', () => {
  // change timezone before running test
  // New Zealand (-720)
  expect(dayjs('2018-04-01').add(1, 'd').format()).toBe(moment('2018-04-01').add(1, 'd').format())
  expect(dayjs('2018-03-28').add(1, 'w').format()).toBe(moment('2018-03-28').add(1, 'w').format())
  // London (-60)
  expect(dayjs('2018-10-28').add(1, 'd').format()).toBe(moment('2018-10-28').add(1, 'd').format())
  expect(dayjs('2018-10-26').add(1, 'w').format()).toBe(moment('2018-10-26').add(1, 'w').format())
})

it('Utc Offset', () => {
  expect(dayjs().utcOffset()).toBe(moment().utcOffset())
})

it('Diff (DST)', () => {
  const day = '2018-10-28'
  const dayjsA = dayjs(day)
  const dayjsB = dayjs(day).add(-1000, 'days')
  const momentA = moment(day)
  const momentB = moment(day).add(-1000, 'days')
  const units = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'quarters', 'years']
  units.forEach((unit) => {
    expect(dayjsA.diff(dayjsB, unit)).toBe(momentA.diff(momentB, unit))
    expect(dayjsA.diff(dayjsB, unit, true)).toBe(momentA.diff(momentB, unit, true))
  })
})

it('UTC add day in DST', () => {
  const testDate = '2019-03-10'
  const dayTest = dayjs(testDate)
    .utc()
    .startOf('day')
  const momentTest = moment(testDate)
    .utc()
    .startOf('day')
  expect(dayTest.add(1, 'day').format())
    .toBe(momentTest.clone().add(1, 'day').format())
  expect(dayTest.add(2, 'day').format())
    .toBe(momentTest.clone().add(2, 'day').format())
})

it('UTC and utcOffset', () => {
  const test1 = 1331449199000 // 2012/3/11 06:59:59 GMT+0000
  expect(dayjs(test1).utcOffset(-300).format())
    .toBe(moment(test1).utcOffset(-300).format())
  const test2 = '2000-01-01T06:31:00Z'
  expect(dayjs.utc(test2).utcOffset(-60).format())
    .toBe(moment.utc(test2).utcOffset(-60).format())

  // across DST, copied from utc.test.js#get utc offset with a number value
  const time = '2021-02-28 19:40:10'
  const hoursOffset = -8
  const daysJS = dayjs(time).utc(true).utcOffset(hoursOffset * 60, true)
  const momentJS = moment(time).utc(true).utcOffset(hoursOffset, true)

  expect(daysJS.toISOString()).toEqual(momentJS.toISOString())
  expect(daysJS.format()).toEqual(momentJS.format())
})

it('UTC diff in DST', () => {
  // DST till 2020-10-25
  const day1 = dayjs.utc('20201023') // in DST
  const day2 = dayjs.utc('20201026')
  expect(day1.diff(day2, 'd'))
    .toBe(-3)
})

// The wall clock an instance shows for a fixed offset is the instant seen from that
// offset, so it is the same on whichever host it is computed. It used to be read
// back off a host-local Date, which has no way to hold a wall clock the host itself
// skips at its DST spring-forward. The sweep needs no particular host: over a year
// at three offsets it crosses whatever gap the current host has, and npm run test-tz
// runs this file under several of them.
// https://github.com/iamkun/dayjs/issues/2303
describe('Fixed offset independent of the host timezone', () => {
  // The wall clock a fixed offset shows, straight from the definition.
  const wallClockAt = (ts, offset) =>
    new Date(ts + (offset * 60 * 1000)).toISOString().replace('T', ' ').slice(0, 19)

  it('shows the offset wall clock every 20 minutes of 2026', () => {
    const offsets = [825, 345, -210]
    const step = 20 * 60 * 1000
    const end = Date.UTC(2027, 0, 1)
    const mismatches = []
    offsets.forEach((offset) => {
      for (let ts = Date.UTC(2026, 0, 1); ts < end; ts += step) {
        const ins = dayjs(ts).utcOffset(offset)
        if (ins.format('YYYY-MM-DD HH:mm:ss') !== wallClockAt(ts, offset)
          || ins.valueOf() !== ts) {
          mismatches.push(`${offset} at ${new Date(ts).toISOString()}: ${ins.format()}`)
        }
      }
    })
    expect(mismatches.slice(0, 5)).toEqual([])
    expect(mismatches).toHaveLength(0)
  })

  it('agrees with moment on instants a host DST gap swallows', () => {
    const cases = [
      { instant: '2026-03-07T12:27:20.000Z', offset: 825 }, // +13:45, US hosts
      { instant: '2024-03-30T23:30:00.000Z', offset: 120 }, // +02:00, EU hosts
      { instant: '2026-10-03T13:20:00.000Z', offset: 660 }, // +11:00, AU hosts
      { instant: '2026-09-26T13:40:00.000Z', offset: 780 } // +13:00, NZ hosts
    ]
    cases.forEach(({ instant, offset }) => {
      const ts = new Date(instant).getTime()
      const d = dayjs(ts).utcOffset(offset)
      const m = moment(ts).utcOffset(offset)
      expect(d.format()).toBe(m.format())
      expect(d.format('YYYY-MM-DD HH:mm:ss')).toBe(wallClockAt(ts, offset))
      expect(d.valueOf()).toBe(ts)
      expect(d.toDate().getTime()).toBe(ts)
      expect(d.isUTC()).toBe(false)
      // startOf works off the same wall clock
      expect(d.startOf('day').format('YYYY-MM-DD HH:mm:ss'))
        .toBe(`${wallClockAt(ts, offset).slice(0, 10)} 00:00:00`)
    })
  })
})
