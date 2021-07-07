import { PluginFunc } from 'dayjs/esm'

declare const plugin: PluginFunc
export default plugin

declare module 'dayjs/esm' {
  interface ConfigTypeMap {
    arraySupport: [number?, number?, number?, number?, number?, number?, number?]
  }
}
