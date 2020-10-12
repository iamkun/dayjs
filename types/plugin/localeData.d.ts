import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    localeData(): LocaleDataReturn;
  }
  
  type WeekdayNames = [string, string, string, string, string, string, string];
  type MonthNames = [string, string, string, string, string, string, string, string, string, string, string, string];

  interface LocaleDataReturn {
    firstDayOfWeek(): number,
    weekdays(): WeekdayNames
    weekdaysShort(): WeekdayNames,
    weekdaysMin(): WeekdayNames,
    months(): MonthNames,
    monthsShort(): MonthNames,
    longDateFormat(): string;
  }

  export function weekdays(): WeekdayNames;
  export function weekdaysShort(): WeekdayNames;
  export function weekdaysMin(): WeekdayNames;
  export function monthsShort(): MonthNames;
  export function months(): MonthNames;
  export function localeData(): LocaleDataReturn;
}
