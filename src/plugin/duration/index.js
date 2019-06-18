export default (o, c) => {
  /**
    * convert a number to a ISO 8601 duration
    * @param  {number} value a number
    * @param  {string} unit unit of time of the number
    * @return {object} duration object
  */
  c.prototype.duration = function (value, unit) {
    if (typeof value !== 'number') { // check for correct value input
      // error not a number
      return {}
    }

    // P[n]Y[n]M[n]DT[n]H[n]M[n]S
    // other format P[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss]
    /**
    * convert a number to his time unit
    * @param  {number} v a number
    * @param  {string} u unit of time of the number
    * @return {array[r, nextUnit]} return next time unit and is value to parse
    */
    function parse(v, u, duration) {
      let r = 0
      let nextUnit = ''
      switch (u) {
        case 'seconde':
          r = Math.floor(v / 60)
          if (r >= 1) {
            duration.s = v % 60
            duration.ISO = `${duration.s}S${duration.ISO}`
            nextUnit = 'minute'
          } else {
            duration.s = v
            duration.ISO = `${duration.s}S${duration.ISO}`
            nextUnit = ''
          }
          break
        case 'minute':
          r = Math.floor(v / 60)
          if (r >= 1) {
            duration.m = v % 60
            duration.ISO = `${duration.m}M${duration.ISO}`
            nextUnit = 'hour'
          } else {
            duration.m = v
            duration.ISO = `${duration.m}M${duration.ISO}`
            nextUnit = ''
          }
          break
        case 'hour':
          r = Math.floor(v / 24)
          if (r >= 1) {
            duration.H = v % 24
            duration.ISO = `T${duration.H}H${duration.ISO}`
            nextUnit = 'day'
          } else {
            duration.H = v
            duration.ISO = `T${duration.H}H${duration.ISO}`
            nextUnit = ''
          }
          break
        case 'day': // average number of day per month 30.416 in a year
          r = Math.floor(v / 30.416) // is it ok?
          if (r >= 1) {
            duration.D = Math.floor(v % 30.416)
            duration.ISO = `${duration.D}D${duration.ISO}`
            nextUnit = 'month'
          } else {
            duration.D = v
            duration.ISO = `${duration.D}D${duration.ISO}`
            nextUnit = ''
          }
          break
        // case 'week': // add week?
        //   break
        case 'month':
          r = Math.floor(v / 12)
          if (r >= 1) {
            duration.M = v % 12
            duration.ISO = `${duration.M}M${duration.ISO}`
            nextUnit = 'year'
          } else {
            duration.M = v
            duration.ISO = `${duration.M}M${duration.ISO}`
            nextUnit = ''
          }
          break
        case 'year':
          duration.y = v
          duration.ISO = `${duration.y}Y${duration.ISO}`
          nextUnit = ''
          break
        default:
          r = 0
          nextUnit = ''
          break
      }
      return [r, nextUnit]
    }

    /**
    * return the desired format of duration
    * @param  {string} token a string describing the desired format
    * @return {string} return duration format
    */

    // function format(token) {
    // }

    const duration = {
      ISO: '',
      s: 0,
      m: 0,
      H: 0,
      D: 0,
      M: 0,
      y: 0
    }
    // duration.format = format

    let rest = value
    let u = unit
    while (u !== '') {
      [rest, u] = parse(rest, u, duration)
    }
    duration.ISO = `P${duration.ISO}`

    return duration
  }
}
