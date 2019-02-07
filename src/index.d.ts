export = dayjs;
type WithReturnType<TFunction, TExtendedReturnType> = TFunction extends (...args: infer U) => infer R ? (...args: U) => R & TExtendedReturnType : TFunction;

declare function dayjs(config?: dayjs.ConfigType, option?: dayjs.OptionType): dayjs.Dayjs

declare namespace dayjs {
  export type ConfigType = string | number | Date | Dayjs

  export type OptionType = { locale: string }

  export type UnitTypeShort = 'd' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms'
  export type UnitTypeSingular = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'date' | UnitTypeShort;
  export type UnitTypePlural = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years' | 'dates'
  export type UnitType = UnitTypeSingular | UnitTypePlural

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

  export type PluginFunc<TPlugin> = (option: ConfigType, d1: Dayjs, d2: Dayjs) => void

  export type dayjsWithPlugin<TPlugin extends object> = WithReturnType<typeof dayjs, TPlugin>;

  export function extend<TPlugin extends object>(plugin: PluginFunc<TPlugin>, option?: ConfigType): dayjsWithPlugin<TPlugin>;

  export function locale(arg1: any, arg2?: any): string

  export function isDayjs(d: any): d is Dayjs

  export function unix(t: number): Dayjs
}
