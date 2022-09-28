import type { PluginFunc } from '..'

declare const plugin: PluginFunc
export default plugin

declare module '..' {
  export function updateLocale(
    localeName: string,
    customConfig: Record<string, unknown>
  ): Record<string, unknown>
}
