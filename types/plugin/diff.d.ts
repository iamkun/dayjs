import { PluginFunc, ConfigType, UnitTypeLong, UnitTypeLongPlural } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    diff(u: UnitTypeLong | UnitTypeLongPlural, v: ConfigType): number
  }
}
