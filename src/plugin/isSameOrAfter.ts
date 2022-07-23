import { UNIT_MILLISECOND } from '../constants'
import type { DateInput, Dayjs, Plugin, Unit } from '..'

declare module '../types' {
  export interface Extend {
    isSameOrAfter: (that: DateInput, unit?: Unit) => boolean
  }
}

const plugin: Plugin = (cls) => {
  cls.prototype.isSameOrAfter = function (
    this: Dayjs,
    that?: DateInput,
    unit: Unit = UNIT_MILLISECOND
  ) {
    return this.isSame(that, unit) || this.isAfter(that, unit)
  }
}
export default plugin
