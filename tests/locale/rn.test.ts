// TODO this is a minimal test; it should be changed to using plugins like e.g.
// 'RelativeTime', 'localizedFormat' and 'CustomParseFormat' that make use of
// the locale data to improve the test coverage

import { expect, test } from 'vitest'
import rn from '../../src/locale/rn'

test('should have the correct name', () => {
  expect(rn.name).toBe('rn')
})

test('should have 7 weekday names', () => {
  expect(rn.weekdays.length).toBe(7)
})

test('should have 7 short weekday names', () => {
  expect(rn.weekdaysShort).toBeDefined()
  expect(rn.weekdaysShort!.length).toBe(7)
})

test('should have 7 minimal weekday names', () => {
  expect(rn.weekdaysMin).toBeDefined()
  expect(rn.weekdaysMin!.length).toBe(7)
})

test('should have property named weekStart with value "1"', () => {
  expect(rn.weekStart).toBe(1)
})

test('should have no property named yearStart (uses default)', () => {
  expect(rn.yearStart).toBeUndefined()
})

test('should have 12 month names', () => {
  expect(rn.months.length).toBe(12)
})

test('should have 12 short month names', () => {
  expect(rn.monthsShort).toBeDefined()
  expect(rn.monthsShort!.length).toBe(12)
})

test('should have a method "ordinal"', () => {
  expect(rn.ordinal).toBeDefined()
  expect(rn.relativeTime).toBeTypeOf('object')
})

test('should have an object named "formats"', () => {
  expect(rn.formats).toBeDefined()
  expect(rn.formats).toBeTypeOf('object')
})

test('should have an object named "relativeTime"', () => {
  expect(rn.relativeTime).toBeDefined()
  expect(rn.relativeTime).toBeTypeOf('object')
})

test('should not have a method "meridiem"', () => {
  expect(rn.meridiem).toBeUndefined()
})
