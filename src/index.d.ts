declare const dayjs: dayjs;
export = dayjs;

declare namespace dayjs {
  type ConfigType = string | number | Date | Dayjs

  type OptionType = { locale: string }

  type UnitTypeShort = 'd' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms'
  type UnitTypeSingular = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'date' | UnitTypeShort;
  type UnitTypePlural = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years' | 'dates'
  type UnitType = UnitTypeSingular | UnitTypePlural

  type OpUnitTypeShort = 'w'
  type OpUnitType = UnitType | "week" | OpUnitTypeShort;

  type PluginFunc<TPlugin> = (option: ConfigType, dayjsClass: InstanceType<Dayjs>, dayjsFactory: dayjs) => void;

  /**
   * Branding for static plugins, to enable better type inference.
   * `extend` from this to make the plugin static
   */
  interface StaticPlugin {
    __staticPlugin: never;
  }
}

interface dayjs<TPlugin = {}> {
  (config?: dayjs.ConfigType, option?: dayjs.OptionType): {} extends TPlugin
    ? Dayjs
    : Dayjs & TPlugin;

  extend<UPlugin extends object>(
    plugin: dayjs.PluginFunc<UPlugin>,
    option?: dayjs.ConfigType
  ): UPlugin extends dayjs.StaticPlugin ? (dayjs<TPlugin> & UPlugin) : dayjs<TPlugin & UPlugin>;
  locale(arg1: any, arg2?: any): string;
  isDayjs(d: any): d is Dayjs;
  unix(t: number): Dayjs;
}

declare interface DayjsObject {
  years: number;
  months: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

declare class Dayjs {
  constructor(config?: dayjs.ConfigType);

  clone(): Dayjs;

  isValid(): boolean;

  year(): number;

  month(): number;

  date(): number;

  day(): number;

  hour(): number;

  minute(): number;

  second(): number;

  millisecond(): number;

  set(unit: dayjs.UnitType, value: number): Dayjs;

  add(value: number, unit: dayjs.OpUnitType): Dayjs;

  subtract(value: number, unit: dayjs.OpUnitType): Dayjs;

  startOf(unit: dayjs.OpUnitType): Dayjs;

  endOf(unit: dayjs.OpUnitType): Dayjs;

  format(template?: string): string;

  diff(dayjs: ConfigType, unit: OpUnitType, float?: boolean): number

  valueOf(): number;

  unix(): number;

  daysInMonth(): number;

  toDate(): Date;

  toArray(): number[];

  toJSON(): string;

  toISOString(): string;

  toObject(): DayjsObject;

  toString(): string;

  isBefore(dayjs: ConfigType, unit?: OpUnitType): boolean

  isSame(dayjs: ConfigType, unit?: OpUnitType): boolean

  isAfter(dayjs: ConfigType, unit?: OpUnitType): boolean

  locale(arg1: any, arg2?: any): Dayjs;
}
