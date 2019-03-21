import { PluginFunc, QUnitType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    quarter(): number
    
    quarter(quarter: number): Dayjs

    add(value: number, unit: QUnitType): Dayjs

    subtract(value: number, unit: QUnitType): Dayjs

    startOf(unit: QUnitType): Dayjs

    endOf(unit: QUnitType): Dayjs
  }
}
