import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    isSameOrBefore(date: DateType, unit?: OpUnitType): boolean
  }
}
