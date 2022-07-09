import type { Dayjs, Plugin } from '..'

export type toArrayType = () => [
  number,
  number,
  number,
  number,
  number,
  number,
  number
]

declare module '../types' {
  export interface Extend {
    toArray: toArrayType
  }
}

const plugin: Plugin = (cls) => {
  const toArray: toArrayType = function (
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

  cls.prototype.toArray = toArray
}
export default plugin
