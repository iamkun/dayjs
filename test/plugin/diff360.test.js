import MockDate from 'mockdate'
import dayjs from '../../src'
import diff360 from '../../src/plugin/diff360'

dayjs.extend(diff360)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

test('It returns 0 days between same date', () => {
  expect(dayjs('2022-01-01').diff360(dayjs('2022-01-01'), true)).toBe(0)
})

test('It returns 1 day between two consecutive dates', () => {
  expect(dayjs('2022-01-01').diff360(dayjs('2022-01-02'), true)).toBe(1)
})

test('It returns 30 days in every month', () => {
  expect(dayjs('2022-01-01').diff360(dayjs('2022-02-01'), true)).toBe(30)
  expect(dayjs('2022-02-01').diff360(dayjs('2022-03-01'), true)).toBe(30)
  expect(dayjs('2022-03-01').diff360(dayjs('2022-04-01'), true)).toBe(30)
  expect(dayjs('2022-04-01').diff360(dayjs('2022-05-01'), true)).toBe(30)
  expect(dayjs('2022-05-01').diff360(dayjs('2022-06-01'), true)).toBe(30)
  expect(dayjs('2022-07-01').diff360(dayjs('2022-08-01'), true)).toBe(30)
  expect(dayjs('2022-08-01').diff360(dayjs('2022-09-01'), true)).toBe(30)
  expect(dayjs('2022-09-01').diff360(dayjs('2022-10-01'), true)).toBe(30)
  expect(dayjs('2022-10-01').diff360(dayjs('2022-11-01'), true)).toBe(30)
  expect(dayjs('2022-11-01').diff360(dayjs('2022-12-01'), true)).toBe(30)
  expect(dayjs('2022-12-01').diff360(dayjs('2023-01-01'), true)).toBe(30)
})

test('It returns 30 days for 31 days within same month', () => {
  expect(dayjs('2022-01-01').diff360(dayjs('2022-01-31'), true)).toBe(30)
})

test('It returns 360 days for an entire year minus one day', () => {
  expect(dayjs('2022-01-01').diff360(dayjs('2022-12-31'), true)).toBe(360)
})

test('It returns 60 days between two months on the end date with varying lengths', () => {
  expect(dayjs('2022-01-31').diff360(dayjs('2022-03-31'), true)).toBe(60)
})

test('It returns 360 days for an entire year regardless of leap year', () => {
  expect(dayjs('2022-01-01').diff360(dayjs('2023-01-01'), true)).toBe(360)
  expect(dayjs('2023-01-01').diff360(dayjs('2024-01-01'), true)).toBe(360)
  expect(dayjs('2024-01-01').diff360(dayjs('2025-01-01'), true)).toBe(360)
  expect(dayjs('2025-01-01').diff360(dayjs('2026-01-01'), true)).toBe(360)
})

test('It returns 30 days in Feburary regardless of leap year', () => {
  expect(dayjs('2022-02-01').diff360(dayjs('2022-03-01'), true)).toBe(30)
  expect(dayjs('2023-02-01').diff360(dayjs('2023-03-01'), true)).toBe(30)
  expect(dayjs('2024-02-01').diff360(dayjs('2024-03-01'), true)).toBe(30)
  expect(dayjs('2025-02-01').diff360(dayjs('2025-03-01'), true)).toBe(30)
})

test('It returns 1 day between the 28th of Feburary and 1st of March (EU method)', () => {
  expect(dayjs('2022-02-28').diff360(dayjs('2022-03-01'), true)).toBe(1)
})

test('It returns 3 days between the 28th of Feburary and 1st of March (US method)', () => {
  expect(dayjs('2022-02-28').diff360(dayjs('2022-03-01'), false)).toBe(3)
})

test('It returns the correct number of days spanning multiple days within two months', () => {
  expect(dayjs('2022-01-15').diff360(dayjs('2022-02-15'), true)).toBe(30)
})

test('It returns the correct number of days spanning multiple months', () => {
  expect(dayjs('2022-12-01').diff360(dayjs('2023-03-01'), true)).toBe(90)
})

test('It returns the correct number of days spanning multiple years', () => {
  expect(dayjs('2022-01-01').diff360(dayjs('2032-01-01'), true)).toBe(3600)
})
