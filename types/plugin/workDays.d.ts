import { PluginFunc } from 'dayjs'
declare const plugin: PluginFunc
export = plugin
declare module 'dayjs' {
  interface Dayjs {
    workDays(end:Date|Dayjs,weekends?:number[]|string[],vacations?:Dayjs[]|string[]|Date[],overtimes?:Dayjs[]|string[]|Date[]): string[]
  }
}
