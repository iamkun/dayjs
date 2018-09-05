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
  expect(dayjs().year()).toBe(moment().year())
})

it('Month', () => {
  expect(dayjs().month()).toBe(moment().month())
})

it('Day of Week', () => {
  expect(dayjs().day()).toBe(moment().day())
})

it('Date', () => {
  expect(dayjs().date()).toBe(moment().date())
})

it('Hour', () => {
  expect(dayjs().hour()).toBe(moment().hour())
})

it('Minute', () => {
  expect(dayjs().minute()).toBe(moment().minute())
})

it('Second', () => {
  expect(dayjs().second()).toBe(moment().second())
})

it('Millisecond', () => {
  expect(dayjs().millisecond()).toBe(moment().millisecond())
})

it('UTC Year', () => {
  expect(dayjs().utc().year()).toBe(moment().utc().year())
})

it('UTC Month', () => {
  expect(dayjs().utc().month()).toBe(moment().utc().month())
})

it('UTC Day of Week', () => {
  expect(dayjs().utc().day()).toBe(moment().utc().day())
})

it('UTC Date', () => {
  expect(dayjs().utc().date()).toBe(moment().utc().date())
})

it('UTC Hour', () => {
  expect(dayjs().utc().hour()).toBe(moment().utc().hour())
})

it('UTC Minute', () => {
  expect(dayjs().utc().minute()).toBe(moment().utc().minute())
})

it('UTC Second', () => {
  expect(dayjs().utc().second()).toBe(moment().utc().second())
})

it('UTC Millisecond', () => {
  expect(dayjs().utc().millisecond()).toBe(moment().utc().millisecond())
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

it('Set UTC Day', () => {
  expect(dayjs().utc().set('date', 30).valueOf()).toBe(moment().utc().set('date', 30).valueOf())
})

it('Set UTC Day of Week', () => {
  expect(dayjs().utc().set('day', 0).valueOf()).toBe(moment().utc().set('day', 0).valueOf())
})

it('Set UTC Month', () => {
  expect(dayjs().utc().set('month', 11).valueOf()).toBe(moment().utc().set('month', 11).valueOf())
})

it('Set UTC Year', () => {
  expect(dayjs().utc().set('year', 2008).valueOf()).toBe(moment().utc().set('year', 2008).valueOf())
})

it('Set UTC Hour', () => {
  expect(dayjs().utc().set('hour', 6).valueOf()).toBe(moment().utc().set('hour', 6).valueOf())
})

it('Set UTC Minute', () => {
  expect(dayjs().utc().set('minute', 59).valueOf()).toBe(moment().utc().set('minute', 59).valueOf())
})

it('Set UTC Second', () => {
  expect(dayjs().utc().set('second', 59).valueOf()).toBe(moment().utc().set('second', 59).valueOf())
})

it('Set UTC Millisecond', () => {
  expect(dayjs().utc().set('millisecond', 999).valueOf()).toBe(moment().utc().set('millisecond', 999).valueOf())
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

