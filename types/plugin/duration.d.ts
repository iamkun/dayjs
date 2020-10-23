import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export as namespace plugin;
export = plugin

declare namespace plugin {
  type DurationInputType = string | number | object
  type DurationAddType = number | object | Duration

  interface Duration {
    new (input: DurationInputType, unit?: string, locale?: string): Duration

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

    as(unit: string): number

    get(unit: string): number

    add(input: DurationAddType, unit? : string): Duration

    subtract(input: DurationAddType, unit? : string): Duration

    toJSON(): string

    toISOString(): string

    locale(locale: string): Duration
  }
}

declare module 'dayjs' {
  interface Dayjs {
    add(value: plugin.Duration): Dayjs
    subtract(value: plugin.Duration): Dayjs
  }

  export function duration(input?: plugin.DurationInputType , unit?: string): plugin.Duration
  export function isDuration(d: any): d is plugin.Duration
}
