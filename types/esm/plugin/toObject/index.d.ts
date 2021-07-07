import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs/esm' {
  namespace dayjs {
    interface DayjsObject {
      years: number
      months: number
      date: number
      hours: number
      minutes: number
      seconds: number
      milliseconds: number
    }

    interface Dayjs {
      toObject(): DayjsObject
    }
  }
}
