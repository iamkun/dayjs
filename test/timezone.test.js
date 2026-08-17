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

// The wall clock right after a fall back is the one that just happened, so the
// Date setters startOf/endOf rely on can resolve it to the earlier offset and
// drop the result a whole hour. Only one hour fall backs are collected, so that
// the repeated wall clock covers a whole hour; a host without DST yields none.
const fallBacks = () => {
  const result = []
  let previous = new Date(Date.UTC(2015, 0, 1)).getTimezoneOffset()
  for (let t = Date.UTC(2015, 0, 1); t < Date.UTC(2030, 0, 1); t += 3600000) {
    const offset = new Date(t).getTimezoneOffset()
    if (offset - previous === 60) result.push(t) // the clock was moved back here
    previous = offset
  }
  return result
}

it('startOf/endOf below a day in a repeated hour (DST)', () => {
  fallBacks().forEach((transition) => {
    const time = transition + (15 * 60 * 1000) + 45123 // inside the repeated hour
    const dayjsTest = dayjs(time)
    const momentTest = moment(time);
    ['hour', 'minute', 'second'].forEach((unit) => {
      expect(dayjsTest.startOf(unit).valueOf()).toBe(momentTest.clone().startOf(unit).valueOf())
      expect(dayjsTest.endOf(unit).valueOf()).toBe(momentTest.clone().endOf(unit).valueOf())
      expect(dayjsTest.isSame(dayjsTest, unit)).toBe(true)
    })
    // startOf only clears the fields below its unit, it never moves the clock
    expect(time - dayjsTest.startOf('second').valueOf()).toBe(dayjsTest.millisecond())
    expect(time - dayjsTest.startOf('minute').valueOf())
      .toBe((dayjsTest.second() * 1000) + dayjsTest.millisecond())
  })
})
