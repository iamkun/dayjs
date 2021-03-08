import { PluginFunc } from 'dayjs'

declare module 'dayjs' {
  interface ConfigTypeMap {
    arraySupport: [year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number]
  }
}

declare const plugin: PluginFunc
export = plugin
