import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs/esm' {
  namespace dayjs {
    interface Dayjs {
      isSameOrBefore(date: ConfigType, unit?: OpUnitType): boolean
    }
  }
}
