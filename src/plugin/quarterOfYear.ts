import type { Dayjs, Plugin } from '..'

declare module '../types' {
  export interface Extend {
    quarter: GetterFn
  }
}

const plugin: Plugin = (cls) => {
  const getOrSetQuarter = () => {
    function fn(value: number): Dayjs
    function fn(): number
    function fn(this: Dayjs, value?: number): number | Dayjs {
      if (value !== undefined) {
        return this.month((this.month() % 3) + (value - 1) * 3)
      }
      return Math.ceil((this.month() + 1) / 3)
    }
    return fn
  }
  cls.prototype.quarter = getOrSetQuarter()
}
export default plugin
