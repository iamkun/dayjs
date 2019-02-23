import { PluginFunc, DateType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    isBetween(a: DateType, b: DateType): boolean
  }
}
