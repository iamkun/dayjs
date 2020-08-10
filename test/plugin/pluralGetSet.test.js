import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import pluralGetSet from '../../src/plugin/pluralGetSet'

dayjs.extend(pluralGetSet)
const warnBackup = global.console.warn
beforeEach(() => {
  MockDate.set(new Date())
  global.console.warn = jest.genMockFunction()
  // moment.js .years, .dates, .months will throw warn
})

afterEach(() => {
  MockDate.reset()
  global.console.warn = warnBackup
})

it('Years', () => {
  expect(dayjs().get('years')).toBe(moment().get('years'))
  expect(dayjs().years()).toBe(moment().years())
  expect(dayjs().years(0).valueOf()).toBe(moment().years(0).valueOf())
  expect(dayjs().years(2000).valueOf()).toBe(moment().years(2000).valueOf())
})

it('Months', () => {
  expect(dayjs().get('months')).toBe(moment().get('months'))
  expect(dayjs().months()).toBe(moment().months())
  expect(dayjs().months(0).valueOf()).toBe(moment().months(0).valueOf())
  expect(dayjs().months(1).valueOf()).toBe(moment().months(1).valueOf())
})

it('Days of Week', () => {
  expect(dayjs().get('days')).toBe(moment().get('days'))
  expect(dayjs().days()).toBe(moment().days())
  expect(dayjs().days(0).format()).toBe(moment().days(0).format())
  expect(dayjs().days(1).format()).toBe(moment().days(1).format())
})

it('Dates', () => {
  expect(dayjs().get('dates')).toBe(moment().get('dates'))
  expect(dayjs().dates()).toBe(moment().dates())
  expect(dayjs().dates(0).valueOf()).toBe(moment().dates(0).valueOf())
  expect(dayjs().dates(1).valueOf()).toBe(moment().dates(1).valueOf())
})

it('Hours', () => {
  expect(dayjs().get('hours')).toBe(moment().get('hours'))
  expect(dayjs().hours()).toBe(moment().hours())
  expect(dayjs().hours(0).valueOf()).toBe(moment().hours(0).valueOf())
  expect(dayjs().hours(1).valueOf()).toBe(moment().hours(1).valueOf())
})

it('Minutes', () => {
  expect(dayjs().get('minutes')).toBe(moment().get('minutes'))
  expect(dayjs().minutes()).toBe(moment().minutes())
  expect(dayjs().minutes(0).valueOf()).toBe(moment().minutes(0).valueOf())
  expect(dayjs().minutes(1).valueOf()).toBe(moment().minutes(1).valueOf())
})

it('Seconds', () => {
  expect(dayjs().get('seconds')).toBe(moment().get('seconds'))
  expect(dayjs().seconds()).toBe(moment().seconds())
  expect(dayjs().seconds(0).valueOf()).toBe(moment().seconds(0).valueOf())
  expect(dayjs().seconds(1).valueOf()).toBe(moment().seconds(1).valueOf())
})

it('Milliseconds', () => {
  expect(dayjs().get('milliseconds')).toBe(moment().get('milliseconds'))
  expect(dayjs().milliseconds()).toBe(moment().milliseconds())
  expect(dayjs().milliseconds(0).valueOf()).toBe(moment().milliseconds(0).valueOf())
  expect(dayjs().milliseconds(1).valueOf()).toBe(moment().milliseconds(1).valueOf())
})

it('Set Dates', () => {
  expect(dayjs().date(30).valueOf()).toBe(moment().dates(30).valueOf())
  expect(dayjs().set('dates', 30).valueOf()).toBe(moment().set('dates', 30).valueOf())
})

it('Set Days of Week', () => {
  expect(dayjs().days(0).valueOf()).toBe(moment().days(0).valueOf())
  expect(dayjs().set('days', 0).valueOf()).toBe(moment().set('days', 0).valueOf())
})

it('Set Months', () => {
  expect(dayjs().months(11).valueOf()).toBe(moment().months(11).valueOf())
  expect(dayjs().set('months', 11).valueOf()).toBe(moment().set('months', 11).valueOf())
})

it('Set Years', () => {
  expect(dayjs().years(2008).valueOf()).toBe(moment().year(2008).valueOf())
  expect(dayjs().set('years', 2008).valueOf()).toBe(moment().set('years', 2008).valueOf())
})

it('Set Hours', () => {
  expect(dayjs().set('hours', 6).valueOf()).toBe(moment().set('hours', 6).valueOf())
  expect(dayjs().hours(6).valueOf()).toBe(moment().hours(6).valueOf())
})

it('Set Minutes', () => {
  expect(dayjs().minutes(59).valueOf()).toBe(moment().minutes(59).valueOf())
  expect(dayjs().set('minutes', 59).valueOf()).toBe(moment().set('minutes', 59).valueOf())
})

it('Set Seconds', () => {
  expect(dayjs().seconds(59).valueOf()).toBe(moment().seconds(59).valueOf())
  expect(dayjs().set('second', 59).valueOf()).toBe(moment().set('second', 59).valueOf())
})

it('Set Milliseconds', () => {
  expect(dayjs().milliseconds(999).valueOf()).toBe(moment().milliseconds(999).valueOf())
  expect(dayjs().set('millisecond', 999).valueOf()).toBe(moment().set('millisecond', 999).valueOf())
})

it('Set Month and Year in last day of month', () => {
  // 2011-07-31 -> 2011-02-28
  const origin = dayjs('2011-07-31T14:48:00.000Z')
  const setMonth = origin.set('month', 1)
  expect(setMonth.months()).toBe(1)
  expect(origin.dates()).toBe(31)
  expect(setMonth.dates()).toBe(28)
  // 2000-02-29 -> 2001-02-28
  const origin2 = dayjs('2000-02-29T14:48:00.000Z')
  const setYear = origin2.set('years', 2001)
  expect(setYear.months()).toBe(1)
  expect(origin2.dates()).toBe(29)
  expect(setYear.dates()).toBe(28)
})
