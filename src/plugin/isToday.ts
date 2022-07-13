import type { Dayjs, Plugin } from '..'

export type IsToday = () => boolean

declare module '../types' {
  export interface Extend {
    isToday: IsToday
  }
}

const plugin: Plugin = (cls, fn) => {
  const isToday: IsToday = function (this: Dayjs): boolean {
    const comparisonTemplate = 'YYYY-MM-DD'
    const now = fn()
    return this.format(comparisonTemplate) === now.format(comparisonTemplate)
  }

  cls.prototype.isToday = isToday
}
export default plugin
