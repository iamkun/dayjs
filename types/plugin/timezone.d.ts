import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

interface DayjsTimezone {
  (): Dayjs
  guess(): string
}

declare module 'dayjs' {
  interface Dayjs {
    tz(): Dayjs
  }

  const tz: DayjsTimezone
}
