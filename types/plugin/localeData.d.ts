import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  type WeekdayNames = [string, string, string, string, string, string, string];
  type MonthNames = [string, string, string, string, string, string, string, string, string, string, string, string];

  interface InstanceLocaleDataReturn {
    firstDayOfWeek(): number;
    weekdays(instance: Dayjs): string;
    weekdays(): WeekdayNames;
    weekdaysShort(instance: Dayjs): string;
    weekdaysShort(): WeekdayNames;
    weekdaysMin(instance: Dayjs): string;
    weekdaysMin(): WeekdayNames;
    months(instance: Dayjs): string;
    months(): MonthNames;
    monthsShort(instance: Dayjs): string;
    monthsShort(): MonthNames;
    longDateFormat(format: string): string;
    meridiem(hour?: number, minute?: number, isLower?: boolean): string;
  }

  interface GlobalLocaleDataReturn {
    firstDayOfWeek(): number;
    weekdays(): WeekdayNames;
    weekdaysShort(): WeekdayNames;
    weekdaysMin(): WeekdayNames;
    months(): MonthNames;
    monthsShort(): MonthNames;
    longDateFormat(format: string): string;
    meridiem(hour?: number, minute?: number, isLower?: boolean): string;
  }

  interface Dayjs {
    localeData(): InstanceLocaleDataReturn;
  }

  export function weekdays(localOrder?: boolean): WeekdayNames;
  export function weekdaysShort(localOrder?: boolean): WeekdayNames;
  export function weekdaysMin(localOrder?: boolean): WeekdayNames;
  export function monthsShort(): MonthNames;
  export function months(): MonthNames;
  export function localeData(): GlobalLocaleDataReturn;
}
