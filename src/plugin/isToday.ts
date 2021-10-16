import type { Dayjs, Plugin } from '..'

declare module '../types' {
  export interface Extend {
    isToday: () => boolean
  }
}

const plugin: Plugin = (cls, fn) => {
  function isToday(this: Dayjs) {
    const comparisonTemplate = 'YYYY-MM-DD'
    const now = fn()
    return this.format(comparisonTemplate) === now.format(comparisonTemplate)
  }
  cls.prototype.isToday = isToday
}
export default plugin
