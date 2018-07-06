import moment from 'moment'
import MockDate from 'mockdate'
import { gen } from 'testcheck'
import jasmineCheck from 'jasmine-check'
import dayjs from '../src'

jasmineCheck.install()

const seed = Number(process.env.TEST_SEED)

beforeEach(() => {
  MockDate.set(seed)
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

const unitsAndQuantities = [
  ['Date', gen.intWithin(0, 31)],
  ['Day', gen.intWithin(0, 6)],
  ['Month', gen.intWithin(0, 12)],
  ['Year', gen.intWithin(-5000, 5000)],
  ['Hour', gen.intWithin(0, 24)],
  ['Minute', gen.intWithin(0, 59)],
  ['Second', gen.intWithin(0, 59)],
  ['Millisecond', gen.intWithin(0, 999)]
]

unitsAndQuantities.forEach(([unit, genInt]) => {
  check.it(`Set ${unit}`, { seed }, genInt, (quantity) => {
    const dayjsDate = dayjs().set(unit, quantity)
    const momentDate = moment().set(unit, quantity)

    expect(dayjsDate.isValid()).toBe(true)
    expect(dayjsDate.valueOf()).toBe(momentDate.valueOf())
  })
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

