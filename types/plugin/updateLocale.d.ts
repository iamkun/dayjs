/// <reference path="../locale/types.d.ts" />

import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  export function updateLocale(localeName: string, customConfig: Partial<ILocale>): ILocale
}
