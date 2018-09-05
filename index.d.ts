export = dayjs;

declare function dayjs (config?: dayjs.ConfigType, option?: dayjs.OptionType): dayjs.Dayjs

declare namespace dayjs {
  export type ConfigType = string | number | Date | Dayjs

  export type OptionType = { locale: string, utc: boolean }

  export type UnitType = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'date'
  
  interface DayjsObject {
    years: number
    months: number
    date: number
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  class Dayjs {
    constructor (config?: ConfigType)
  
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
  
    toObject(): DayjsObject
  
    toString(): string
  
    isBefore(dayjs: Dayjs): boolean
  
    isSame(dayjs: Dayjs): boolean
  
    isAfter(dayjs: Dayjs): boolean
  
    isLeapYear(): boolean

    locale(arg1: any, arg2?: any): Dayjs

    utc(): Dayjs

    local(): Dayjs

    isUTC(): boolean

    utcOffset(): number
  }

  export type PluginFunc = (option: ConfigType, d1: Dayjs, d2: Dayjs) => void

  export function extend(plugin: PluginFunc, option?: ConfigType): Dayjs

  export function locale(arg1: any, arg2?: any): string

  export function isDayjs(d: any): d is Dayjs
}
