// TODO this is a minimal test; it should be changed to using plugins like e.g.
// 'RelativeTime', 'localizedFormat' and 'CustomParseFormat' that make use of
// the locale data to improve the test coverage

import { expect, test } from 'vitest'
import enGb from '../../src/locale/en-gb'

test('should have the correct name', () => {
  expect(enGb.name).toBe('en-gb')
})

test('should have 7 weekday names', () => {
  expect(enGb.weekdays.length).toBe(7)
})

test('should have 7 short weekday names', () => {
  expect(enGb.weekdaysShort?.length).toBe(7)
})

test('should have 7 minimal weekday names', () => {
  expect(enGb.weekdaysMin?.length).toBe(7)
})

test('should have a property named weekStart', () => {
  expect(enGb.weekStart).toBe(1)
})

test('should have a property named yearStart', () => {
  expect(enGb.yearStart).toBe(4)
})

test('should have 12 month names', () => {
  expect(enGb.months.length).toBe(12)
})

test('should have 12 short month names', () => {
  expect(enGb.monthsShort?.length).toBe(12)
})

test('should not have a method named "ordinal"', () => {
  expect(enGb.ordinal).toBeDefined()
  expect(enGb.relativeTime).toBeTypeOf('object')
})

test('should have have an object named "formats"', () => {
  expect(enGb.formats).toBeDefined()
  expect(enGb.formats).toBeTypeOf('object')
})

test('should have an object named "relativeTime"', () => {
  expect(enGb.relativeTime).toBeDefined()
  expect(enGb.relativeTime).toBeTypeOf('object')
})

test('should not have a method named "meridiem" (uses default)', () => {
  expect(enGb.meridiem).toBeUndefined()
})
