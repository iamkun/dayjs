import type { PluginFunc } from '..'

declare interface RelativeTimeThreshold {
  l: string
  r?: number
  d?: string
}

declare interface RelativeTimeOptions {
  rounding?: (num: number) => number
  thresholds?: RelativeTimeThreshold[]
}

declare const plugin: PluginFunc<RelativeTimeOptions>
export default plugin

declare module '..' {
  export interface Dayjs {
    fromNow(withoutSuffix?: boolean): string
    from(compared: ConfigType, withoutSuffix?: boolean): string
    toNow(withoutSuffix?: boolean): string
    to(compared: ConfigType, withoutSuffix?: boolean): string
  }
}
