export default (o, c) => {
  const proto = c.prototype
  proto.weekday = function (input) {
    const weekStart = this.$locale().weekStart || 0
    const { $W } = this
    const weekday = ($W < weekStart ? $W + 7 : $W) - weekStart
    if (this.$utils().u(input)) {
      return weekday
    }
    return this.subtract(weekday, 'day').add(input, 'day')
  }
}

