import { ConfigType, PluginFunc, UnitType } from '../../index'

interface IsBetweenPlugin {
  isBetween(d1: ConfigType, d2: ConfigType, unit: UnitType): boolean;
}

declare const pluginFn: PluginFunc<IsBetweenPlugin>
export default pluginFn
