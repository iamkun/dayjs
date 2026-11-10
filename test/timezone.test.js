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
  const daysJS = dayjs(time).utc().utcOffset(hoursOffset * 60, true)
  const momentJS = moment(time).utc(true).utcOffset(hoursOffset, true)

  expect(daysJS.toISOString()).toEqual(momentJS.toISOString())
})

it('UTC diff in DST', () => {
  // DST till 2020-10-25
  const day1 = dayjs.utc('20201023') // in DST
  const day2 = dayjs.utc('20201026')
  expect(day1.diff(day2, 'd'))
    .toBe(-3)
})

// utcOffset(n) built its result by shifting a host-local Date by the offset. On a host whose own
// DST change fell inside that shift the fields came out an hour off while valueOf() stayed right.
// npm run test-tz runs this file under Europe/London and Pacific/Auckland, which the cases below
// are chosen for.
describe('utcOffset(n) on a host near its own DST change', () => {
  const cases = [
    // the London spring forward, 2021-03-28 01:00Z, falls inside a +09:00 shift
    ['2021-03-27T20:00:00Z', 540, '2021-03-28T05:00:00+09:00'],
    // the London fall back, 2021-10-31 01:00Z, falls inside a -05:00 shift
    ['2021-10-31T03:00:00Z', -300, '2021-10-30T22:00:00-05:00'],
    // the Auckland spring forward, 2021-09-25 14:00Z, falls inside a +09:00 shift from UTC+13
    ['2021-09-25T15:00:00Z', 540, '2021-09-26T00:00:00+09:00'],
    // the Auckland fall back, 2022-04-02 14:00Z, falls inside a -05:00 shift from UTC+12
    ['2022-04-02T15:00:00Z', -300, '2022-04-02T10:00:00-05:00'],
    // a quarter-hour offset across the London spring forward
    ['2021-03-27T18:00:00Z', 825, '2021-03-28T07:45:00+13:45']
  ]

  cases.forEach(([instant, offset, expected]) => {
    it(`shows ${expected} for ${instant} at ${offset}`, () => {
      const d = dayjs(instant).utcOffset(offset)
      const m = moment(instant).utcOffset(offset)
      expect(d.format()).toBe(expected)
      expect(d.format()).toBe(m.format())
      expect(d.valueOf()).toBe(new Date(instant).getTime())
      expect(d.toISOString()).toBe(new Date(instant).toISOString())
      expect(d.utcOffset()).toBe(offset)
      expect(d.toDate().getTime()).toBe(d.valueOf())
    })
  })

  it('shows the wall clock of the offset every 20 minutes of 2021 at three offsets', () => {
    // A wall clock inside the host's own spring-forward gap has no host-local Date, so those few
    // instants are skipped and counted instead (https://github.com/iamkun/dayjs/issues/2303).
    const offsets = [540, -300, 345]
    const step = 20 * 60 * 1000
    const end = Date.UTC(2022, 0, 1)
    const mismatches = []
    let skipped = 0
    offsets.forEach((offset) => {
      for (let ts = Date.UTC(2021, 0, 1); ts < end; ts += step) {
        const wall = new Date(ts + (offset * 60 * 1000))
        const local = new Date(
          wall.getUTCFullYear(), wall.getUTCMonth(), wall.getUTCDate(),
          wall.getUTCHours(), wall.getUTCMinutes()
        )
        if (local.getHours() !== wall.getUTCHours()) {
          skipped += 1
        } else {
          const d = dayjs(ts).utcOffset(offset)
          const expected = wall.toISOString().slice(0, 16).replace('T', ' ')
          if (d.format('YYYY-MM-DD HH:mm') !== expected || d.valueOf() !== ts) {
            mismatches.push(`${offset} at ${new Date(ts).toISOString()}: ${d.format()}`)
          }
        }
      }
    })
    expect(mismatches.slice(0, 5)).toEqual([])
    expect(mismatches).toHaveLength(0)
    expect(skipped).toBeLessThanOrEqual(9)
  })

  it('keeps years below 100', () => {
    const instant = new Date(Date.UTC(2000, 5, 15, 12))
    instant.setUTCFullYear(50)
    const d = dayjs(instant).utcOffset(120)
    expect(d.year()).toBe(50)
    expect(d.format('YYYY-MM-DD HH:mm')).toBe('0050-06-15 14:00')
    // Year 50 hosts kept LMT offsets with seconds, which getTimezoneOffset rounds to minutes
    expect(Math.abs(d.valueOf() - instant.getTime())).toBeLessThan(60 * 1000)
  })
})
