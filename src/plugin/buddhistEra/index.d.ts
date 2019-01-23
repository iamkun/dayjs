import { ConfigType, PluginFunc } from '../../index'

interface BuddhistEraPlugin {
  format(buddhistEraFormat: string): string
}

declare const pluginFn: PluginFunc<BuddhistEraPlugin>
export default pluginFn
