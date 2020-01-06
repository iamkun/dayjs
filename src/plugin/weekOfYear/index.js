import { MS, Y, D, W } from '../../constant'

const checkSpecialYear = (ins) => {
  const { yearStart } = ins.$locale()
  if (!yearStart) return false
  const realStartOfYear = ins.startOf(Y).date(yearStart)
  const dayOfRealStartOfYear = realStartOfYear.day() || 7
  return dayOfRealStartOfYear < yearStart
}

export default (o, c, d) => {
  const proto = c.prototype
  proto.week = function (week = null) {
    if (week !== null) {
      return this.add((week - this.week()) * 7, 'day')
    }
    const weekStart = this.$locale().weekStart || 0
    const { yearStart } = this.$locale()
    let startOfYear = d(this).startOf(Y)
    const isSpecialWeekStart = checkSpecialYear(this)
    if (isSpecialWeekStart) {
      startOfYear = startOfYear.date(yearStart)
    }
    const compareDay = startOfYear.subtract(startOfYear.day() - weekStart, D).subtract(1, MS)
    const diffInWeek = this.diff(compareDay, W, true)
    if (diffInWeek < 0) return d(this).startOf(Y).subtract(1, MS).week()
    const result = Math.ceil(diffInWeek)
    if (result > 52) {
      const nextYearDay = this.add(1, 'month')
      return checkSpecialYear(nextYearDay) ? result : 1
    }
    return result
  }

  proto.weeks = function (week = null) {
    return this.week(week)
  }
}
