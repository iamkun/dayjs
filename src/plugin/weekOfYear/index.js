import { MS, Y, D, W } from '../../constant'

export default (o, c, d) => {
  const proto = c.prototype
  proto.week = function (week = null) {
    if (week !== null) {
      return this.add((week - this.week()) * 7, D)
    }
    const yearStart = this.$locale().yearStart || 1
    if (this.month() === 11 && this.date() > 25) {
      // d(this) is for badMutable
      const nextYearStartDay = d(this).startOf(Y).add(1, Y).date(yearStart)
      const thisEndOfWeek = d(this).endOf(W)
      if (nextYearStartDay.isBefore(thisEndOfWeek)) {
        return 1
      }
    }
    const yearStartDay = d(this).startOf(Y).date(yearStart)
    const yearStartWeek = yearStartDay.startOf(W).subtract(1, MS)
    const diffInWeek = this.diff(yearStartWeek, W, true)
    if (diffInWeek < 0) {
      return d(this).startOf('week').week()
    }
    return Math.ceil(diffInWeek)
  }

  proto.weeks = function (week = null) {
    return this.week(week)
  }
}
