import MockDate from 'mockdate'
import dayjs from '../../src/index'
import businessDays from '../../src/plugin/businessDays'

dayjs.extend(businessDays)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

test('Is business days', () => {
  expect(dayjs(new Date(2023, 0, 8, 3)).isBusinessDay()).toBe(false, 'if business days')
  expect(dayjs(new Date(2023, 0, 9, 3)).isBusinessDay()).toBe(true, 'if business days')
  expect(dayjs(new Date(2023, 0, 10, 3)).isBusinessDay()).toBe(true, 'if business days')
  expect(dayjs(new Date(2023, 0, 11, 3)).isBusinessDay()).toBe(true, 'if business days')
  expect(dayjs(new Date(2023, 0, 12, 3)).isBusinessDay()).toBe(true, 'if business days')
  expect(dayjs(new Date(2023, 0, 13, 3)).isBusinessDay()).toBe(true, 'if business days')
  expect(dayjs(new Date(2023, 0, 14, 3)).isBusinessDay()).toBe(false, 'if business days')
})

test('Add business days', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 1, 3)).isSame(dayjs(new Date(2023, 0, 1, 3)).addBusinessDays(0))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 3, 3)).isSame(dayjs(new Date(2023, 0, 1, 3)).addBusinessDays(2))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 6, 3)).isSame(dayjs(new Date(2023, 0, 1, 3)).addBusinessDays(5))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 1, 3)).addBusinessDays(8))).toBe(true, 'Add 8 business days match')

  expect(dayjs(new Date(2023, 0, 2, 3)).isSame(dayjs(new Date(2023, 0, 2, 3)).addBusinessDays(0))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 4, 3)).isSame(dayjs(new Date(2023, 0, 2, 3)).addBusinessDays(2))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 9, 3)).isSame(dayjs(new Date(2023, 0, 2, 3)).addBusinessDays(5))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 12, 3)).isSame(dayjs(new Date(2023, 0, 2, 3)).addBusinessDays(8))).toBe(true, 'Add 8 business days match')

  expect(dayjs(new Date(2023, 0, 3, 3)).isSame(dayjs(new Date(2023, 0, 3, 3)).addBusinessDays(0))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 5, 3)).isSame(dayjs(new Date(2023, 0, 3, 3)).addBusinessDays(2))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 10, 3)).isSame(dayjs(new Date(2023, 0, 3, 3)).addBusinessDays(5))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 3, 3)).addBusinessDays(8))).toBe(true, 'Add 8 business days match')

  expect(dayjs(new Date(2023, 0, 4, 3)).isSame(dayjs(new Date(2023, 0, 4, 3)).addBusinessDays(0))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 6, 3)).isSame(dayjs(new Date(2023, 0, 4, 3)).addBusinessDays(2))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 4, 3)).addBusinessDays(5))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 16, 3)).isSame(dayjs(new Date(2023, 0, 4, 3)).addBusinessDays(8))).toBe(true, 'Add 8 business days match')

  expect(dayjs(new Date(2023, 0, 5, 3)).isSame(dayjs(new Date(2023, 0, 5, 3)).addBusinessDays(0))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 9, 3)).isSame(dayjs(new Date(2023, 0, 5, 3)).addBusinessDays(2))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 12, 3)).isSame(dayjs(new Date(2023, 0, 5, 3)).addBusinessDays(5))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 17, 3)).isSame(dayjs(new Date(2023, 0, 5, 3)).addBusinessDays(8))).toBe(true, 'Add 8 business days match')

  expect(dayjs(new Date(2023, 0, 6, 3)).isSame(dayjs(new Date(2023, 0, 6, 3)).addBusinessDays(0))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 10, 3)).isSame(dayjs(new Date(2023, 0, 6, 3)).addBusinessDays(2))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 6, 3)).addBusinessDays(5))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 18, 3)).isSame(dayjs(new Date(2023, 0, 6, 3)).addBusinessDays(8))).toBe(true, 'Add 8 business days match')

  expect(dayjs(new Date(2023, 0, 7, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).addBusinessDays(0))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 10, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).addBusinessDays(2))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).addBusinessDays(5))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 18, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).addBusinessDays(8))).toBe(true, 'Add 8 business days match')

  // Specific
  expect(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 0, 31, 3, 4, 5, 20)).addBusinessDays(1))).toBe(true, 'Month change forward')
  expect(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)).isSame(dayjs(new Date(2022, 11, 31, 3, 4, 5, 20)).addBusinessDays(1))).toBe(true, 'Year change forward')

  // Same (for coverage)
  expect(dayjs(new Date(2023, 0, 18, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).addBusinessDays(8))).toBe(true, 'Add 8 business days match')
  expect(dayjs(new Date(2023, 0, 18, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).addBusinessDays(8, 'd'))).toBe(true, 'Add 8 business days match')
})

test('Add business days (core function)', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 1, 3)).isSame(dayjs(new Date(2023, 0, 1, 3)).$addBusinessDays(0))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 3, 3)).isSame(dayjs(new Date(2023, 0, 1, 3)).$addBusinessDays(2))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 6, 3)).isSame(dayjs(new Date(2023, 0, 1, 3)).$addBusinessDays(5))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 1, 3)).$addBusinessDays(8))).toBe(true, 'Add 8 business days match')

  expect(dayjs(new Date(2023, 0, 4, 3)).isSame(dayjs(new Date(2023, 0, 4, 3)).$addBusinessDays(0))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 6, 3)).isSame(dayjs(new Date(2023, 0, 4, 3)).$addBusinessDays(2))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 4, 3)).$addBusinessDays(5))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 16, 3)).isSame(dayjs(new Date(2023, 0, 4, 3)).$addBusinessDays(8))).toBe(true, 'Add 8 business days match')

  expect(dayjs(new Date(2023, 0, 7, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).$addBusinessDays(0))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 10, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).$addBusinessDays(2))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).$addBusinessDays(5))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 18, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).$addBusinessDays(8))).toBe(true, 'Add 8 business days match')

  // Specific
  expect(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 0, 31, 3, 4, 5, 20)).$addBusinessDays(1))).toBe(true, 'Month change forward')
  expect(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)).isSame(dayjs(new Date(2022, 11, 31, 3, 4, 5, 20)).$addBusinessDays(1))).toBe(true, 'Year change forward')
})

test('Add business days (week)', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 6, 3)).isSame(dayjs(new Date(2023, 0, 1, 3)).addBusinessDays(1, 'w'))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 9, 3)).isSame(dayjs(new Date(2023, 0, 2, 3)).addBusinessDays(1, 'w'))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 10, 3)).isSame(dayjs(new Date(2023, 0, 3, 3)).addBusinessDays(1, 'w'))).toBe(true, 'Add 5 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 4, 3)).addBusinessDays(1, 'w'))).toBe(true, 'Add 8 business days match')
  expect(dayjs(new Date(2023, 0, 12, 3)).isSame(dayjs(new Date(2023, 0, 5, 3)).addBusinessDays(1, 'w'))).toBe(true, 'Add 0 business days match')
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 6, 3)).addBusinessDays(1, 'w'))).toBe(true, 'Add 2 business days match')
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 7, 3)).addBusinessDays(1, 'w'))).toBe(true, 'Add 5 business days match')

  expect(dayjs(new Date(2023, 0, 23, 3)).isSame(dayjs(new Date(2023, 0, 9, 3)).addBusinessDays(2, 'w'))).toBe(true, 'Subtract 0 business days match')

  // Specific
  expect(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 0, 25, 3, 4, 5, 20)).addBusinessDays(1, 'w'))).toBe(true, 'Month change forward')
  expect(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)).isSame(dayjs(new Date(2022, 11, 26, 3, 4, 5, 20)).addBusinessDays(1, 'w'))).toBe(true, 'Year change forward')
})

test('Subtract business days', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 15, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).subtractBusinessDays(0))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 12, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).subtractBusinessDays(2))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 9, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).subtractBusinessDays(5))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 4, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')

  expect(dayjs(new Date(2023, 0, 16, 3)).isSame(dayjs(new Date(2023, 0, 16, 3)).subtractBusinessDays(0))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 12, 3)).isSame(dayjs(new Date(2023, 0, 16, 3)).subtractBusinessDays(2))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 9, 3)).isSame(dayjs(new Date(2023, 0, 16, 3)).subtractBusinessDays(5))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 4, 3)).isSame(dayjs(new Date(2023, 0, 16, 3)).subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')

  expect(dayjs(new Date(2023, 0, 17, 3)).isSame(dayjs(new Date(2023, 0, 17, 3)).subtractBusinessDays(0))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 17, 3)).subtractBusinessDays(2))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 10, 3)).isSame(dayjs(new Date(2023, 0, 17, 3)).subtractBusinessDays(5))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 5, 3)).isSame(dayjs(new Date(2023, 0, 17, 3)).subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')

  expect(dayjs(new Date(2023, 0, 18, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).subtractBusinessDays(0))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 16, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).subtractBusinessDays(2))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).subtractBusinessDays(5))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 6, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')

  expect(dayjs(new Date(2023, 0, 19, 3)).isSame(dayjs(new Date(2023, 0, 19, 3)).subtractBusinessDays(0))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 17, 3)).isSame(dayjs(new Date(2023, 0, 19, 3)).subtractBusinessDays(2))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 12, 3)).isSame(dayjs(new Date(2023, 0, 19, 3)).subtractBusinessDays(5))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 9, 3)).isSame(dayjs(new Date(2023, 0, 19, 3)).subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')

  expect(dayjs(new Date(2023, 0, 20, 3)).isSame(dayjs(new Date(2023, 0, 20, 3)).subtractBusinessDays(0))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 18, 3)).isSame(dayjs(new Date(2023, 0, 20, 3)).subtractBusinessDays(2))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 20, 3)).subtractBusinessDays(5))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 10, 3)).isSame(dayjs(new Date(2023, 0, 20, 3)).subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')

  expect(dayjs(new Date(2023, 0, 21, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).subtractBusinessDays(0))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 19, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).subtractBusinessDays(2))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 16, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).subtractBusinessDays(5))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')

  // Specific
  expect(dayjs(new Date(2023, 0, 31, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)).subtractBusinessDays(1))).toBe(true, 'Month change backward')
  expect(dayjs(new Date(2022, 11, 30, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 0, 1, 3, 4, 5, 20)).subtractBusinessDays(1))).toBe(true, 'Year change backward')

  // Same (for coverage)
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).subtractBusinessDays(8, 'd'))).toBe(true, 'Subtract 8 business days match')
})

test('Subtract business days (core function)', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 15, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).$subtractBusinessDays(0))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 12, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).$subtractBusinessDays(2))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 9, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).$subtractBusinessDays(5))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 4, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).$subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')

  expect(dayjs(new Date(2023, 0, 18, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).$subtractBusinessDays(0))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 16, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).$subtractBusinessDays(2))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).$subtractBusinessDays(5))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 6, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).$subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')

  expect(dayjs(new Date(2023, 0, 21, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).$subtractBusinessDays(0))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 19, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).$subtractBusinessDays(2))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 16, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).$subtractBusinessDays(5))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).$subtractBusinessDays(8))).toBe(true, 'Subtract 8 business days match')

  // Specific
  expect(dayjs(new Date(2023, 0, 31, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)).$subtractBusinessDays(1))).toBe(true, 'Month change backward')
  expect(dayjs(new Date(2022, 11, 30, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 0, 1, 3, 4, 5, 20)).$subtractBusinessDays(1))).toBe(true, 'Year change backward')
})

test('Subtract business days (week)', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 9, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).subtractBusinessDays(1, 'w'))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 9, 3)).isSame(dayjs(new Date(2023, 0, 16, 3)).subtractBusinessDays(1, 'w'))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 10, 3)).isSame(dayjs(new Date(2023, 0, 17, 3)).subtractBusinessDays(1, 'w'))).toBe(true, 'Subtract 5 business days match')
  expect(dayjs(new Date(2023, 0, 11, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).subtractBusinessDays(1, 'w'))).toBe(true, 'Subtract 8 business days match')
  expect(dayjs(new Date(2023, 0, 12, 3)).isSame(dayjs(new Date(2023, 0, 19, 3)).subtractBusinessDays(1, 'w'))).toBe(true, 'Subtract 0 business days match')
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 20, 3)).subtractBusinessDays(1, 'w'))).toBe(true, 'Subtract 2 business days match')
  expect(dayjs(new Date(2023, 0, 16, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).subtractBusinessDays(1, 'w'))).toBe(true, 'Subtract 5 business days match')

  expect(dayjs(new Date(2023, 0, 9, 3)).isSame(dayjs(new Date(2023, 0, 23, 3)).subtractBusinessDays(2, 'w'))).toBe(true, 'Subtract 0 business days match')

  // Specific
  expect(dayjs(new Date(2023, 0, 25, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)).subtractBusinessDays(1, 'w'))).toBe(true, 'Month change backward')
  expect(dayjs(new Date(2022, 11, 26, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 0, 1, 3, 4, 5, 20)).subtractBusinessDays(1, 'w'))).toBe(true, 'Year change backward')
})

test('Negate difference business days', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 15, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 15, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 15, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 17, 3)))).toBe(-2, '-2 business days difference match')
  expect(dayjs(new Date(2023, 0, 15, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 20, 3)))).toBe(-5, '-5 business days difference match')
  expect(dayjs(new Date(2023, 0, 15, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 25, 3)))).toBe(-8, '-8 business days difference match')

  expect(dayjs(new Date(2023, 0, 16, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 16, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 16, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 18, 3)))).toBe(-2, '-2 business days difference match')
  expect(dayjs(new Date(2023, 0, 16, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 23, 3)))).toBe(-5, '-5 business days difference match')
  expect(dayjs(new Date(2023, 0, 16, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 26, 3)))).toBe(-8, '-8 business days difference match')

  expect(dayjs(new Date(2023, 0, 17, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 17, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 17, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 19, 3)))).toBe(-2, '-2 business days difference match')
  expect(dayjs(new Date(2023, 0, 17, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 24, 3)))).toBe(-5, '-5 business days difference match')
  expect(dayjs(new Date(2023, 0, 17, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 27, 3)))).toBe(-8, '-8 business days difference match')

  expect(dayjs(new Date(2023, 0, 18, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 18, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 18, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 20, 3)))).toBe(-2, '-2 business days difference match')
  expect(dayjs(new Date(2023, 0, 18, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 25, 3)))).toBe(-5, '-5 business days difference match')
  expect(dayjs(new Date(2023, 0, 18, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 30, 3)))).toBe(-8, '-8 business days difference match')

  expect(dayjs(new Date(2023, 0, 19, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 19, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 19, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 23, 3)))).toBe(-2, '-2 business days difference match')
  expect(dayjs(new Date(2023, 0, 19, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 26, 3)))).toBe(-5, '-5 business days difference match')
  expect(dayjs(new Date(2023, 0, 19, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 31, 3)))).toBe(-8, '-8 business days difference match')

  expect(dayjs(new Date(2023, 0, 20, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 20, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 20, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 24, 3)))).toBe(-2, '-2 business days difference match')
  expect(dayjs(new Date(2023, 0, 20, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 27, 3)))).toBe(-5, '-5 business days difference match')
  expect(dayjs(new Date(2023, 0, 20, 3)).diffBusinessDays(dayjs(new Date(2023, 1, 1, 3)))).toBe(-8, '-8 business days difference match')

  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 21, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 24, 3)))).toBe(-2, '-2 business days difference match')
  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 27, 3)))).toBe(-5, '-5 business days difference match')
  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 1, 1, 3)))).toBe(-8, '-8 business days difference match')

  // Specific
  expect(dayjs(new Date(2023, 0, 31, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)))).toBe(-1, 'Month change backward')
  expect(dayjs(new Date(2022, 11, 31, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2023, 0, 1, 3, 4, 5, 20)))).toBe(null, 'Year change backward') // Infinite loop, incorrect date in diffBusinessDays
  expect(dayjs(new Date(2022, 11, 31, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)))).toBe(-1, 'Year change backward')

  // Same (for coverage)
  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 1, 1, 3)))).toBe(-8, '-8 business days difference match')
  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 1, 1, 3)), 'd')).toBe(-8, '-8 business days difference match')
})

test('Negate difference business days (week)', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 9, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 16, 3)), 'w')).toBe(-1, '-1 (1 week business = 5 business day) business days difference match')
  expect(dayjs(new Date(2023, 0, 10, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 17, 3)), 'w')).toBe(-1, '-1 (1 week business = 5 business day) business days difference match')
  expect(dayjs(new Date(2023, 0, 11, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 18, 3)), 'w')).toBe(-1, '-1 (1 week business = 5 business day) business days difference match')
  expect(dayjs(new Date(2023, 0, 12, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 19, 3)), 'w')).toBe(-1, '-1 (1 week business = 5 business day) business days difference match')
  expect(dayjs(new Date(2023, 0, 13, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 20, 3)), 'w')).toBe(-1, '-1 (1 week business = 5 business day) business days difference match')

  // Specific
  expect(dayjs(new Date(2023, 0, 25, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)), 'w')).toBe(-1, '(1 week business = 5 business day) Month change backward')
  expect(dayjs(new Date(2022, 11, 31, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2023, 0, 1, 3, 4, 5, 20)), 'w')).toBe(null, '(1 week business = 5 business day) Year change backward') // Infinite loop, incorrect date in diffBusinessDays
  expect(dayjs(new Date(2022, 11, 26, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)), 'w')).toBe(-1, '(1 week business = 5 business day) Year change backward')
})

test('Positive difference business days', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 15, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 15, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 15, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 12, 3)))).toBe(2, '2 business days difference match')
  expect(dayjs(new Date(2023, 0, 15, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 9, 3)))).toBe(5, '5 business days difference match')
  expect(dayjs(new Date(2023, 0, 15, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 4, 3)))).toBe(8, '8 business days difference match')

  expect(dayjs(new Date(2023, 0, 16, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 16, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 16, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 12, 3)))).toBe(2, '2 business days difference match')
  expect(dayjs(new Date(2023, 0, 16, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 9, 3)))).toBe(5, '5 business days difference match')
  expect(dayjs(new Date(2023, 0, 16, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 4, 3)))).toBe(8, '8 business days difference match')

  expect(dayjs(new Date(2023, 0, 17, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 17, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 17, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 13, 3)))).toBe(2, '2 business days difference match')
  expect(dayjs(new Date(2023, 0, 17, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 10, 3)))).toBe(5, '5 business days difference match')
  expect(dayjs(new Date(2023, 0, 17, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 5, 3)))).toBe(8, '8 business days difference match')

  expect(dayjs(new Date(2023, 0, 18, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 18, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 18, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 16, 3)))).toBe(2, '2 business days difference match')
  expect(dayjs(new Date(2023, 0, 18, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 11, 3)))).toBe(5, '5 business days difference match')
  expect(dayjs(new Date(2023, 0, 18, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 6, 3)))).toBe(8, '8 business days difference match')

  expect(dayjs(new Date(2023, 0, 19, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 19, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 19, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 17, 3)))).toBe(2, '2 business days difference match')
  expect(dayjs(new Date(2023, 0, 19, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 12, 3)))).toBe(5, '5 business days difference match')
  expect(dayjs(new Date(2023, 0, 19, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 9, 3)))).toBe(8, '8 business days difference match')

  expect(dayjs(new Date(2023, 0, 20, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 20, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 20, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 18, 3)))).toBe(2, '2 business days difference match')
  expect(dayjs(new Date(2023, 0, 20, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 13, 3)))).toBe(5, '5 business days difference match')
  expect(dayjs(new Date(2023, 0, 20, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 10, 3)))).toBe(8, '8 business days difference match')

  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 21, 3)))).toBe(0, '0 business days difference match')
  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 19, 3)))).toBe(2, '2 business days difference match')
  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 16, 3)))).toBe(5, '5 business days difference match')
  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 11, 3)))).toBe(8, '8 business days difference match')

  // Specific
  expect(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2023, 0, 31, 3, 4, 5, 20)))).toBe(1, 'Month change backward')
  expect(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2022, 11, 31, 3, 4, 5, 20)))).toBe(null, 'Year change backward') // Infinite loop, incorrect date in diffBusinessDays
  expect(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2022, 11, 30, 3, 4, 5, 20)))).toBe(1, 'Year change backward')

  // Same (for coverage)
  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 11, 3)))).toBe(8, '8 business days difference match')
  expect(dayjs(new Date(2023, 0, 21, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 11, 3)), 'd')).toBe(8, '8 business days difference match')
})

test('Positive difference business days (week)', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 16, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 9, 3)), 'w')).toBe(1, '1 (1 week business = 5 business day) business days difference match')
  expect(dayjs(new Date(2023, 0, 17, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 10, 3)), 'w')).toBe(1, '1 (1 week business = 5 business day) business days difference match')
  expect(dayjs(new Date(2023, 0, 18, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 11, 3)), 'w')).toBe(1, '1 (1 week business = 5 business day) business days difference match')
  expect(dayjs(new Date(2023, 0, 19, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 12, 3)), 'w')).toBe(1, '1 (1 week business = 5 business day) business days difference match')
  expect(dayjs(new Date(2023, 0, 20, 3)).diffBusinessDays(dayjs(new Date(2023, 0, 13, 3)), 'w')).toBe(1, '1 (1 week business = 5 business day) business days difference match')

  // Specific
  expect(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2023, 0, 25, 3, 4, 5, 20)), 'w')).toBe(1, '(1 week business = 5 business day) Month change backward')
  expect(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2022, 11, 31, 3, 4, 5, 20)), 'w')).toBe(null, '(1 week business = 5 business day) Year change backward') // Infinite loop, incorrect date in diffBusinessDays
  expect(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)).diffBusinessDays(dayjs(new Date(2022, 11, 26, 3, 4, 5, 20)), 'w')).toBe(1, '(1 week business = 5 business day) Year change backward')
})

test('Next business days', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 16, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).nextBusinessDays())).toBe(true, 'Next business days match')
  expect(dayjs(new Date(2023, 0, 17, 3)).isSame(dayjs(new Date(2023, 0, 16, 3)).nextBusinessDays())).toBe(true, 'Next business days match')
  expect(dayjs(new Date(2023, 0, 18, 3)).isSame(dayjs(new Date(2023, 0, 17, 3)).nextBusinessDays())).toBe(true, 'Next business days match')
  expect(dayjs(new Date(2023, 0, 19, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).nextBusinessDays())).toBe(true, 'Next business days match')
  expect(dayjs(new Date(2023, 0, 20, 3)).isSame(dayjs(new Date(2023, 0, 19, 3)).nextBusinessDays())).toBe(true, 'Next business days match')
  expect(dayjs(new Date(2023, 0, 23, 3)).isSame(dayjs(new Date(2023, 0, 20, 3)).nextBusinessDays())).toBe(true, 'Next business days match')
  expect(dayjs(new Date(2023, 0, 23, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).nextBusinessDays())).toBe(true, 'Next business days match')

  // Specific
  expect(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 0, 31, 3, 4, 5, 20)).nextBusinessDays())).toBe(true, 'Month change forward')
  expect(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)).isSame(dayjs(new Date(2022, 11, 31, 3, 4, 5, 20)).nextBusinessDays())).toBe(true, 'Year change forward')
})

test('Previous business days', () => {
  // Default week
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 15, 3)).prevBusinessDays())).toBe(true, 'Previous business days match')
  expect(dayjs(new Date(2023, 0, 13, 3)).isSame(dayjs(new Date(2023, 0, 16, 3)).prevBusinessDays())).toBe(true, 'Previous business days match')
  expect(dayjs(new Date(2023, 0, 16, 3)).isSame(dayjs(new Date(2023, 0, 17, 3)).prevBusinessDays())).toBe(true, 'Previous business days match')
  expect(dayjs(new Date(2023, 0, 17, 3)).isSame(dayjs(new Date(2023, 0, 18, 3)).prevBusinessDays())).toBe(true, 'Previous business days match')
  expect(dayjs(new Date(2023, 0, 18, 3)).isSame(dayjs(new Date(2023, 0, 19, 3)).prevBusinessDays())).toBe(true, 'Previous business days match')
  expect(dayjs(new Date(2023, 0, 19, 3)).isSame(dayjs(new Date(2023, 0, 20, 3)).prevBusinessDays())).toBe(true, 'Previous business days match')
  expect(dayjs(new Date(2023, 0, 20, 3)).isSame(dayjs(new Date(2023, 0, 21, 3)).prevBusinessDays())).toBe(true, 'Previous business days match')

  // Specific
  expect(dayjs(new Date(2023, 0, 31, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 1, 1, 3, 4, 5, 20)).prevBusinessDays())).toBe(true, 'Month change backward')
  expect(dayjs(new Date(2022, 11, 30, 3, 4, 5, 20)).isSame(dayjs(new Date(2023, 0, 2, 3, 4, 5, 20)).prevBusinessDays())).toBe(true, 'Year change backward')
})

test('List all business days in month', () => {
  const data = [
    dayjs(new Date(2023, 0, 2, 3)), dayjs(new Date(2023, 0, 3, 3)),
    dayjs(new Date(2023, 0, 4, 3)), dayjs(new Date(2023, 0, 5, 3)),
    dayjs(new Date(2023, 0, 6, 3)), dayjs(new Date(2023, 0, 9, 3)),
    dayjs(new Date(2023, 0, 10, 3)), dayjs(new Date(2023, 0, 11, 3)),
    dayjs(new Date(2023, 0, 12, 3)), dayjs(new Date(2023, 0, 13, 3)),
    dayjs(new Date(2023, 0, 16, 3)), dayjs(new Date(2023, 0, 17, 3)),
    dayjs(new Date(2023, 0, 18, 3)), dayjs(new Date(2023, 0, 19, 3)),
    dayjs(new Date(2023, 0, 20, 3)), dayjs(new Date(2023, 0, 23, 3)),
    dayjs(new Date(2023, 0, 24, 3)), dayjs(new Date(2023, 0, 25, 3)),
    dayjs(new Date(2023, 0, 26, 3)), dayjs(new Date(2023, 0, 27, 3)),
    dayjs(new Date(2023, 0, 30, 3)), dayjs(new Date(2023, 0, 31, 3))
  ]

  expect(dayjs(null).businessDaysInMonth()).toEqual([], 'list of business days in month')
  expect(dayjs(new Date(2023, 0, 10, 3)).businessDaysInMonth()).toEqual(data, 'list of business days in month')
})

test('List all business days in month group by week', () => {
  const data = [
    [
      dayjs(new Date(2023, 2, 1, 3)), dayjs(new Date(2023, 2, 2, 3)),
      dayjs(new Date(2023, 2, 3, 3))
    ],
    [
      dayjs(new Date(2023, 2, 6, 3)), dayjs(new Date(2023, 2, 7, 3)),
      dayjs(new Date(2023, 2, 8, 3)), dayjs(new Date(2023, 2, 9, 3)),
      dayjs(new Date(2023, 2, 10, 3))
    ],
    [
      dayjs(new Date(2023, 2, 13, 3)), dayjs(new Date(2023, 2, 14, 3)),
      dayjs(new Date(2023, 2, 15, 3)), dayjs(new Date(2023, 2, 16, 3)),
      dayjs(new Date(2023, 2, 17, 3))
    ],
    [
      dayjs(new Date(2023, 2, 20, 3)), dayjs(new Date(2023, 2, 21, 3)),
      dayjs(new Date(2023, 2, 22, 3)), dayjs(new Date(2023, 2, 23, 3)),
      dayjs(new Date(2023, 2, 24, 3))
    ],
    [
      dayjs(new Date(2023, 2, 27, 3)), dayjs(new Date(2023, 2, 28, 3)),
      dayjs(new Date(2023, 2, 29, 3)), dayjs(new Date(2023, 2, 30, 3)),
      dayjs(new Date(2023, 2, 31, 3))
    ]
  ]

  expect(dayjs(null).businessDaysInMonthByWeeks()).toEqual([], 'list of business days in month group by week')
  expect(dayjs(new Date(2023, 2, 10, 3)).businessDaysInMonthByWeeks()).toEqual(data, 'list of business days in month group by week')
})
