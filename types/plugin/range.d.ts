import { PluginFunc, ConfigType, OpUnitType } from 'dayjs'
import { OpUnitType, OpUnitType } from '..'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' { 
    interface DayjsRange {
      (Startdate: ConfigType, endDate: ConfigType): DayjsRange

      start: Dayjs
      end: Dayjs

      isRange(): boolean
      clone(): DayjsRange
      isOverLap(dateRange: DayjsRange): boolean
      isEqual(dateRange: DayjsRange): boolean
      addStartRange(number: number, unit?: OpUnitType): DayjsRange
      addEndRange(number: number, unit?: OpUnitType): DayjsRange
      subtractStartRange(number: number, unit?: OpUnitType): DayjsRange
      subtractEndRange(number: number, unit?: OpUnitType): DayjsRange
    }

    const range: DayjsRange
  }
