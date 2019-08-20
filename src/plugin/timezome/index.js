export default (o, c, d) => {
  const proto = c.prototype
  const oldUtcOffset = proto.utcOffset
  proto.utcOffset = function () {
    if (this.$utcOffset) {
      return this.$utcOffset
    }
    return oldUtcOffset.call(this)
  }
  proto.tz = function (timezone) {
    const localDateObj = this.toDate()
    const intlFormatedString = localDateObj.toLocaleString('en-US', {
      timeZone: timezone,
      hour12: false
    })

    const match = intlFormatedString.match(/(\d{1,2})\/(\d{1,2})\/(\d{4}), (\d{1,2}):(\d{1,2}):(\d{1,2})/)

    const standardFormatedString = `${match[3]}-${match[1]}-${match[2]} ${match[4]}:${match[5]}:${match[6]}`

    return d(standardFormatedString)
  }
  d.tz = function (input, timezone) {
    const REGEX_OFFSET = /((-|\+)\d\d:\d\d|\.\d+|Z)+$/
    const offset = typeof input === 'string' && input.match(REGEX_OFFSET)
    if (offset) return d(input).tz(timezone)
    const localTime = d(input)
    const localTimeObj = localTime.toDate()
    const zoneTime = new Date(localTimeObj.toLocaleString('en-US', { timeZone: timezone }))
    const iDifference = (localTimeObj - zoneTime) / 1000 / 60
    const actualLocalTime = localTime.add(iDifference, 'minute')
    const result = d(actualLocalTime).tz(timezone)
    const localUtcOffset = result.utcOffset()
    result.$utcOffset = localUtcOffset - iDifference
    return result
  }
}

