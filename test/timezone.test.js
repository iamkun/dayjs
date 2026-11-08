import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../src'
import timezone from '../src/plugin/timezone'
import utc from '../src/plugin/utc'
import weekday from '../src/plugin/weekday'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)

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

it('Set month and year keeps the time when the 1st is in a DST gap', () => {
  // New Zealand: DST started on 1995-10-01 at 02:00
  // America/Whitehorse: DST started on 2001-04-01 at 02:00
  [['1995-09-13 02:30', '1995-10-13 02:30', '1994-10-13 02:30'],
    ['2001-03-15 02:30', '2001-04-15 02:30', '2000-04-15 02:30']].forEach(([prevMonth, day, prevYear]) => {
    expect(dayjs(prevMonth).add(1, 'month').format()).toBe(moment(prevMonth).add(1, 'month').format())
    expect(dayjs(day).month(dayjs(day).month()).format())
      .toBe(moment(day).month(moment(day).month()).format())
    expect(dayjs(prevYear).add(1, 'year').format()).toBe(moment(prevYear).add(1, 'year').format())
  })
})

it('Set weekday keeps the time when the start of week is in a DST gap', () => {
  // New Zealand: DST started on 2024-09-29 at 02:00
  // London: DST started on 2024-03-31 at 01:00
  // America/Whitehorse: DST started on 2019-03-10 at 02:00
  ['2024-10-02 02:30', '2024-04-03 01:30', '2019-03-13 02:30'].forEach((day) => {
    expect(dayjs(day).weekday(3).format()).toBe(moment(day).weekday(3).format())
    expect(dayjs(day).weekday(5).format()).toBe(moment(day).weekday(5).format())
  })
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
