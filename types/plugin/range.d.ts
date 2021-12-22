import { PluginFunc, ConfigType, OpUnitType } from 'dayjs'
import { Dayjs } from '..'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' { 
    class DayjsRange {
      constructor(startDate?: ConfigType, endDate?: ConfigType)

      startDate: Dayjs
      endDate: Dayjs

      isRange(): boolean
      clone(): DayjsRange
      isOverlap(dateRange: DayjsRange): boolean
      isEqual(dateRange: DayjsRange): boolean
      addStartRange(number: number, unit?: OpUnitType): DayjsRange
      addEndRange(number: number, unit?: OpUnitType): DayjsRange
      subtractStartRange(number: number, unit?: OpUnitType): DayjsRange
      subtractEndRange(number: number, unit?: OpUnitType): DayjsRange
    }

    export function range(startDate: ConfigType, endDate: ConfigType): DayjsRange
  }
