export = dayjs;
declare function dayjs (date?: dayjs.DateType, option?: dayjs.OptionType): dayjs.Dayjs

declare namespace dayjs {
  export type DateType = string | number | Date | Dayjs

  /** @deprecated Renamed to DateType. */
  export type ConfigType = DateType

  export type OptionType = { locale?: string, format?: string } | string

  type UnitTypeShort = 'd' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms'
  export type UnitType = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'quarter' | 'year' | 'date' | UnitTypeShort;

  type OpUnitTypeShort = 'w'
  export type OpUnitType = UnitType | "week" | OpUnitTypeShort;

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
    constructor (date?: DateType)

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

    diff(date: DateType, unit: OpUnitType, float?: boolean): number

    valueOf(): number

    unix(): number

    daysInMonth(): number

    toDate(): Date

    toArray(): number[]

    toJSON(): string

    toISOString(): string

    toObject(): DayjsObject

    toString(): string

    isBefore(date: DateType, unit?: OpUnitType): boolean

    isSame(date: DateType, unit?: OpUnitType): boolean

    isAfter(date: DateType, unit?: OpUnitType): boolean

    isLeapYear(): boolean

    locale(preset: string | { name: string, [key: string]: any }, object?: { [key: string]: any }): Dayjs
  }

  export type PluginFunc = (option: any, c: typeof Dayjs, d: typeof dayjs) => void

  export function extend(plugin: PluginFunc, option?: any): Dayjs

  export function locale(preset: string | { name: string, [key: string]: any }, object?: { [key: string]: any }, isLocal?: boolean): string

  export function isDayjs(d: any): d is Dayjs

  export function unix(t: number): Dayjs
}
