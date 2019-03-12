export = dayjs;
declare function dayjs (date?: dayjs.ConfigType, option?: dayjs.OptionType, locale?: string): dayjs.Dayjs

declare namespace dayjs {
  export type ConfigType = string | number | Date | Dayjs

  export type OptionType = { locale?: string, format?: string, utc?: boolean } | string

  type UnitTypeShort = 'd' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms'
  export type UnitType = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'date' | UnitTypeShort;

  export type OpUnitType = UnitType | "week" | 'w';

  class Dayjs {
    constructor (config?: ConfigType)

    clone(): Dayjs

    isValid(): boolean

    year(): number

    year(value: number): Dayjs

    month(): number

    month(value: number): Dayjs

    date(): number

    date(value: number): Dayjs

    day(): number

    day(value: number): Dayjs

    hour(): number

    hour(value: number): Dayjs

    minute(): number

    minute(value: number): Dayjs

    second(): number

    second(value: number): Dayjs

    millisecond(): number

    millisecond(value: number): Dayjs

    set(unit: UnitType, value: number): Dayjs

    add(value: number, unit: OpUnitType): Dayjs

    subtract(value: number, unit: OpUnitType): Dayjs

    startOf(unit: OpUnitType): Dayjs

    endOf(unit: OpUnitType): Dayjs

    format(template?: string): string

    diff(date: ConfigType, unit: OpUnitType | 'quarter', float?: boolean): number

    valueOf(): number

    unix(): number

    daysInMonth(): number

    toDate(): Date

    toJSON(): string

    toISOString(): string

    toString(): string

    utcOffset(): number

    isBefore(date: ConfigType, unit?: OpUnitType): boolean

    isSame(date: ConfigType, unit?: OpUnitType): boolean

    isAfter(date: ConfigType, unit?: OpUnitType): boolean

    locale(): string

    locale(preset: string | { name: string, [key: string]: any }, object?: { [key: string]: any }): Dayjs
  }

  export type PluginFunc = (option: any, c: typeof Dayjs, d: typeof dayjs) => void

  export function extend(plugin: PluginFunc, option?: any): Dayjs

  export function locale(preset: string | { name: string, [key: string]: any }, object?: { [key: string]: any }, isLocal?: boolean): string

  export function isDayjs(d: any): d is Dayjs

  export function unix(t: number): Dayjs
}
