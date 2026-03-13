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
      // Date is before the year start week, so it belongs to the previous year's last week
      // Calculate the previous year's year start day
      const prevYearStartDay = d(this).startOf(Y).subtract(1, Y).date(yearStart)
      const prevYearStartWeek = prevYearStartDay.startOf(W).subtract(1, MS)
      const prevDiffInWeek = this.diff(prevYearStartWeek, W, true)
      return Math.ceil(prevDiffInWeek)
    }
    return Math.ceil(diffInWeek)
  }

  proto.weeks = function (week = null) {
    return this.week(week)
  }
}
