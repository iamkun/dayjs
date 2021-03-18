import { PluginFunc } from 'dayjs'

declare interface PluginOptions {
    twoDigitYearParseFn?: (yearString: string) => number
}

declare const plugin: PluginFunc<PluginOptions>
export = plugin
