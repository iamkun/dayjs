// TODO this is a minimal test; it should be changed to using plugins like e.g.
// 'RelativeTime', 'localizedFormat' and 'CustomParseFormat' that make use of
// the locale data to improve the test coverage

import { expect, test } from 'vitest'
import th from '../../src/locale/th'

test('should have the correct name', () => {
  expect(th.name).toBe('th')
})

test('should have 7 weekday names', () => {
  expect(th.weekdays.length).toBe(7)
})

test('should have 7 short weekday names', () => {
  expect(th.weekdaysShort).toBeDefined()
  expect(th.weekdaysShort!.length).toBe(7)
})

test('should 7 minimal weekday names', () => {
  expect(th.weekdaysMin).toBeDefined()
  expect(th.weekdaysMin!.length).toBe(7)
})

test('should have no property named weekStart (uses default)', () => {
  expect(th.weekStart).toBeUndefined()
})

test('should no property named yearStart (uses default)', () => {
  expect(th.yearStart).toBeUndefined()
})

test('should have 12 month names', () => {
  expect(th.months.length).toBe(12)
})

test('should have 12 short month names', () => {
  expect(th.months).toBeDefined()
  expect(th.months!.length).toBe(12)
})

test('should have a method "ordinal"', () => {
  expect(th.ordinal).toBeDefined()
  expect(th.relativeTime).toBeTypeOf('object')
})

test('should have an object named "formats"', () => {
  expect(th.formats).toBeDefined()
  expect(th.formats).toBeTypeOf('object')
})

test('should have an object named "relativeTime"', () => {
  expect(th.relativeTime).toBeDefined()
  expect(th.relativeTime).toBeTypeOf('object')
})

test('should have no method named "meridiem"', () => {
  expect(th.meridiem).toBeUndefined()
})
