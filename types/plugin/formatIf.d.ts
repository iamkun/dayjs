import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    formatIf(formatStr: string, invalidResponse?: any): any
  }
}
