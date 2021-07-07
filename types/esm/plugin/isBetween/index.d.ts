import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs/esm' {
  namespace dayjs {
    interface Dayjs {
      isBetween(a: ConfigType, b: ConfigType, c?: OpUnitType | null, d?: '()' | '[]' | '[)' | '(]'): boolean
    }
  }
}
