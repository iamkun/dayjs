import type { PluginFunc } from '..'

declare const plugin: PluginFunc
export default plugin

declare module '..' {
  interface Dayjs {
    calendar(referenceTime?: ConfigType, formats?: object): string
  }
}
