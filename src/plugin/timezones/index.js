import polyfill from './polyfillLoader'

export default (o, c, d) => {
  polyfill()
  const proto = c.prototype
  // constructor
  d.tz = function (date, tz) {
    const parsed = d(date).toDate()
    const zoned = new Date(parsed.toLocaleString('en', { timeZone: tz }))
    const difference = (parsed - zoned) / 1000 / 60
    return d(date, { tzOffsetModifier: difference, timeZone: tz })
  }
  d.tz = function (iDate, tz) {
    // DST sensitive
    const parsed = d(iDate).toDate()
    const zoned = new Date(parsed.toLocaleString('en-US', { timeZone: tz }))
    // for getTimezoneOffset in minutes used for output thats rounded anyway
    const iDifference = (parsed - zoned) / 1000 / 60
    const result = new Date(new Date(Date.parse(parsed) + (iDifference * 1000 * 60)).toLocaleString('en-US', { timeZone: tz }))
    const difference = (iDifference + (parsed - result)) / 1000 / 60
    return d(result, { tzOffsetModifier: difference, timeZone: tz })
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
