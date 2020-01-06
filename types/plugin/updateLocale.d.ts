import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  export function updateLocale(localeName: String, customConfig: Object): any
}
