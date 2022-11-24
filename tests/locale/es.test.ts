// TODO this is a minimal test; it should be changed to using plugins like e.g.
// 'RelativeTime', 'localizedFormat' and 'CustomParseFormat' that make use of
// the locale data to improve the test coverage

import { expect, test } from 'vitest'
import es from '../../src/locale/es'

test('should have the correct name', () => {
  expect(es.name).toBe('es')
})

test('should have 7 weekday names', () => {
  expect(es.weekdays.length).toBe(7)
})

test('should have 7 short weekday names', () => {
  expect(es.weekdaysShort).toBeDefined()
  expect(es.weekdaysShort!.length).toBe(7)
})

test('should have 7 minimal weekday names', () => {
  expect(es.weekdaysMin).toBeDefined()
  expect(es.weekdaysMin!.length).toBe(7)
})

test('should have property weekStart with value "1"', () => {
  expect(es.weekStart).toBe(1)
})

test('should have no property named yearStart (uses default)', () => {
  expect(es.yearStart).toBeUndefined()
})

test('should have 12 month names', () => {
  expect(es.months.length).toBe(12)
})

test('should have 12 short month names', () => {
  expect(es.monthsShort).toBeDefined()
  expect(es.monthsShort!.length).toBe(12)
})

test('should have a method "ordinal"', () => {
  expect(es.ordinal).toBeDefined()
  expect(es.relativeTime).toBeTypeOf('object')
})

test('should have an object named "formats"', () => {
  expect(es.formats).toBeDefined()
  expect(es.formats).toBeTypeOf('object')
})

test('should have an object named "relativeTime"', () => {
  expect(es.relativeTime).toBeDefined()
  expect(es.relativeTime).toBeTypeOf('object')
})

test('should not have a method "meridiem"', () => {
  expect(es.meridiem).toBeUndefined()
})
