import type { PluginFunc } from '..'

declare const plugin: PluginFunc
export default plugin

declare module '..' {
  interface Dayjs {
    week(): number

    week(value: number): Dayjs
  }
}
