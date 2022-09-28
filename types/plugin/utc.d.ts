import type { PluginFunc } from '..'

declare const plugin: PluginFunc
export default plugin

declare module '..' {
  interface Dayjs {
    utc(keepLocalTime?: boolean): Dayjs

    local(): Dayjs

    isUTC(): boolean

    utcOffset(offset: number | string, keepLocalTime?: boolean): Dayjs
  }

  export function utc(
    config?: ConfigType,
    format?: string,
    strict?: boolean
  ): Dayjs
}
