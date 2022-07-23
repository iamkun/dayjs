import { UNIT_MILLISECOND } from '../constants'
import type { DateInput, Dayjs, Plugin, Unit } from '..'

declare module '../types' {
  export interface Extend {
    isSameOrBefore: (that: DateInput, unit?: Unit) => boolean
  }
}

const plugin: Plugin = (cls) => {
  cls.prototype.isSameOrBefore = function (
    this: Dayjs,
    that?: DateInput,
    unit: Unit = UNIT_MILLISECOND
  ) {
    return this.isSame(that, unit) || this.isBefore(that, unit)
  }
}
export default plugin
