import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export default plugin

type DurationInputType = string | number | object
type DurationAddType = number | object | Duration

export declare class Duration {
  constructor (input: DurationInputType, unit?: string, locale?: string)

  clone(): Duration
  
  humanize(withSuffix: boolean): string

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

  as(unit: string): number

  get(unit: string): number

  add(input: DurationAddType, unit? : string): Duration
  
  subtract(input: DurationAddType, unit? : string): Duration

  toJSON(): string

  toISOString(): string

  locale(locale: string): Duration
}

declare module 'dayjs' {
  export function duration(input?: DurationInputType , unit?: string): Duration
  export function isDuration(d: any): d is Duration
}
