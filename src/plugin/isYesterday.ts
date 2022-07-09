import type { Dayjs, Plugin } from '..'

export type isYesterdayType = () => boolean

declare module '../types' {
  export interface Extend {
    isYesterday: isYesterdayType
  }
}

const plugin: Plugin = (cls, fn) => {
  const isYesterday: isYesterdayType = function (this: Dayjs): boolean {
    const comparisonTemplate = 'YYYY-MM-DD'
    const now = fn()
    return this.format(comparisonTemplate) === now.format(comparisonTemplate)
  }

  cls.prototype.isYesterday = isYesterday
}
export default plugin
