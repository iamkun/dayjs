import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
    interface Dayjs {
        set(argument: object): Dayjs
        add(argument: object): Dayjs
        subtract(argument: object): Dayjs
    }
}
