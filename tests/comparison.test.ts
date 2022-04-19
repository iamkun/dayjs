import dayjs from '../src'
import { expect, it } from 'vitest'

it('is same without units', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)

  expect(m.isSame(dayjs(new Date(2012, 3, 2, 3, 5, 5, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2010, 3, 2, 3, 3, 5, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 4, 2, 3, 4, 5, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 3, 3, 4, 5, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 1, 3, 4, 5, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 4, 4, 5, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 2, 4, 5, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 3, 5, 5, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 3, 3, 5, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 6, 10)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 4, 11)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)))).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 5, 11)))).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 5, 9)))).toBe(false)
  expect(m.isSame(m)).toBe(true)
  expect(+m).toEqual(+mCopy)
})

it('is same year', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isSame(dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)), 'year')).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)), 'years')).toBe(true)
  expect(m.isSame(dayjs(new Date(2012, 5, 6, 7, 8, 9, 10)), 'year')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 0, 1, 0, 0, 0, 0)), 'year')).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 11, 31, 23, 59, 59, 999)), 'year')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2012, 0, 1, 0, 0, 0, 0)), 'year')).toBe(false)
  expect(m.isSame(dayjs(new Date(2010, 11, 31, 23, 59, 59, 999)), 'year')).toBe(
    false
  )
  expect(m.isSame(m, 'year')).toBe(true)
  expect(+m).toEqual(+mCopy)
})

it('is same month', () => {
  const m = dayjs(new Date(2011, 2, 3, 4, 5, 6, 7))
  const mCopy = dayjs(m)
  expect(m.isSame(dayjs(new Date(2011, 2, 6, 7, 8, 9, 10)), 'month')).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 2, 6, 7, 8, 9, 10)), 'months')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2012, 2, 6, 7, 8, 9, 10)), 'month')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)), 'month')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 2, 1, 0, 0, 0, 0)), 'month')).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 2, 31, 23, 59, 59, 999)), 'month')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2011, 3, 1, 0, 0, 0, 0)), 'month')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 1, 27, 23, 59, 59, 999)), 'month')).toBe(
    false
  )
  expect(m.isSame(m, 'month')).toBe(true)
  expect(+m).toEqual(+mCopy)
})

it('is same day', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)), 'day')).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 7, 8, 9, 10)), 'days')).toBe(true)
  expect(m.isSame(dayjs(new Date(2012, 1, 2, 7, 8, 9, 10)), 'day')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 2, 2, 7, 8, 9, 10)), 'day')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 1, 3, 7, 8, 9, 10)), 'day')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 0, 0, 0, 0)), 'day')).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 23, 59, 59, 999)), 'day')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 3, 0, 0, 0, 0)), 'day')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 1, 1, 23, 59, 59, 999)), 'day')).toBe(
    false
  )
  expect(m.isSame(m, 'day')).toBe(true)
  expect(+m).toEqual(+mCopy)
})

it('is same hour', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 8, 9, 10)), 'hour')).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 8, 9, 10)), 'hours')).toBe(true)
  expect(m.isSame(dayjs(new Date(2012, 1, 2, 3, 8, 9, 10)), 'hour')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 2, 2, 3, 8, 9, 10)), 'hour')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 1, 3, 3, 8, 9, 10)), 'hour')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 4, 8, 9, 10)), 'hour')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 0, 0, 0)), 'hour')).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 59, 59, 999)), 'hour')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 4, 0, 0, 0)), 'hour')).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 2, 59, 59, 999)), 'hour')).toBe(
    false
  )
  expect(m.isSame(m, 'hour')).toBe(true)
  expect(+m).toEqual(+mCopy)
})

it('is same minute', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 9, 10)), 'minutes')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2012, 1, 2, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 2, 2, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 3, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 4, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 5, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 0, 0)), 'minute')).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 59, 999)), 'minute')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 5, 0, 0)), 'minute')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 3, 59, 999)), 'minute')).toBe(
    false
  )
  expect(m.isSame(m, 'minute')).toBe(true)
  expect(+m).toEqual(+mCopy)
})

it('is same second', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 5, 10)), 'seconds')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2012, 1, 2, 3, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 3, 3, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 4, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 5, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 6, 10)), 'second')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 5, 0)), 'second')).toBe(true)
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 5, 999)), 'second')).toBe(
    true
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 6, 0)), 'second')).toBe(
    false
  )
  expect(m.isSame(dayjs(new Date(2011, 1, 2, 3, 4, 4, 999)), 'second')).toBe(
    false
  )
  expect(m.isSame(m, 'second')).toBe(true)
  expect(+m).toEqual(+mCopy)
})

it('is same millisecond', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)
  expect(
    m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)), 'milliseconds')
  ).toBe(true)
  expect(
    m.isSame(dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isSame(dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isSame(dayjs(new Date(2011, 4, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isSame(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isSame(dayjs(new Date(2011, 3, 3, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isSame(dayjs(new Date(2011, 3, 1, 1, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isSame(dayjs(new Date(2011, 3, 2, 4, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isSame(dayjs(new Date(2011, 3, 1, 4, 1, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isSame(dayjs(new Date(2011, 3, 2, 3, 5, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isSame(dayjs(new Date(2011, 3, 2, 3, 3, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 6, 10)), 'millisecond')
  ).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 4, 5)), 'millisecond')).toBe(
    false
  )
  expect(
    m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 6, 11)), 'millisecond')
  ).toBe(false)
  expect(m.isSame(dayjs(new Date(2011, 3, 2, 3, 4, 4, 9)), 'millisecond')).toBe(
    false
  )
  expect(m.isSame(m, 'millisecond')).toBe(true)
  expect(+m).toEqual(+mCopy)
})

it('is same with invalid moments', () => {
  expect(dayjs(null).isSame(dayjs('2018-01-01'))).toBe(false)
  expect(dayjs('2018-01-01').isSame(dayjs(null))).toBe(false)
})

// isAfter()

it('is after year', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isAfter(dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)), 'year')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2010, 5, 6, 7, 8, 9, 10)), 'years')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2013, 5, 6, 7, 8, 9, 10)), 'year')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2010, 5, 6, 7, 8, 9, 10)), 'year')).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 0, 1, 0, 0, 0, 0)), 'year')).toBe(false)
  expect(
    m.isAfter(dayjs(new Date(2011, 11, 31, 23, 59, 59, 999)), 'year')
  ).toBe(false)
  expect(m.isAfter(dayjs(new Date(2012, 0, 1, 0, 0, 0, 0)), 'year')).toBe(false)
  expect(
    m.isAfter(dayjs(new Date(2010, 11, 31, 23, 59, 59, 999)), 'year')
  ).toBe(true)
  expect(
    m.isAfter(dayjs(new Date(1980, 11, 31, 23, 59, 59, 999)), 'year')
  ).toBe(true)
  expect(m.isAfter(m, 'year')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is after month', () => {
  const m = dayjs(new Date(2011, 2, 3, 4, 5, 6, 7))
  const mCopy = dayjs(m)
  expect(m.isAfter(dayjs(new Date(2011, 2, 6, 7, 8, 9, 10)), 'month')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2010, 2, 6, 7, 8, 9, 10)), 'months')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2012, 2, 6, 7, 8, 9, 10)), 'month')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2010, 2, 6, 7, 8, 9, 10)), 'month')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)), 'month')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 1, 6, 7, 8, 9, 10)), 'month')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 2, 1, 0, 0, 0, 0)), 'month')).toBe(
    false
  )
  expect(
    m.isAfter(dayjs(new Date(2011, 2, 31, 23, 59, 59, 999)), 'month')
  ).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 1, 0, 0, 0, 0)), 'month')).toBe(
    false
  )
  expect(
    m.isAfter(dayjs(new Date(2011, 1, 27, 23, 59, 59, 999)), 'month')
  ).toBe(true)
  expect(
    m.isAfter(dayjs(new Date(2010, 12, 31, 23, 59, 59, 999)), 'month')
  ).toBe(true)
  expect(m.isAfter(m, 'month')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is after day', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 7, 8, 9, 10)), 'day')).toBe(false)
  expect(m.isAfter(dayjs(new Date(2010, 3, 2, 7, 8, 9, 10)), 'days')).toBe(true)
  expect(m.isAfter(dayjs(new Date(2012, 3, 2, 7, 8, 9, 10)), 'day')).toBe(false)
  expect(m.isAfter(dayjs(new Date(2010, 3, 2, 7, 8, 9, 10)), 'day')).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 4, 2, 7, 8, 9, 10)), 'day')).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 2, 2, 7, 8, 9, 10)), 'day')).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 3, 3, 7, 8, 9, 10)), 'day')).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 1, 7, 8, 9, 10)), 'day')).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 0, 0, 0, 0)), 'day')).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 23, 59, 59, 999)), 'day')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 3, 0, 0, 0, 0)), 'day')).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 1, 23, 59, 59, 999)), 'day')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2010, 3, 10, 0, 0, 0, 0)), 'day')).toBe(true)
  expect(m.isAfter(m, 'day')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is after hour', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2010, 3, 2, 3, 8, 9, 10)), 'hours')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2012, 3, 2, 3, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2010, 3, 2, 3, 8, 9, 10)), 'hour')).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 4, 2, 3, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 1, 2, 3, 8, 9, 10)), 'hour')).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 3, 3, 3, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 1, 3, 8, 9, 10)), 'hour')).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 4, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 0, 0, 0)), 'hour')).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 59, 59, 999)), 'hour')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 4, 0, 0, 0)), 'hour')).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 2, 59, 59, 999)), 'hour')).toBe(
    true
  )
  expect(m.isAfter(m, 'hour')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is after minute', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2010, 3, 2, 3, 4, 9, 10)), 'minutes')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2012, 3, 2, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2010, 3, 2, 3, 4, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 4, 2, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 2, 2, 3, 4, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 3, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 1, 3, 4, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 4, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 2, 4, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 5, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 3, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 0, 0)), 'minute')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 59, 999)), 'minute')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 5, 0, 0)), 'minute')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 3, 59, 999)), 'minute')).toBe(
    true
  )
  expect(m.isAfter(m, 'minute')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is after second', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)), 'seconds')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 4, 2, 3, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 3, 3, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 1, 1, 4, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 4, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 1, 4, 1, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 5, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 3, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 6, 10)), 'second')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 4, 5)), 'second')).toBe(
    true
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 5, 0)), 'second')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 5, 999)), 'second')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 6, 0)), 'second')).toBe(
    false
  )
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 4, 999)), 'second')).toBe(
    true
  )
  expect(m.isAfter(m, 'second')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is after millisecond', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isAfter(dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)), 'milliseconds')
  ).toBe(true)
  expect(
    m.isAfter(dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isAfter(dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isAfter(dayjs(new Date(2011, 4, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isAfter(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 3, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 1, 1, 4, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 2, 4, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 1, 4, 1, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 2, 3, 5, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 2, 3, 3, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 6, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 4, 5)), 'millisecond')
  ).toBe(true)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 6, 11)), 'millisecond')
  ).toBe(false)
  expect(
    m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 4, 9)), 'millisecond')
  ).toBe(true)
  expect(m.isAfter(m, 'millisecond')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is after without units', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)
  expect(m.isAfter(dayjs(new Date(2012, 3, 2, 3, 5, 5, 10)))).toBe(false)
  expect(m.isAfter(dayjs(new Date(2010, 3, 2, 3, 3, 5, 10)))).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 4, 2, 3, 4, 5, 10)))).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)))).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 3, 3, 3, 4, 5, 10)))).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 1, 3, 4, 5, 10)))).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 4, 4, 5, 10)))).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 2, 4, 5, 10)))).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 5, 5, 10)))).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 3, 5, 10)))).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 6, 10)))).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 4, 11)))).toBe(true)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)))).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 5, 11)))).toBe(false)
  expect(m.isAfter(dayjs(new Date(2011, 3, 2, 3, 4, 5, 9)))).toBe(true)
  expect(m.isAfter(m)).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is after invalid', () => {
  const m = dayjs()
  const invalid = dayjs(null)
  expect(m.isAfter(invalid)).toBe(false)
  expect(invalid.isAfter(m)).toBe(false)
  expect(m.isAfter(invalid, 'year')).toBe(false)
  expect(m.isAfter(invalid, 'month')).toBe(false)
  expect(m.isAfter(invalid, 'day')).toBe(false)
  expect(m.isAfter(invalid, 'hour')).toBe(false)
  expect(m.isAfter(invalid, 'minute')).toBe(false)
  expect(m.isAfter(invalid, 'second')).toBe(false)
  expect(m.isAfter(invalid, 'milliseconds')).toBe(false)
})

// isBefore()

it('is after without units', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)
  expect(m.isBefore(dayjs(new Date(2012, 3, 2, 3, 5, 5, 10)))).toBe(true)
  expect(m.isBefore(dayjs(new Date(2010, 3, 2, 3, 3, 5, 10)))).toBe(false)
  expect(m.isBefore(dayjs(new Date(2011, 4, 2, 3, 4, 5, 10)))).toBe(true)
  expect(m.isBefore(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)))).toBe(false)
  expect(m.isBefore(dayjs(new Date(2011, 3, 3, 3, 4, 5, 10)))).toBe(true)
  expect(m.isBefore(dayjs(new Date(2011, 3, 1, 3, 4, 5, 10)))).toBe(false)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 4, 4, 5, 10)))).toBe(true)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 2, 4, 5, 10)))).toBe(false)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 5, 5, 10)))).toBe(true)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 3, 5, 10)))).toBe(false)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 6, 10)))).toBe(true)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 4, 11)))).toBe(false)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)))).toBe(false)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 11)))).toBe(true)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 9)))).toBe(false)
  expect(m.isBefore(m)).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is before year', () => {
  const m = dayjs(new Date(2011, 1, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isBefore(dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)), 'year')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2012, 5, 6, 7, 8, 9, 10)), 'years')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2013, 5, 6, 7, 8, 9, 10)), 'year')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2010, 5, 6, 7, 8, 9, 10)), 'year')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 0, 1, 0, 0, 0, 0)), 'year')).toBe(
    false
  )
  expect(
    m.isBefore(dayjs(new Date(2011, 11, 31, 23, 59, 59, 999)), 'year')
  ).toBe(false)
  expect(m.isBefore(dayjs(new Date(2012, 0, 1, 0, 0, 0, 0)), 'year')).toBe(true)
  expect(
    m.isBefore(dayjs(new Date(2010, 11, 31, 23, 59, 59, 999)), 'year')
  ).toBe(false)
  expect(
    m.isBefore(dayjs(new Date(1980, 11, 31, 23, 59, 59, 999)), 'year')
  ).toBe(false)
  expect(m.isBefore(m, 'year')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is before month', () => {
  const m = dayjs(new Date(2011, 2, 3, 4, 5, 6, 7))
  const mCopy = dayjs(m)
  expect(m.isBefore(dayjs(new Date(2011, 2, 6, 7, 8, 9, 10)), 'month')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2012, 2, 6, 7, 8, 9, 10)), 'months')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2012, 2, 6, 7, 8, 9, 10)), 'month')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2010, 2, 6, 7, 8, 9, 10)), 'month')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 5, 6, 7, 8, 9, 10)), 'month')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 1, 6, 7, 8, 9, 10)), 'month')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 2, 1, 0, 0, 0, 0)), 'month')).toBe(
    false
  )
  expect(
    m.isBefore(dayjs(new Date(2011, 2, 31, 23, 59, 59, 999)), 'month')
  ).toBe(false)
  expect(m.isBefore(dayjs(new Date(2011, 3, 1, 0, 0, 0, 0)), 'month')).toBe(
    true
  )
  expect(
    m.isBefore(dayjs(new Date(2011, 1, 27, 23, 59, 59, 999)), 'month')
  ).toBe(false)
  expect(
    m.isBefore(dayjs(new Date(2010, 12, 31, 23, 59, 59, 999)), 'month')
  ).toBe(false)
  expect(m.isBefore(m, 'month')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is before day', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 7, 8, 9, 10)), 'day')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2012, 3, 2, 7, 8, 9, 10)), 'days')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2012, 3, 2, 7, 8, 9, 10)), 'day')).toBe(true)
  expect(m.isBefore(dayjs(new Date(2010, 3, 2, 7, 8, 9, 10)), 'day')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 4, 2, 7, 8, 9, 10)), 'day')).toBe(true)
  expect(m.isBefore(dayjs(new Date(2011, 2, 2, 7, 8, 9, 10)), 'day')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 3, 7, 8, 9, 10)), 'day')).toBe(true)
  expect(m.isBefore(dayjs(new Date(2011, 3, 1, 7, 8, 9, 10)), 'day')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 0, 0, 0, 0)), 'day')).toBe(false)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 23, 59, 59, 999)), 'day')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 3, 0, 0, 0, 0)), 'day')).toBe(true)
  expect(m.isBefore(dayjs(new Date(2011, 3, 1, 23, 59, 59, 999)), 'day')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2010, 3, 10, 0, 0, 0, 0)), 'day')).toBe(
    false
  )
  expect(m.isBefore(m, 'day')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is before hour', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2012, 3, 2, 3, 8, 9, 10)), 'hours')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2012, 3, 2, 3, 8, 9, 10)), 'hour')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2010, 3, 2, 3, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 4, 2, 3, 8, 9, 10)), 'hour')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 1, 2, 3, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 3, 3, 8, 9, 10)), 'hour')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 1, 3, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 4, 8, 9, 10)), 'hour')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 8, 9, 10)), 'hour')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 0, 0, 0)), 'hour')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 59, 59, 999)), 'hour')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 4, 0, 0, 0)), 'hour')).toBe(true)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 2, 59, 59, 999)), 'hour')).toBe(
    false
  )
  expect(m.isBefore(m, 'hour')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is before minute', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 6))
  const mCopy = dayjs(m)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2012, 3, 2, 3, 4, 9, 10)), 'minutes')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2012, 3, 2, 3, 4, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2010, 3, 2, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 4, 2, 3, 4, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 2, 2, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 3, 3, 4, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 1, 3, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 4, 4, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 2, 4, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 5, 9, 10)), 'minute')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 3, 9, 10)), 'minute')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 0, 0)), 'minute')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 59, 999)), 'minute')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 5, 0, 0)), 'minute')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 3, 59, 999)), 'minute')).toBe(
    false
  )
  expect(m.isBefore(m, 'minute')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is before second', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)), 'seconds')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 4, 2, 3, 4, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 3, 3, 4, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 1, 1, 4, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 4, 4, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 1, 4, 1, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 5, 5, 10)), 'second')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 3, 5, 10)), 'second')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 6, 10)), 'second')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 4, 5)), 'second')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 0)), 'second')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 999)), 'second')).toBe(
    false
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 6, 0)), 'second')).toBe(
    true
  )
  expect(m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 4, 999)), 'second')).toBe(
    false
  )
  expect(m.isBefore(m, 'second')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is before millisecond', () => {
  const m = dayjs(new Date(2011, 3, 2, 3, 4, 5, 10))
  const mCopy = dayjs(m)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isBefore(dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)), 'milliseconds')
  ).toBe(false)
  expect(
    m.isBefore(dayjs(new Date(2012, 3, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isBefore(dayjs(new Date(2010, 3, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isBefore(dayjs(new Date(2011, 4, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isBefore(dayjs(new Date(2011, 2, 2, 3, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 3, 3, 4, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 1, 1, 4, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 2, 4, 4, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 1, 4, 1, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 2, 3, 5, 5, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 2, 3, 3, 5, 10)), 'millisecond')
  ).toBe(false)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 6, 10)), 'millisecond')
  ).toBe(true)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 4, 5)), 'millisecond')
  ).toBe(false)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 6, 11)), 'millisecond')
  ).toBe(true)
  expect(
    m.isBefore(dayjs(new Date(2011, 3, 2, 3, 4, 4, 9)), 'millisecond')
  ).toBe(false)
  expect(m.isBefore(m, 'millisecond')).toBe(false)
  expect(+m).toEqual(+mCopy)
})

it('is before invalid', () => {
  const m = dayjs()
  const invalid = dayjs(null)
  expect(m.isBefore(invalid)).toBe(false)
  expect(invalid.isBefore(m)).toBe(false)
  expect(m.isBefore(invalid, 'year')).toBe(false)
  expect(m.isBefore(invalid, 'month')).toBe(false)
  expect(m.isBefore(invalid, 'day')).toBe(false)
  expect(m.isBefore(invalid, 'hour')).toBe(false)
  expect(m.isBefore(invalid, 'minute')).toBe(false)
  expect(m.isBefore(invalid, 'second')).toBe(false)
  expect(m.isBefore(invalid, 'milliseconds')).toBe(false)
})
