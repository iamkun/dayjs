import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    weekOfMonth(): number

    weekMapOfMonth(): { [key: string]: number[] }
  }
}
