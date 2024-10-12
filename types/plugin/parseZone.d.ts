import { ConfigType, PluginFunc } from 'dayjs'
/**
 * @see https://github.com/iamkun/dayjs/issues/651#issuecomment-763033265
 * decorates dayjs in order to keep the utcOffset of the given date string
 * natively dayjs auto-converts to local time & losing utcOffset info.
 */
declare const pluginFunc: PluginFunc<unknown>
export default pluginFunc

declare module 'dayjs' {
  export function parseZone(date?: ConfigType, format?: string, locale?: string, strict?: boolean): Dayjs
}
