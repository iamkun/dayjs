import polyfill from './polyfillLoader'

export default (o, c, d) => {
  polyfill()
  const proto = c.prototype
  // constructor
  d.tz = function (date, tz) {
    const zoned = new Date(d(date).toDate().toLocaleString('en-US', { timeZone: tz }))
    // for getTimezoneOffset in minutes used for output thats rounded anyway
    const difference = (d(date).toDate() - zoned) / 1000 / 60
    return d(date, { tzOffsetModifier: difference, timeZone: tz })
  }
  proto.tz = function (tz) {
    const date = new Date(Date.parse(this.toDate()) + (this.$tzOffsetModifier * 1000 * 60))
    const zoned = new Date(date.toLocaleString('en-US', { timeZone: tz }))
    // for getTimezoneOffset in minutes used for output thats rounded anyway
    const difference = (date - zoned) / 1000 / 60
    const clone = d(zoned)
    clone.$tzOffsetModifier = difference
    clone.timeZone = tz
    return clone
  }
}
