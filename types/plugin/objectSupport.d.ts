import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
    interface Dayjs {
        setObject(argument: object): Dayjs
        addObject(argument:object): Dayjs
        set(argument: object): Dayjs
        add(argument?: object): Dayjs
        subtractObject(argument?: object): Dayjs
        subtract(argument?: object): Dayjs
    }
}
