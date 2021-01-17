import { PluginFunc } from 'dayjs'
import { OpUnitType, UnitTypeLongPlural } from "../index";

declare const plugin: PluginFunc
export as namespace plugin;
export = plugin

declare namespace plugin {
  type DurationUnitsObjectType = Partial<{
    [unit in Exclude<UnitTypeLongPlural, "dates"> | "weeks"]: number
  }>;
  type DurationUnitType = Exclude<OpUnitType, "date" | "dates">
  type CreateDurationType = 
    ((units: DurationUnitsObjectType) => Duration)
    & ((time: number, unit?: DurationUnitType) => Duration)
    & ((ISO_8601: string) => Duration)

  interface Duration {
    new (input: string | number | object, unit?: string, locale?: string): Duration

    clone(): Duration

    humanize(withSuffix?: boolean): string

    milliseconds(): number
    asMilliseconds(): number

    seconds(): number
    asSeconds(): number

    minutes(): number
    asMinutes(): number

    hours(): number
    asHours(): number

    days(): number
    asDays(): number

    weeks(): number
    asWeeks(): number

    months(): number
    asMonths(): number

    years(): number
    asYears(): number

    as(unit: DurationUnitType): number

    get(unit: DurationUnitType): number

    add: CreateDurationType;
    
    subtract: CreateDurationType

    toJSON(): string

    toISOString(): string

    format(formatStr?: string): string

    locale(locale: string): Duration
  }
}

declare module 'dayjs' {
  interface Dayjs {
    add(duration: plugin.Duration): Dayjs
    subtract(duration: plugin.Duration): Dayjs
  }

  /**
   * @param time If unit is not present, time treated as number of milliseconds
   */
  export const duration: plugin.CreateDurationType;
  export function isDuration(d: any): d is plugin.Duration
}
