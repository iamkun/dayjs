import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs/esm' {
  namespace dayjs {
    export function max(dayjs: Dayjs[]): Dayjs
    export function max(...dayjs: Dayjs[]): Dayjs
    export function min(dayjs: Dayjs[]): Dayjs
    export function min(...dayjs: Dayjs[]): Dayjs
  }
}
