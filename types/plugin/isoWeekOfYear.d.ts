import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    isoWeekYear(): number
    isoWeek(): number

    isoWeek(value: number): Dayjs
  }
}
