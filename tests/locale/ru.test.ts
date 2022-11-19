// TODO this is a minimal test; it should be changed to using plugins like e.g.
// 'RelativeTime', 'localizedFormat' and 'CustomParseFormat' that make use of
// the locale data to improve the test coverage

import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import dayjs from '../../src'
import ru from '../../src/locale/ru'
import { expectSame } from '../_util'
import type { MonthNamesFunction } from 'src/locale'

const originalLocale = dayjs.locale()

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date())
})

afterEach(() => {
  vi.useRealTimers()
  dayjs.locale(originalLocale)
})

test('should have the correct name', () => {
  expect(ru.name).toBe('ru')
})

test('should have 7 weekday names', () => {
  expect(ru.weekdays.length).toBe(7)
})

test('should have 7 short weekday names', () => {
  expect(ru.weekdaysShort).toBeDefined()
  expect(ru.weekdaysShort!.length).toBe(7)
})

test('should have 7 minimal weekday names', () => {
  expect(ru.weekdaysMin).toBeDefined()
  expect(ru.weekdaysMin!.length).toBe(7)
})

test('should have property weekStart with value "1"', () => {
  expect(ru.weekStart).toBe(1)
})

test('should have property yearStart with value "4"', () => {
  expect(ru.yearStart).toBe(4)
})

test('should have 12 month names', () => {
  expect(ru.months).toBeDefined()
  expect(Array.isArray(ru.months)).toBe(false)
  if (!Array.isArray(ru.months)) {
    const monthsShort = ru.monthsShort as MonthNamesFunction
    expect(monthsShort).toHaveProperty('standalone')
    expect(monthsShort.standalone.length).toBe(12)
    expect(monthsShort).toHaveProperty('format')
    expect(monthsShort.format.length).toBe(12)
  } else {
    expect(ru.months).toHaveProperty('standalone')
  }
})

test('should have 12 short month names', () => {
  expect(ru.monthsShort).toBeDefined()
  expect(Array.isArray(ru.monthsShort)).toBe(false)
  if (!Array.isArray(ru.monthsShort)) {
    const monthsShort = ru.monthsShort as MonthNamesFunction
    expect(monthsShort).toHaveProperty('standalone')
    expect(monthsShort.standalone.length).toBe(12)
    expect(monthsShort).toHaveProperty('format')
    expect(monthsShort.format.length).toBe(12)
  } else {
    expect(ru.monthsShort).toHaveProperty('standalone')
  }
})

test('should have a method "ordinal"', () => {
  expect(ru.ordinal).toBeDefined()
  expect(ru.relativeTime).toBeTypeOf('object')
})

test('should have an object named "formats"', () => {
  expect(ru.formats).toBeDefined()
  expect(ru.formats).toBeTypeOf('object')
})

test('should have an object named "relativeTime"', () => {
  expect(ru.relativeTime).toBeDefined()
  expect(ru.relativeTime).toBeTypeOf('object')
})

test('should have a method "meridiem"', () => {
  expect(ru.meridiem).toBeDefined()
  expect(ru.meridiem).toBeTypeOf('function')
})

test.each(['DD MMMM YYYY MMM', 'MMMM', 'MMM'])(
  'Format Month using "%s" with locale function',
  (testFormat) => {
    for (let i = 0; i <= 7; i += 1) {
      expectSame((dayjs) =>
        dayjs().locale('ru').add(i, 'day').format(testFormat)
      )
    }
  }
)

// TODO add tests using "RelativeTime: Time from X"

describe.each([
  { dateString: '2020-01-01 03:00:00', expected: 'ночи' },
  { dateString: '2020-01-01 11:00:00', expected: 'утра' },
  { dateString: '2020-01-01 16:00:00', expected: 'дня' },
  { dateString: '2020-01-01 20:00:00', expected: 'вечера' },
])('Format "$dateString" as meridiem', ({ dateString, expected }) => {
  test('Format Hour (12-hour) to "${expected}"', () => {
    expect(dayjs(dateString).locale('ru').format('A')).toBe(expected)
  })
})
