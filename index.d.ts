export default dayjs

declare const dayjs: DayjsFn

type DayjsFn = {
  (config?: ConfigType, option?: OptionType): DayjsInstance
  extend(plugin: PluginFunc, option?: ConfigType): DayjsInstance
  locale(arg1: any, arg2?: any): string
  isDayjs(d: any): d is DayjsInstance
  unix(t: number): DayjsInstance
}

export type ConfigType = string | number | Date | DayjsInstance

export type OptionType = { locale: string }

export type UnitType =
  | 'millisecond'
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year'
  | 'date'

export type PluginFunc = (
  option: ConfigType,
  d1: DayjsInstance,
  d2: DayjsInstance
) => void

export type DayjsPlainObject = {
  years: number
  months: number
  date: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

export type DayjsInstance = {
  clone(): DayjsInstance
  isValid(): boolean
  year(): number
  month(): number
  date(): number
  day(): number
  hour(): number
  minute(): number
  second(): number
  millisecond(): number
  set(unit: UnitType, value: number): DayjsInstance
  add(value: number, unit: UnitType): DayjsInstance
  subtract(value: number, unit: UnitType): DayjsInstance
  startOf(unit: UnitType): DayjsInstance
  endOf(unit: UnitType): DayjsInstance
  format(template?: string): string
  diff(dayjs: DayjsInstance, unit: UnitType, float?: boolean): number
  valueOf(): number
  unix(): number
  daysInMonth(): number
  toDate(): Date
  toArray(): number[]
  toJSON(): string
  toISOString(): string
  toObject(): DayjsPlainObject
  toString(): string
  isBefore(dayjs: DayjsInstance, unit?: UnitType): boolean
  isSame(dayjs: DayjsInstance, unit?: UnitType): boolean
  isAfter(dayjs: DayjsInstance, unit?: UnitType): boolean
  isLeapYear(): boolean
  locale(arg1: any, arg2?: any): DayjsInstance
}
