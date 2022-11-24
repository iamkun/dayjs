// TODO this is a minimal test; it should be changed to using plugins like e.g.
// 'RelativeTime', 'localizedFormat' and 'CustomParseFormat' that make use of
// the locale data to improve the test coverage

import { expect, test } from 'vitest'
import zhCn from '../../src/locale/zh-cn'

test('should have the correct name', () => {
  expect(zhCn.name).toBe('zh-cn')
})

test('should have 7 weekday names', () => {
  expect(zhCn.weekdays.length).toBe(7)
})

test('should have 7 short weekday names', () => {
  expect(zhCn.weekdaysShort).toBeDefined()
  expect(zhCn.weekdaysShort!.length).toBe(7)
})

test('should have 7 minimal weekday names', () => {
  expect(zhCn.weekdaysMin).toBeDefined()
  expect(zhCn.weekdaysMin!.length).toBe(7)
})

test('should have a property named "weekStart"', () => {
  expect(zhCn.weekStart).toBe(1)
})

test('should have a property named "yearStart"', () => {
  expect(zhCn.yearStart).toBe(4)
})

test('should have 12 month names', () => {
  expect(zhCn.months.length).toBe(12)
})

test('should have 12 short month names', () => {
  expect(zhCn.months).toBeDefined()
  expect(zhCn.months!.length).toBe(12)
})

test('should have a method "ordinal"', () => {
  expect(zhCn.ordinal).toBeDefined()
  expect(zhCn.relativeTime).toBeTypeOf('object')
})

test('should have an object named "formats"', () => {
  expect(zhCn.formats).toBeDefined()
  expect(zhCn.formats).toBeTypeOf('object')
})

test('should have an object named "relativeTime"', () => {
  expect(zhCn.relativeTime).toBeDefined()
  expect(zhCn.relativeTime).toBeTypeOf('object')
})

test('should have a method "meridiem"', () => {
  expect(zhCn.meridiem).toBeDefined()
  expect(zhCn.meridiem).toBeTypeOf('function')
})
