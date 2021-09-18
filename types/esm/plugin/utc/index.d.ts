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
  
    export function utc(date?: ConfigType, format?: OptionType, locale?: string, strict?: boolean): Dayjs
    export function utc(date?: ConfigType, format?: OptionType, strict?: boolean): Dayjs
  }
}
