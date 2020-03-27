/// <reference path="./locale/index.d.ts" />

export = dayjs;
declare function dayjs (date?: dayjs.ConfigType, option?: dayjs.OptionType, locale?: string): dayjs.Dayjs

declare namespace dayjs {
  export type ConfigType = string | number | Date | Dayjs

  export type OptionType = { locale?: string, format?: string, utc?: boolean } | string

  type UnitTypeShort = 'd' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms'
  export type UnitType = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'date' | UnitTypeShort;

  export type OpUnitType = UnitType | "week" | 'w';
  export type QUnitType = UnitType | "quarter" | 'Q';

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

    get(unit: UnitType): number

    add(value: number, unit: OpUnitType): Dayjs

    subtract(value: number, unit: OpUnitType): Dayjs

    startOf(unit: OpUnitType): Dayjs

    endOf(unit: OpUnitType): Dayjs

    format(template?: string): string

    diff(date: ConfigType, unit?: QUnitType | OpUnitType, float?: boolean): number

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

    locale(preset: string | ILocale, object?: Partial<ILocale>): Dayjs
  }

  export type PluginFunc<T = unknown> = (option: T, c: typeof Dayjs, d: typeof dayjs) => void

  export function extend<T = unknown>(plugin: PluginFunc<T>, option?: T): Dayjs

  export function locale(preset: string | ILocale, object?: Partial<ILocale>, isLocal?: boolean): string

  export function isDayjs(d: any): d is Dayjs

  export function unix(t: number): Dayjs

  const Ls : { [key: string] :  ILocale }
}
