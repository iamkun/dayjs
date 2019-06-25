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

    const TIME_CONSTANT = {
      seconde: { u: 60, s: 's', next: 'minute' },
      minute: { u: 60, s: 'm', next: 'hour' },
      hour: { u: 24, s: 'H', next: 'day' },
      day: { u: 30.417, s: 'D', next: 'month' }, // average number of day per month 30.417 in a year
      month: { u: 12, s: 'M', next: 'year' },
      year: { u: 1, s: 'y', next: '' }
    }

    const duration = {
      ISO: '',
      s: 0,
      m: 0,
      H: 0,
      D: 0,
      M: 0,
      y: 0
    }
    /**
    * convert a number to his time unit
    * @param  {number} v a number
    * @param  {string} u unit of time of the number
    * @return {array[r, nextUnit]} return a value and his time unit to parse
    */
    function parse(v, u) { // way shorter
      let nextUnit = ''
      const r = Math.floor(v / TIME_CONSTANT[u].u) // is it ok?
      if (r >= 1) {
        duration[TIME_CONSTANT[u].s] = TIME_CONSTANT[u].u === 1 ? v
          : Math.floor(v % TIME_CONSTANT[u].u)
        nextUnit = TIME_CONSTANT[u].next
      } else {
        duration[TIME_CONSTANT[u].s] = v
        nextUnit = ''
      }
      duration.ISO = u === 'hour' ? `T${duration[TIME_CONSTANT[u].s]}${TIME_CONSTANT[u].s}${duration.ISO}`
        : `${duration[TIME_CONSTANT[u].s]}${TIME_CONSTANT[u].s}${duration.ISO}`
      return [r, nextUnit]
    }

    /**
    * return the desired format of duration
    * @param  {string} token a string describing the desired format
    * @return {string} return duration format
    */
    // format function () {
    //
    // }
    // duration.format = format

    let rest = value
    let u = unit
    while (u !== '') {
      [rest, u] = parse(rest, u)
    }
    duration.ISO = `P${duration.ISO.toUpperCase()}`

    return duration
  }
}
