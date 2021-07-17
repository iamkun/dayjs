import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs/esm' {
  namespace dayjs {
    interface Dayjs {
      utc(keepLocalTime?: boolean): Dayjs
      local(): Dayjs
      isUTC(): boolean
      utcOffset(offset: number, keepLocalTime?: boolean): Dayjs
    }
  
    export function utc(config?: ConfigType, format?: string, strict?: boolean): Dayjs
  }
}
