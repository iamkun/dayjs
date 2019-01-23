import { ConfigType, PluginFunc } from '../../index'

interface RelativeTimePlugin {
  fromNow(withoutSuffix?: boolean): string
  from(compared: ConfigType, withoutSuffix?: boolean): string
  toNow(withoutSuffix?: boolean): string
  to(compared: ConfigType, withoutSuffix?: boolean): string
}

declare const pluginFn: PluginFunc<RelativeTimePlugin>
export default pluginFn
