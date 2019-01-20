import { MS, Y, D, W } from '../../constant'

export default (o, c, d) => {
  const proto = c.prototype
  proto.week = function (week = null) {
    if (week <= 52 && week >= -52) {
      return this.add((week - this.week()) * 7, 'day')
    } else if (week !== null) {
      // eslint-disable-next-line prefer-template
      throw new Error('In one year 52 weeks, the resulting value: ' + week)
    }
    const endOfYear = this.endOf(Y)
    if (endOfYear.day() !== 6 && this.month() === 11 && (31 - this.date()) <= endOfYear.day()) {
      return 1
    }
    const startOfYear = d(this.$d).startOf(Y)
    const compareDay = startOfYear.subtract(startOfYear.day(), D).subtract(1, MS)
    const diffInWeek = this.diff(compareDay, W, true)
    return Math.ceil(diffInWeek)
  }
  proto.weeks = function (week = 0) {
    return this.week(week)
  }
}
