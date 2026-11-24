import { PluginFunc, ConfigType, OpUnitType, QUnitType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    isBetween(a: ConfigType, b: ConfigType, c?: OpUnitType | QUnitType | null, d?: '()' | '[]' | '[)' | '(]'): boolean
  }
}
