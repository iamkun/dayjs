import { PluginFunc, ConfigType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    tz(): Dayjs
  }

  export function tz(): Dayjs
}
