import { MS, Y, D, W } from '../../constant'

export default (o, c, d) => {
  const proto = c.prototype
  proto.week = function (week = null) {
    if (week !== null) {
      return this.add((week - this.week()) * 7, 'day')
    }

    const weekStart = this.$locale().weekStart || 0

    // d(this) clone is for badMutable plugin
    const endOfYear = d(this).endOf(Y)
    if (
      weekStart === 0 &&
      endOfYear.day() !== 6 &&
      this.month() === 11 &&
      31 - this.date() <= endOfYear.day()
    ) {
      return 1
    }

    const startOfYear = d(this).startOf(Y)
    const compareDay = startOfYear.subtract(startOfYear.day() - weekStart, D).subtract(1, MS)
    const diffInWeek = this.diff(compareDay, W, true)
    return Math.ceil(diffInWeek)
  }
  proto.weeks = function (week = null) {
    return this.week(week)
  }
}
