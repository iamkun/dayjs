import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export default plugin

  /**
   * Definition is here just to ensure backward compatibility
   */
   declare namespace plugin {
}

declare module 'dayjs/esm' {
  /**
   * @deprecated Please use more strict types
   */
  export type DurationInputType = string | number | object

  /**
   * @deprecated Please use more strict types
   */
  export type DurationAddType = number | object | dayjs.Duration

  export type DurationUnitsObjectType = Partial<{
    [unit in Exclude<UnitTypeLongPlural, "dates"> | "weeks"]: number
  }>

  export type DurationUnitType = Exclude<OpUnitType, "date" | "dates">

  export type CreateDurationType =
    ((units: DurationUnitsObjectType) => dayjs.Duration)
    & ((time: number, unit?: DurationUnitType) => dayjs.Duration)
    & ((ISO_8601: string) => dayjs.Duration)

  export type AddDurationType = CreateDurationType & ((duration: dayjs.Duration) => dayjs.Duration)

  namespace dayjs {
    export class Duration {
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

      add: AddDurationType
      subtract: AddDurationType

      toJSON(): string

      toISOString(): string

      format(formatStr?: string): string

      locale(locale: string): Duration
    }

    export function isDuration(d: any): boolean

    /**
     * @param time - If unit is not present, time is treated as number of milliseconds
     */
    export const duration: CreateDurationType

    interface Dayjs {
      add(duration: Duration): Dayjs
      subtract(duration: Duration): Dayjs
    }
  }
}
