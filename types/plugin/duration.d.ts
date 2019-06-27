import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

interface durationObject{
    ISO: string,
    s: number,
    m: number,
    H: number,
    D: number,
    M: number,
    y: number
}

declare module 'dayjs' {
  interface Dayjs {
    duration(value: number, unit: string): durationObject
  }
}
