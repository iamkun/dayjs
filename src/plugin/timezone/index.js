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
    const REGEX_OFFSET = /((-|\+)\d\d:\d\d|\.\d+|Z)+$/
    const offset = typeof input === 'string' && input.match(REGEX_OFFSET)
    if (offset) return d(input).tz(timezone)
    const local = d(input)
    const makeTz = dayjsobj => d(new Date(dayjsobj.toDate().toLocaleString('en-US', { hour12: false, timeZone: timezone })))
    const isGreat = makeTz(local).isBefore(local)
    let re
    for (let i = 0; i <= 24; i += 1) {
      const cc = local[isGreat ? 'add' : 'subtract'](i, 'hour')
      const compare = makeTz(cc)
      if (compare[isGreat ? 'isAfter' : 'isBefore'](local) || compare.isSame(local)) {
        re = cc
        break
      }
    }
    const localTime = d(re)
    return localTime.utcOffset(300)
  }
}

