// TODO this is a minimal test; it should be changed to using plugins like e.g.
// 'RelativeTime', 'localizedFormat' and 'CustomParseFormat' that make use of
// the locale data to improve the test coverage

import { expect, test } from 'vitest'
import ja from '../../src/locale/ja'

test('should have the correct name', () => {
  expect(ja.name).toBe('ja')
})

test('should have 7 weekday names', () => {
  expect(ja.weekdays.length).toBe(7)
})

test('should have 7 short weekday names', () => {
  expect(ja.weekdaysShort).toBeDefined()
  expect(ja.weekdaysShort!.length).toBe(7)
})

test('should have 7 minimal weekday names', () => {
  expect(ja.weekdaysMin).toBeDefined()
  expect(ja.weekdaysMin!.length).toBe(7)
})

test('should have no property named weekStart (uses default)', () => {
  expect(ja.weekStart).toBeUndefined()
})

test('should have no property named yearStart (uses default)', () => {
  expect(ja.yearStart).toBeUndefined()
})

test('should have 12 month names', () => {
  expect(ja.months.length).toBe(12)
})

test('should have 12 short month names', () => {
  expect(ja.monthsShort).toBeDefined()
  expect(ja.monthsShort!.length).toBe(12)
})

test('should have a method "ordinal"', () => {
  expect(ja.ordinal).toBeDefined()
  expect(ja.relativeTime).toBeTypeOf('object')
})

test('should have an object named "formats"', () => {
  expect(ja.formats).toBeDefined()
  expect(ja.formats).toBeTypeOf('object')
})

test('should have an object named "relativeTime"', () => {
  expect(ja.relativeTime).toBeDefined()
  expect(ja.relativeTime).toBeTypeOf('object')
})

test('should have a method "meridiem"', () => {
  expect(ja.meridiem).toBeDefined()
  expect(ja.meridiem).toBeTypeOf('function')
})
