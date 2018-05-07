
type ConfigType = string | number | Date | Dayjs

type UnitType = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'date'

interface DayjsObject {
  years: number
  months: number
  date: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

declare class Dayjs {
  constructor (config?: ConfigType)

  clone(): Dayjs

  isValid(): boolean

  year(): number

  month(): number

  date(): number

  hour(): number

  minute(): number

  second(): number

  millisecond(): number

  set(unit: UnitType, value: number): Dayjs

  add(value: number, unit: UnitType): Dayjs

  subtract(value: number, unit: UnitType): Dayjs

  startOf(unit: UnitType): Dayjs

  endOf(unit: UnitType): Dayjs

  format(template?: string): string

  diff(dayjs: Dayjs, unit: UnitType, float?: boolean): number

  valueOf(): number

  unix(): number

  daysInMonth(): number

  toDate(): Date

  toArray(): number[]

  toJSON(): string

  toISOString(): string

  toObject(): Object

  toString(): string

  isBefore(dayjs: Dayjs): boolean

  isSame(dayjs: Dayjs)

  isAfter(dayjs: Dayjs)

  isLeapYear(): boolean
}

declare function dayjs (config?: ConfigType): Dayjs

export default dayjs
