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

it('startOf("month") returns correct value with active Timezone', () => {
  // 2023-08-01T00:00:00Z
  const initial = 1692050400000
  const month1 = dayjs.utc(initial).startOf('month')
  const month2 = dayjs(initial).tz('UTC').startOf('month')
  const month3 = dayjs(initial).tz('Africa/Abidjan').startOf('month')
  // 2023-08-01T00:00:00+02:00
  const month4 = dayjs(initial).tz('Europe/Berlin').startOf('month')
  // 2023-08-01T00:00:00-05:00
  const month5 = dayjs(initial).tz('America/Cancun').startOf('month')

  expect(month1.format()).toEqual('2023-08-01T00:00:00Z')
  expect(month2.format()).toEqual('2023-08-01T00:00:00Z')
  expect(month3.format()).toEqual('2023-08-01T00:00:00Z')
  expect(month4.format()).toEqual('2023-08-01T00:00:00+02:00')
  expect(month5.format()).toEqual('2023-08-01T00:00:00-05:00')
})

it('startOf("day") returns correct value with active Timezone', () => {
  // initial date = 2023-08-15T12:00:00Z
  const initial = 1692100800000
  // should return the same day
  const day1 = dayjs(initial).tz('UTC').startOf('day')
  const day2 = dayjs(initial).tz('Africa/Abidjan').startOf('day')
  const day3 = dayjs(initial).tz('Europe/Berlin').startOf('day')
  const day4 = dayjs(initial).tz('America/Cancun').startOf('day')

  expect(day1.format()).toEqual('2023-08-15T00:00:00Z')
  expect(day2.format()).toEqual('2023-08-15T00:00:00Z')
  expect(day3.format()).toEqual('2023-08-15T00:00:00+02:00')
  expect(day4.format()).toEqual('2023-08-15T00:00:00-05:00')

  // switching days when hours are close to the timezone-offset
  const day5 = dayjs(initial).hour(23).tz('Europe/Berlin').startOf('day') // 2023-08-15T23:00:00Z
  const day6 = dayjs(initial).hour(4).tz('America/Cancun').startOf('day') // 2023-08-15T04:00:00Z


  expect(day5.format()).toEqual('2023-08-16T00:00:00+02:00')
  expect(day6.format()).toEqual('2023-08-14T00:00:00-05:00')
})
