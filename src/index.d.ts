
declare const dayjs: dayjs
export default dayjs

export type ConfigType = string | number | Date | Dayjs

export type OptionType = { locale: string }

  export type UnitTypeShort = 'd' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms'
  export type UnitTypeSingular = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'date' | UnitTypeShort;
export type UnitTypePlural = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years' | 'dates'
export type UnitType = UnitTypeSingular | UnitTypePlural

  type OpUnitTypeShort = 'w'
  export type OpUnitType = UnitType | "week" | OpUnitTypeShort;

export type PluginFunc<TPlugin> = (option: ConfigType, d1: Dayjs, d2: Dayjs) => void

export interface dayjs<TPlugin = {}> {
  (config?: ConfigType, option?: OptionType): {} extends TPlugin ? Dayjs : Dayjs & TPlugin

  extend<UPlugin extends object>(plugin: PluginFunc<UPlugin>, option?: ConfigType): dayjs<TPlugin & UPlugin>
  locale(arg1: any, arg2?: any): string
  isDayjs(d: any): d is Dayjs
  unix(t: number): Dayjs
}

 export interface DayjsObject {
  years: number
  months: number
  date: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

 export class Dayjs {
  constructor(config?: ConfigType)

  clone(): Dayjs

  isValid(): boolean

  year(): number

  month(): number

  date(): number

  day(): number

  hour(): number

  minute(): number

  second(): number

  millisecond(): number

  set(unit: UnitType, value: number): Dayjs

    add(value: number, unit: OpUnitType): Dayjs

    subtract(value: number, unit: OpUnitType): Dayjs

    startOf(unit: OpUnitType): Dayjs

    endOf(unit: OpUnitType): Dayjs

  format(template?: string): string

    diff(dayjs: ConfigType, unit: OpUnitType, float?: boolean): number

  valueOf(): number

  unix(): number

  daysInMonth(): number

  toDate(): Date

  toArray(): number[]

  toJSON(): string

  toISOString(): string

  toObject(): DayjsObject

  toString(): string

    isBefore(dayjs: ConfigType, unit?: OpUnitType): boolean

    isSame(dayjs: ConfigType, unit?: OpUnitType): boolean

    isAfter(dayjs: ConfigType, unit?: OpUnitType): boolean

  locale(arg1: any, arg2?: any): Dayjs
}
