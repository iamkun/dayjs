import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export default plugin


declare module 'dayjs/esm' {
  export type ISOUnitType = OpUnitType | 'isoWeek'

  namespace dayjs {
    interface Dayjs {
      isoWeekYear(): number
      isoWeek(): number
      isoWeek(value: number): Dayjs

      isoWeekday(): number
      isoWeekday(value: number): Dayjs

      startOf(unit: ISOUnitType): Dayjs
      endOf(unit: ISOUnitType): Dayjs

      isSame(date: ConfigType, unit?: ISOUnitType): boolean
      isBefore(date: ConfigType, unit?: ISOUnitType): boolean
      isAfter(date: ConfigType, unit?: ISOUnitType): boolean
    }
  }
}
