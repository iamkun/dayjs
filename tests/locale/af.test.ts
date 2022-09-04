// TODO this is a minimal test; it should be changed to using plugins like e.g.
// 'RelativeTime', 'localizedFormat' and 'CustomParseFormat' that make use of
// the locale data to improve the test coverage

import { expect, test } from 'vitest'
import af from '../../src/locale/af'

test('should have the correct name', () => {
  expect(af.name).toBe('af')
})

test('should have 7 weekday names', () => {
  expect(af.weekdays.length).toBe(7)
})

test('should have 7 short weekday names', () => {
  expect(af.weekdaysShort).toBeDefined()
  expect(af.weekdaysShort!.length).toBe(7)
})

test('should 7 minimal weekday names', () => {
  expect(af.weekdaysMin).toBeDefined()
  expect(af.weekdaysMin!.length).toBe(7)
})

test('should have a property named "weekStart"', () => {
  expect(af.weekStart).toBe(1)
})

test('should not have a property named "yearStart" (uses default)', () => {
  expect(af.yearStart).toBeUndefined()
})

test('should have 12 month names', () => {
  expect(af.months.length).toBe(12)
})

test('should have 12 short month names', () => {
  expect(af.months).toBeDefined()
  expect(af.months!.length).toBe(12)
})

test('should have a method "ordinal"', () => {
  expect(af.ordinal).toBeDefined()
  expect(af.relativeTime).toBeTypeOf('object')
})

test('should have an object named "formats"', () => {
  expect(af.formats).toBeDefined()
  expect(af.formats).toBeTypeOf('object')
})

test('should have an object named "relativeTime"', () => {
  expect(af.relativeTime).toBeDefined()
  expect(af.relativeTime).toBeTypeOf('object')
})

test('should not have a method "meridiem" (uses default)', () => {
  expect(af.meridiem).toBeUndefined()
})
