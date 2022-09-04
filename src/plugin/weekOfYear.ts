import type { Dayjs, Plugin } from '..'

declare module '../types' {
  export interface Extend {
    week: GetterFn
  }
}

const plugin: Plugin = (cls, fn) => {
  const getOrSetWeek = () => {
    function weekOfYear(value: number): Dayjs
    function weekOfYear(): number
    function weekOfYear(this: Dayjs, value?: number): number | Dayjs {
      if (value !== undefined) {
        return this.add((value - this.week()) * 7, 'd')
      }
      const yearStart = this.$locale().yearStart || 1
      if (this.month() === 11 && this.date() > 25) {
        // d(this) is for badMutable
        const nextYearStartDay = fn(this)
          .startOf('y')
          .add(1, 'y')
          .date(yearStart)
        const thisEndOfWeek = fn(this).endOf('w')
        if (nextYearStartDay.isBefore(thisEndOfWeek)) {
          return 1
        }
      }
      const yearStartDay = fn(this).startOf('y').date(yearStart)
      const yearStartWeek = yearStartDay.startOf('w').subtract(1, 'ms')
      const diffInWeek = this.diff(yearStartWeek, 'w', true)
      if (diffInWeek < 0) {
        return fn(this).startOf('week').week()
      }
      return Math.ceil(diffInWeek)
    }
    return weekOfYear
  }

  cls.prototype.week = getOrSetWeek()
}

export default plugin
