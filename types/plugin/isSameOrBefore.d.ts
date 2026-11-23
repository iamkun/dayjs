import { PluginFunc, ConfigType, OpUnitType, QUnitType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    isSameOrBefore(date?: ConfigType, unit?: QUnitType | OpUnitType): boolean
  }
}
