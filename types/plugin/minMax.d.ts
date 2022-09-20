import { PluginFunc } from '..'

declare const plugin: PluginFunc
export default plugin

declare module '..' {
  export function max(dayjs: Dayjs[]): Dayjs
  export function max(...dayjs: Dayjs[]): Dayjs
  export function min(dayjs: Dayjs[]): Dayjs
  export function min(...dayjs: Dayjs[]): Dayjs
}
