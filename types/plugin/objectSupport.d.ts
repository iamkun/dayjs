import { PluginFunc, UnitType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

type ObjectArgument = {
  [K in UnitType]?: number
}

declare module 'dayjs' {
  interface ConfigTypeMap {
    objectArgument: ObjectArgument
  }

  interface Dayjs {
    set(argument: ObjectArgument): Dayjs
    add(argument: ObjectArgument): Dayjs
    subtract(argument: ObjectArgument): Dayjs
  }
}
