import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    localeData(): any
  }  
  
  type DayNamesTuple = [string, string, string, string, string, string, string];
  type MonthNamesTuple = [string, string, string, string, string, string, string, string, string, string, string, string];

  export function weekdays(): DayNamesTuple;
  export function weekdaysShort(): DayNamesTuple;
  export function weekdaysMin(): DayNamesTuple;
  export function monthsShort(): MonthNamesTuple;
  export function months(): MonthNamesTuple;
}
