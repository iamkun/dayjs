import { PluginFunc, DateType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    fromNow(withoutSuffix?: boolean): string
    from(compared: DateType, withoutSuffix?: boolean): string
    toNow(withoutSuffix?: boolean): string
    to(compared: DateType, withoutSuffix?: boolean): string
  }
}
