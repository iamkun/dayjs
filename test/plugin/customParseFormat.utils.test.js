import MockDate from 'mockdate'
import { daysInMonth } from '../../src/plugin/customParseFormat/utils'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Days in Month for months with constant length', () => {
  expect(daysInMonth(2022, 5)).toBe(31)
  expect(daysInMonth(2013, 9)).toBe(30)
})

it('Days in Month for february', () => {
  expect(daysInMonth(2003, 2)).toBe(28)
  expect(daysInMonth(2100, 2)).toBe(28)
  expect(daysInMonth(2000, 2)).toBe(29)
  expect(daysInMonth(2004, 2)).toBe(29)
})

it('Days in Month with wrong parameter types', () => {
  expect(daysInMonth(Number.NaN, 5)).toBeNaN()
  expect(daysInMonth(2013, Number.NaN)).toBeNaN()
})
