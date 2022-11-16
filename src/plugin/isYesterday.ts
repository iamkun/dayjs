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
    const yesterday = fn().subtract(1, 'day')
    return (
      this.format(comparisonTemplate) === yesterday.format(comparisonTemplate)
    )
  }

  cls.prototype.isYesterday = isYesterday
}
export default plugin
