import type { PluginFunc } from '..'

declare interface PluginOptions {
  parseTwoDigitYear?: (yearString: string) => number
}

declare const plugin: PluginFunc<PluginOptions>
export default plugin
