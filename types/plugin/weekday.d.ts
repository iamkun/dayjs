import type { PluginFunc } from '..'

declare const plugin: PluginFunc
export default plugin

declare module '..' {
  interface Dayjs {
    weekday(): number

    weekday(value: number): Dayjs
  }
}
