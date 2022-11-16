// TODO this is a minimal test; it should be changed to using plugins like e.g.
// 'RelativeTime', 'localizedFormat' and 'CustomParseFormat' that make use of
// the locale data to improve the test coverage

import { expect, test } from 'vitest'
import en from '../../src/locale/en'

test('should have the correct name', () => {
  expect(en.name).toBe('en')
})

test('should have 7 weekday names', () => {
  expect(en.weekdays.length).toBe(7)
})

test('should have no short weekday names (uses default)', () => {
  expect(en.weekdaysShort).toBeUndefined()
})

test('should have no minimal weekday names (uses default)', () => {
  expect(en.weekdaysMin).toBeUndefined()
})

test('should have no property named weekStart (uses default)', () => {
  expect(en.weekStart).toBeUndefined()
})

test('should have no property named yearStart (uses default)', () => {
  expect(en.yearStart).toBeUndefined()
})

test('should have 12 month names', () => {
  expect(en.months.length).toBe(12)
})

test('should have no short month names (uses default)', () => {
  expect(en.monthsShort).toBeUndefined()
})

test('should not have a method named "ordinal" (uses default)', () => {
  expect(en.ordinal).toBeUndefined()
})

test('should have not have an object named "formats" (uses default)', () => {
  expect(en.formats).toBeUndefined()
})

test('should not have an object named "relativeTime" (uses default)', () => {
  expect(en.relativeTime).toBeUndefined()
})

test('should not have a method named "meridiem" (uses default)', () => {
  expect(en.meridiem).toBeUndefined()
})
