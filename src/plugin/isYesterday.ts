import type { Dayjs, Plugin } from '..'

export type IsYesterday = () => boolean

declare module '../types' {
  export interface Extend {
    isYesterday: IsYesterday
  }
}

const plugin: Plugin = (cls, fn) => {
  const isYesterday: IsYesterday = function (this: Dayjs): boolean {
    const comparisonTemplate = 'YYYY-MM-DD'
    const now = fn()
    return this.format(comparisonTemplate) === now.format(comparisonTemplate)
  }

  cls.prototype.isYesterday = isYesterday
}
export default plugin
