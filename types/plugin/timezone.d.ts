import { PluginFunc, ConfigType } from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    tz(timezone: string): Dayjs
  }

  interface DayjsTimezone {
    (date: ConfigType, timezone: string): Dayjs
    guess(): string
    setDefault(timezone?: string): void
  }

  const tz: DayjsTimezone
}
