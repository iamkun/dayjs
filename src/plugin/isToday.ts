import type { Dayjs, Plugin } from '..'

export type isTodayType = () => boolean

declare module '../types' {
  export interface Extend {
    isToday: isTodayType
  }
}

const plugin: Plugin = (cls, fn) => {
  const isToday: isTodayType = function (this: Dayjs): boolean {
    const comparisonTemplate = 'YYYY-MM-DD'
    const now = fn()
    return this.format(comparisonTemplate) === now.format(comparisonTemplate)
  }

  cls.prototype.isToday = isToday
}
export default plugin
