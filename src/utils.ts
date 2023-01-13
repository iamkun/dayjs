import { UNIT_MONTH } from './constants'
import type { Dayjs } from './dayjs'
import type { Mutable } from 'utility-types'

export const mutable = <T>(val: T) => val as Mutable<T>

export const pick = <T extends Record<any, unknown>, K extends keyof T>(
  object: T,
  keys: K[]
) =>
  keys.reduce((obj, key) => {
    if (Object.prototype.hasOwnProperty.call(object, key))
      obj[key] = object[key]
    return obj
  }, {} as Pick<T, K>)

export const cloneDate = (date: Date) => new Date(date)

export const padZoneStr = (utcOffset: number) => {
  const negMinutes = -utcOffset
  const minutes = Math.abs(negMinutes)
  const hourOffset = Math.floor(minutes / 60)
  const minuteOffset = minutes % 60
  return `${negMinutes <= 0 ? '+' : '-'}${`${hourOffset}`.padStart(
    2,
    '0'
  )}:${`${minuteOffset}`.padStart(2, '0')}`
}

export const monthDiff = (a: Dayjs, b: Dayjs): number => {
  // function from moment.js in order to keep the same result
  if (a.date() < b.date()) return -monthDiff(b, a)
  const wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month())
  const anchor = +a.clone().add(wholeMonthDiff, UNIT_MONTH)
  const c = +b - anchor < 0
  const anchor2 = +a.clone().add(wholeMonthDiff + (c ? -1 : 1), UNIT_MONTH)
  return +(
    -(
      wholeMonthDiff +
      (+b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)
    ) || 0
  )
}

export const absFloor = (n: number): number =>
  n < 0 ? Math.ceil(n) || 0 : Math.floor(n)

export const abs = (n: number) => (n < 0 ? Math.abs(n) : n)

export const isEmptyObject = (value: unknown): value is object =>
  typeof value === 'object' && value !== null && Object.keys(value).length === 0
