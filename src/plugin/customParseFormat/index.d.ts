import { ConfigType, PluginFunc, StaticPlugin } from '../../index'

interface CustomParseFormatPlugin extends StaticPlugin {
  (input: string, format: string): this;
}

declare const pluginFn: PluginFunc<CustomParseFormatPlugin>;
export default pluginFn
