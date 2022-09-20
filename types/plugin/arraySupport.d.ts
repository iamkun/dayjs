import { PluginFunc } from '..'

declare module '..' {
  interface ConfigTypeMap {
    arraySupport: [number?, number?, number?, number?, number?, number?, number?]
  }
}

declare const plugin: PluginFunc
export default plugin
