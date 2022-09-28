import type { OpUnitType, PluginFunc, UnitTypeLongPlural } from '..'

declare const plugin: PluginFunc
export default plugin

declare type DurationUnitsObjectType = Partial<{
  [unit in Exclude<UnitTypeLongPlural, 'dates'> | 'weeks']: number
}>
declare type DurationUnitType = Exclude<OpUnitType, 'date' | 'dates'>
declare type CreateDurationType = ((
  units: DurationUnitsObjectType
) => Duration) &
  ((time: number, unit?: DurationUnitType) => Duration) &
  ((ISO_8601: string) => Duration)
declare type AddDurationType = CreateDurationType &
  ((duration: Duration) => Duration)

declare class Duration {
  constructor(input: string | number | object, unit?: string, locale?: string)

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

declare module '..' {
  interface Dayjs {
    add(duration: Duration): Dayjs
    subtract(duration: Duration): Dayjs
  }

  /**
   * @param time If unit is not present, time treated as number of milliseconds
   */
  export const duration: CreateDurationType
  export function isDuration(d: any): d is Duration
}
