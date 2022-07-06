import type { Dayjs, Plugin } from '..'

declare module '../types' {
  export interface Extend {
    toArray: typeof toArray
  }
}

function toArray(
  this: Dayjs
): [number, number, number, number, number, number, number] {
  return [
    this.year(),
    this.month(),
    this.date(),
    this.hour(),
    this.minute(),
    this.second(),
    this.millisecond(),
  ]
}

const plugin: Plugin = (cls) => (cls.prototype.toArray = toArray)
export default plugin
