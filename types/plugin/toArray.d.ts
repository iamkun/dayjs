import type { PluginFunc } from '..'

declare const plugin: PluginFunc
export default plugin

declare module '..' {
  interface Dayjs {
    toArray(): number[]
  }
}
