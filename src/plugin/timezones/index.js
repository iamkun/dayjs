import polyfill from './polyfillLoader'

export default (o, c, d) => {
  polyfill()
  const proto = c.prototype
  d.tz = function (iDate, tz) {
    // DST sensitive
    const REGEX_OFFSET = /((-|\+)\d\d:\d\d|\.\d+|Z)+$/
    const offset = typeof iDate === 'string' && iDate.match(REGEX_OFFSET)
    const initialized = d(offset ? iDate.slice(0, -6) : iDate) // cut off point, where nontz is used
    const parsed = initialized.toDate()
    const zoned = new Date(parsed.toLocaleString('en-US', { timeZone: tz }))
    // for getTimezoneOffset in minutes used for output thats rounded anyway
    let iDifference = (parsed - zoned) / 1000 / 60
    // accepts offsets for when backwards hour of dst is specified, offset +5 to +4 change
    if (offset) {
      const minutes = iDifference + parsed.getTimezoneOffset()
      const hours = minutes / 60
      if (hours > 9 ? `${hours}` : `0${hours}` !== offset[0].slice(1, 3)) {
        const specOffset = Number(offset[0].slice(1, 3))
        // const specDiff = hours - specOffset
        // const ini = iDifference * 1
        iDifference += ((specOffset - hours) * 60)
        // const b = 0
      } // should decrease
    }
    // dst tripped during tz check as time is added if positive tz change
    if (Math.sign(iDifference) === -1) {
      const nDifference = new Date(initialized.add(iDifference, 'minutes').toDate().toLocaleString('en-US', { timeZone: tz }))
      if (nDifference < parsed) {
        iDifference += 60
      }
    }
    const result = new Date(new Date(Date.parse(parsed) + (iDifference * 1000 * 60)).toLocaleString('en-US', { timeZone: tz }))
    const difference = iDifference + ((parsed - result) / 1000 / 60)
    const packed = d(result, { tzOffsetModifier: difference, timeZone: tz })
    // determining tz offset triggers dst
    // if (Math.sign(iDifference) === -1 && iDifference !== difference){
    //   return packed.add(1, 'hour')
    // } else {
    return packed
    // }
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
