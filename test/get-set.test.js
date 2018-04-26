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
  const d = dayjs().set('date', 30)
  expect(d.date()).toBe(30)
})

it('Set Month', () => {
  const d = dayjs().set('month', 11)
  expect(d.month()).toBe(11)
})

it('Set Year', () => {
  const d = dayjs().set('year', 2015)
  expect(d.year()).toBe(2015)
})

it('Set Hour', () => {
  const d = dayjs().set('hour', 6)
  expect(d.hour()).toBe(6)
})

it('Set Minute', () => {
  const d = dayjs().set('minute', 50)
  expect(d.minute()).toBe(50)
})

it('Set Second', () => {
  const d = dayjs().set('second', 59)
  expect(d.second()).toBe(59)
})

it('Set Unknown String', () => {
  const newDate = dayjs().set('Unknown String', 1)
  expect(newDate.unix())
    .toBe(moment().set('Unknown String', 1).unix())
})

it('Set Not Int', () => {
  const newDate = dayjs().set('year', 'Not Int')
  expect(newDate.unix())
    .toBe(moment().set('year', 'Not Int').unix())
})

it('Immutable Set', () => {
  const dayjsA = dayjs()
  const dayjsB = dayjsA.set('year', 2011)
  const momentA = moment()
  const momentB = momentA.set('year', 2011)
  expect(dayjsA.unix()).not.toBe(dayjsB.unix())
  expect(momentA.unix()).toBe(momentB.unix())
})

