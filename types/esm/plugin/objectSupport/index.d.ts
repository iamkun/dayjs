import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs/esm' {
  namespace dayjs {
    interface Dayjs {
      set(argument: object): Dayjs
      add(argument: object): Dayjs
      subtract(argument: object): Dayjs
    }
  }
}
