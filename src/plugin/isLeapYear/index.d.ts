import { ConfigType, PluginFunc } from '../../index'

interface IsLeapYearPlugin {
  isLeapYear(): boolean
}

declare const pluginFn: PluginFunc<IsLeapYearPlugin>
export default pluginFn
