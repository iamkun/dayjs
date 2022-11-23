// TODO this is a minimal test; it should be changed to using plugins like e.g.
// 'RelativeTime', 'localizedFormat' and 'CustomParseFormat' that make use of
// the locale data to improve the test coverage

import { expect, test } from 'vitest'
import fr from '../../src/locale/fr'

test('should have the correct name', () => {
  expect(fr.name).toBe('fr')
})

test('should have 7 weekday names', () => {
  expect(fr.weekdays.length).toBe(7)
})

test('should have 7 short weekday names', () => {
  expect(fr.weekdaysShort).toBeDefined()
  expect(fr.weekdaysShort!.length).toBe(7)
})

test('should have 7 minimal weekday names', () => {
  expect(fr.weekdaysMin).toBeDefined()
  expect(fr.weekdaysMin!.length).toBe(7)
})

test('should have property weekStart with value "1"', () => {
  expect(fr.weekStart).toBe(1)
})

test('should have property yearStart with value "4"', () => {
  expect(fr.yearStart).toBe(4)
})

test('should have 12 month names', () => {
  expect(fr.months.length).toBe(12)
})

test('should have 12 short month names', () => {
  expect(fr.monthsShort).toBeDefined()
  expect(fr.monthsShort!.length).toBe(12)
})

test('should have a method "ordinal"', () => {
  expect(fr.ordinal).toBeDefined()
  expect(fr.relativeTime).toBeTypeOf('object')
})

test('should have an object named "formats"', () => {
  expect(fr.formats).toBeDefined()
  expect(fr.formats).toBeTypeOf('object')
})

test('should have an object named "relativeTime"', () => {
  expect(fr.relativeTime).toBeDefined()
  expect(fr.relativeTime).toBeTypeOf('object')
})

test('should not have a method "meridiem"', () => {
  expect(fr.meridiem).toBeUndefined()
})
