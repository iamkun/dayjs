import { mutable } from './utils'
import type { PickByValue } from 'utility-types'

export type UnitBase =
  | 'year'
  | 'month'
  | 'date'
  | 'hour'
  | 'minute'
  | 'second'
  | 'millisecond'

export const units = mutable({
  y: 'year',
  M: 'month',
  D: 'date',
  h: 'hour',
  m: 'minute',
  s: 'second',
  ms: 'millisecond',

  /** Day of week */
  d: 'day',
  /** Week of year */
  w: 'week',
} as const)
export type UnitMap = typeof units
export type UnitShort = keyof UnitMap
export type UnitLong = UnitMap[UnitShort]
export type GetUnit<K extends UnitShort> = K | `${UnitMap[K]}${'' | 's'}`
export type Unit = GetUnit<UnitShort>
export type GetShortByLong<T extends UnitLong> = keyof PickByValue<UnitMap, T>

export const unitsShort = Object.keys(units) as UnitShort[]
export const unitsLong = Object.values(units) as UnitLong[]

type RemovePlural<T extends Unit> = T extends `${infer U}s` ? U : T
export type UnitShorter<U extends Unit> = U extends UnitShort
  ? U
  : RemovePlural<U> extends UnitLong
  ? GetShortByLong<RemovePlural<U>>
  : never
export type UnitLonger<U extends Unit> = U extends UnitLong
  ? U
  : RemovePlural<U> extends UnitLong
  ? RemovePlural<U>
  : U extends UnitShort
  ? UnitMap[U]
  : never

const isShortUnit = (unit: any): unit is UnitShort => unitsShort.includes(unit)

export const normalize = <T extends Unit>(unit: T): UnitLonger<T> => {
  if (isShortUnit(unit)) {
    return units[unit] as UnitLonger<T>
  }
  const normalizedUnit =
    (unit?.toLowerCase()?.replace(/s$/, '') as UnitLonger<T>) ?? ''
  return normalizedUnit
}
