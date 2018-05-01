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

it('Set Day', () => {
  expect(dayjs().set('date', 30).valueOf()).toBe(moment().set('date', 30).valueOf())
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

it('Set with Date and Dayjs objects', () => {
  const date = new Date(2018, 5, 1)
  const newDayjs = dayjs(date)
  expect(dayjs().set(date).valueOf()).toBe(moment(date).valueOf())
  expect(dayjs().set(newDayjs).valueOf()).toBe(moment(date).valueOf())
})

it('Set Unknown String', () => {
  const newDate = dayjs().set('Unknown String', 1)
  expect(newDate.valueOf())
    .toBe(moment().set('Unknown String', 1).valueOf())
})

it('Set Not Int', () => {
  const newDate = dayjs().set('year', 'Not Int')
  expect(newDate.valueOf())
    .toBe(moment().set('year', 'Not Int').valueOf())
})

it('Immutable Set', () => {
  const dayjsA = dayjs()
  const dayjsB = dayjsA.set('year', 2011)
  const momentA = moment()
  const momentB = momentA.set('year', 2011)
  expect(dayjsA.valueOf()).not.toBe(dayjsB.valueOf())
  expect(momentA.valueOf()).toBe(momentB.valueOf())
})

