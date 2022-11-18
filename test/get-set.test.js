import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Year', () => {
  expect(dayjs().get('year')).toBe(moment().get('year'))
  expect(dayjs().year()).toBe(moment().year())
  expect(dayjs().year(0).valueOf()).toBe(moment().year(0).valueOf())
  expect(dayjs().year(2000).valueOf()).toBe(moment().year(2000).valueOf())
})

it('Month', () => {
  expect(dayjs().get('month')).toBe(moment().get('month'))
  expect(dayjs().month()).toBe(moment().month())
  expect(dayjs().month(0).valueOf()).toBe(moment().month(0).valueOf())
  expect(dayjs().month(1).valueOf()).toBe(moment().month(1).valueOf())
})

it('Day of Week', () => {
  expect(dayjs().get('day')).toBe(moment().get('day'))
  expect(dayjs().day()).toBe(moment().day())
  expect(dayjs().day(0).format()).toBe(moment().day(0).format())
  expect(dayjs().day(1).format()).toBe(moment().day(1).format())
})

it('Date', () => {
  expect(dayjs().get('date')).toBe(moment().get('date'))
  expect(dayjs().date()).toBe(moment().date())
  expect(dayjs().date(0).valueOf()).toBe(moment().date(0).valueOf())
  expect(dayjs().date(1).valueOf()).toBe(moment().date(1).valueOf())
})

it('Hour', () => {
  expect(dayjs().get('hour')).toBe(moment().get('hour'))
  expect(dayjs().hour()).toBe(moment().hour())
  expect(dayjs().hour(0).valueOf()).toBe(moment().hour(0).valueOf())
  expect(dayjs().hour(1).valueOf()).toBe(moment().hour(1).valueOf())
})

it('Minute', () => {
  expect(dayjs().get('minute')).toBe(moment().get('minute'))
  expect(dayjs().minute()).toBe(moment().minute())
  expect(dayjs().minute(0).valueOf()).toBe(moment().minute(0).valueOf())
  expect(dayjs().minute(1).valueOf()).toBe(moment().minute(1).valueOf())
})

it('Second', () => {
  expect(dayjs().get('second')).toBe(moment().get('second'))
  expect(dayjs().second()).toBe(moment().second())
  expect(dayjs().second(0).valueOf()).toBe(moment().second(0).valueOf())
  expect(dayjs().second(1).valueOf()).toBe(moment().second(1).valueOf())
})

it('Millisecond', () => {
  expect(dayjs().get('millisecond')).toBe(moment().get('millisecond'))
  expect(dayjs().millisecond()).toBe(moment().millisecond())
  expect(dayjs().millisecond(0).valueOf()).toBe(moment().millisecond(0).valueOf())
  expect(dayjs().millisecond(1).valueOf()).toBe(moment().millisecond(1).valueOf())
})

it('Set Day', () => {
  expect(dayjs().set('date', 30).valueOf()).toBe(moment().set('date', 30).valueOf())
})

it('Set Day of Week', () => {
  expect(dayjs().set('day', 0).valueOf()).toBe(moment().set('day', 0).valueOf())
})

it('Set Month', () => {
  expect(dayjs().set('month', 11).valueOf()).toBe(moment().set('month', 11).valueOf())
})

it('Set Year', () => {
  expect(dayjs().set('year', 2008).valueOf()).toBe(moment().set('year', 2008).valueOf())
})

it('Set Hour', () => {
  expect(dayjs().set('hour', 6).valueOf()).toBe(moment().set('hour', 6).valueOf())
})

it('Set Minute', () => {
  expect(dayjs().set('minute', 59).valueOf()).toBe(moment().set('minute', 59).valueOf())
})

it('Set Second', () => {
  expect(dayjs().set('second', 59).valueOf()).toBe(moment().set('second', 59).valueOf())
})

it('Set Millisecond', () => {
  expect(dayjs().set('millisecond', 999).valueOf()).toBe(moment().set('millisecond', 999).valueOf())
})

it('Set Month and Year in last day of month', () => {
  // 2011-07-31 -> 2011-02-28
  const origin = dayjs('2011-07-31T14:48:00.000Z')
  const setMonth = origin.set('month', 1)
  expect(setMonth.month()).toBe(1)
  expect(origin.date()).toBe(31)
  expect(setMonth.date()).toBe(28)
  // 2000-02-29 -> 2001-02-28
  const origin2 = dayjs('2000-02-29T14:48:00.000Z')
  const setYear = origin2.set('year', 2001)
  expect(setYear.month()).toBe(1)
  expect(origin2.date()).toBe(29)
  expect(setYear.date()).toBe(28)
})

it('Set Unknown String', () => {
  const newDate = dayjs().set('Unknown String', 1)
  expect(newDate.valueOf())
    .toBe(moment().set('Unknown String', 1).valueOf())
})

it('Immutable Set', () => {
  const dayjsA = dayjs()
  const dayjsB = dayjsA.set('year', 2011)
  const momentA = moment()
  const momentB = momentA.set('year', 2011)
  expect(dayjsA.valueOf()).not.toBe(dayjsB.valueOf())
  expect(momentA.valueOf()).toBe(momentB.valueOf())
})
