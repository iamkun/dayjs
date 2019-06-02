import { PluginFunc, ConfigType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin
type IANAtimezone = string
type localTimezone = string
declare module 'dayjs' {
  interface Dayjs {
    toZone(withoutSuffix?: IANAtimezone): Dayjs
    toUTC(compared?: IANAtimezone): Dayjs
  }
}
