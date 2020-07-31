const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
}

export default (o, c, d) => {
  const localUtcOffset = d().utcOffset()
  const tzOffset = (timestamp, timezone) => {
    const date = new Date(timestamp)
    const dtf = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    const fotmatResult = dtf.formatToParts(date)
    const filled = []
    for (let i = 0; i < fotmatResult.length; i += 1) {
      const { type, value } = fotmatResult[i]
      const pos = typeToPos[type]

      if (pos >= 0) {
        filled[pos] = parseInt(value, 10)
      }
    }
    const utcString = `${filled[0]}-${filled[1]}-${filled[2]} ${filled[3]}:${filled[4]}:${filled[5]}:000`
    const utcTs = d.utc(utcString).valueOf()
    let asTS = +date
    const over = asTS % 1000
    asTS -= over
    return (utcTs - asTS) / (60 * 1000)
  }
  const fixOffset = (localTS, o0, tz) => {
    let utcGuess = localTS - (o0 * 60 * 1000)
    const o2 = tzOffset(utcGuess, tz)
    if (o0 === o2) {
      return [utcGuess, o0]
    }
    utcGuess -= (o2 - o0) * 60 * 1000
    const o3 = tzOffset(utcGuess, tz)
    if (o2 === o3) {
      return [utcGuess, o2]
    }
    return [localTS - (Math.min(o2, o3) * 60 * 1000), Math.max(o2, o3)]
  }
  const proto = c.prototype
  proto.tz = function (timezone) {
    const target = this.toDate().toLocaleString('en-US', { timeZone: timezone })
    const diff = (this.toDate() - new Date(target)) / 1000 / 60
    return d(target).utcOffset(localUtcOffset - diff, true)
  }
  d.tz = function (input, timezone) {
    const previousoffset = tzOffset(+d(), timezone)
    const localTs = d.utc(input).valueOf()
    const [targetTs, targetOffset] = fixOffset(localTs, previousoffset, timezone)
    const ins = d(targetTs).utcOffset(targetOffset)
    return ins
  }

  d.tz.guess = function () {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  }
}
