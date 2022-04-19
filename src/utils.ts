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

export const isEmptyObject = (value: unknown): value is object =>
  typeof value === 'object' && value !== null && Object.keys(value).length === 0
