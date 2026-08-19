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
    weekdays(instance?: Dayjs): WeekdayNames | string;
    
    weekdaysShort(instance: Dayjs): string;
    weekdaysShort(): WeekdayNames;
    weekdaysShort(instance?: Dayjs): WeekdayNames | string;

    weekdaysMin(instance: Dayjs): string;
    weekdaysMin(): WeekdayNames;
    weekdaysMin(instance?: Dayjs): WeekdayNames | string;
    
    months(instance: Dayjs): string;
    months(): MonthNames;
    months(instance?: Dayjs): MonthNames | string;
    
    monthsShort(instance: Dayjs): string;
    monthsShort(): MonthNames;
    monthsShort(instance?: Dayjs): MonthNames | string;
    
    longDateFormat(format: string): string;
    
    meridiem(hour?: number, minute?: number, isLower?: boolean): string;
    ordinal(n: number): string
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
    ordinal(n: number): string
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
