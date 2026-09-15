import moment from 'moment'
import dayjs from '../../src'

it('diff(year/month/quarter) returns NaN for Invalid Date operand', () => {
  const invalid = dayjs('not a date')
  const now = dayjs()

  expect(invalid.diff(now, 'month', true)).toBeNaN()
  expect(invalid.diff(now, 'year', true)).toBeNaN()
  expect(invalid.diff(now, 'quarter', true)).toBeNaN()
  expect(now.diff(invalid, 'month', true)).toBeNaN()
  expect(now.diff(invalid, 'year', true)).toBeNaN()
  expect(now.diff(invalid, 'quarter', true)).toBeNaN()
})

it('diff(day/hour/etc) still returns NaN for Invalid Date (unchanged)', () => {
  const invalid = dayjs('not a date')
  const now = dayjs()

  expect(invalid.diff(now, 'day', true)).toBeNaN()
  expect(invalid.diff(now, 'hour', true)).toBeNaN()
  expect(invalid.diff(now, 'second', true)).toBeNaN()
})

it('diff(year/month/quarter) still works for valid dates (no regression)', () => {
  const a = dayjs('2018-08-08')
  const b = dayjs('2018-09-08')

  expect(a.diff(b, 'month')).toEqual(-1)
  expect(b.diff(a, 'month')).toEqual(1)
  expect(a.diff(a, 'month')).toEqual(0)
  expect(a.diff(b, 'year', true)).toBe(moment('2018-08-08').diff(moment('2018-09-08'), 'year', true))
})
