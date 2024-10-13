import { PluginFunc, OpUnitType } from 'dayjs';

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    isBusinessDay(): boolean
    addBusinessDays(n: number, u?: OpUnitType): Dayjs
    subtractBusinessDays(n: number, u?: OpUnitType): Dayjs
    diffBusinessDays(i: Dayjs): number
    nextBusinessDays(): Dayjs
    prevBusinessDays(): Dayjs
    businessDaysInMonth(): Dayjs[]
    businessDaysInMonthByWeeks(): Dayjs[][]
  }
}