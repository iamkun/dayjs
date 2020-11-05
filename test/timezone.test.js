import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../src'
import utc from '../src/plugin/utc'

dayjs.extend(utc)

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
  const test1 = 1331449199000 // 2012/3/11 14:59:59
  expect(moment(test1).utcOffset(-300).format())
    .toBe(dayjs(test1).utcOffset(-300).format())
  const test2 = '2000-01-01T06:31:00Z'
  expect(moment.utc(test2).utcOffset(-60).format())
    .toBe(dayjs.utc(test2).utcOffset(-60).format())
})

it('UTC diff in DST', () => {
  // DST till 2020-10-25
  const day1 = dayjs.utc('20201023') // in DST
  const day2 = dayjs.utc('20201026')
  expect(day1.diff(day2, 'd'))
    .toBe(-3)
})
