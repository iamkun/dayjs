export default (o, c, d) => {
  const proto = c.prototype
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
    return d(input).tz(timezone)
  }
}

