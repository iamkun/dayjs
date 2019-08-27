import { PluginFunc, ConfigType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    
    utc(): Dayjs
    
    local(): Dayjs

    isUTC(): boolean

    utcOffset(offset: number): Dayjs
  }

  export function utc(config?: ConfigType, format?: string): Dayjs
}
