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

