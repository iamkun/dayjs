import { PluginFunc, ConfigType } from '..'

declare const plugin: PluginFunc
export default plugin

declare module '..' {
  interface Dayjs {
    calendar(referenceTime?: ConfigType, formats?: object): string
  }
}
