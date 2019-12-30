import { MS, Y, D, W } from '../../constant'

export default (o, c, d) => {
  const proto = c.prototype
  proto.week = function (week = null) {
    if (week !== null) {
      return this.add((week - this.week()) * 7, 'day')
    }
    const weekStart = this.$locale().weekStart || 0
    const startOfYear = d(this).startOf(Y)
    const compareDay = startOfYear.subtract(startOfYear.day() - weekStart, D).subtract(1, MS)
    const diffInWeek = this.diff(compareDay, W, true)
    const result = Math.ceil(diffInWeek)
    return result > 52 ? 1 : result
  }

  proto.weeks = function (week = null) {
    return this.week(week)
  }
}
