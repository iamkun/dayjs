import { PluginFunc } from 'dayjs/esm'

export interface RelativeTimeThreshold {
  l: string
  r?: number
  d?: string
}

export interface RelativeTimeOptions {
  rounding?: (num: number) => number
  thresholds?: RelativeTimeThreshold[]
}

declare const plugin: PluginFunc<RelativeTimeOptions>
export default plugin

declare module 'dayjs/esm' {
  namespace dayjs {
    interface Dayjs {
      fromNow(withoutSuffix?: boolean): string
      from(compared: ConfigType, withoutSuffix?: boolean): string
      toNow(withoutSuffix?: boolean): string
      to(compared: ConfigType, withoutSuffix?: boolean): string
    }
  }
}
