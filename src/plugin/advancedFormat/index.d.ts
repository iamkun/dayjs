import { ConfigType, PluginFunc } from '../../index'

interface AdvancedFormatPlugin {
  format(advancedFormat: string): string
}

declare const pluginFn: PluginFunc<AdvancedFormatPlugin>
export default pluginFn
