import { PluginFunc, ConfigType } from 'dayjs'
import timezones from '../../src/plugin/timezones';
import { utc } from 'moment';

declare const plugin: PluginFunc
export = plugin
type IANAtimezone = string
type nonIANAtimezone = stirng
type localTimezone = string
declare module 'dayjs' {
  interface Dayjs {
    tz: {
      guess(): IANAtimezone
    }
    tz(date: Date, tz: IANAtimezone): Dayjs
    tz(tz: IANAtimezone): Dayjs
    zoneAbbr(): nonIANAtimezone
    zoneName(): nonIANAtimezone
    timeZone: IANAtimezone
    utc(): Dayjs
  }
}
