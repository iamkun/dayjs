import polyfill from './polyfillLoader'

export default (o, c, d) => {
  polyfill()
  const proto = c.prototype
  function makeTz(tz, original) {
    return (date, offset) => {
      const res = d(new Date(date.add(offset, 'minutes').toDate().toLocaleString('en-US', { timeZone: tz })))
      const diff = (original - res.toDate()) / 1000 / 60
      // console.log(offset, diff, res.hour())
      return { diff, hour: res.hour() }
    }
  }
  // date: dayjs, difference in offset relative to local in mins
  function dstCalculations(date, diff, tz) {
    const toTz = makeTz(tz, date.toDate())
    let difference = diff + 0
    const positive = toTz(date, difference + 60)
    const original = toTz(date, difference)
    const negative = toTz(date, difference - 60)
    const pHour = positive.hour // inverses depending on relative tz
    const pDiff = positive.diff
    const oHour = original.hour
    const oDiff = original.diff
    const nHour = negative.hour
    const nDiff = negative.diff
    let modifier = 0
    if (Math.sign(difference) === 1) { // relative negative time london to new york
      if ((oHour - nHour) !== 1 && (oHour - nHour) !== -23) { // forward dst
        difference += oDiff
        modifier = oHour - nHour
      } else if (nHour !== pHour && nHour !== oHour && oHour !== pHour) { // usual
        difference += oDiff
      } else if (
        nDiff === oDiff
      ) { // backward dst
        difference += negative.diff
      } else if (
        pDiff === oDiff
      ) { // before backward dst
        difference += positive.diff
      }
    } else if (Math.sign(difference) === -1) { // misses offset near dst
      if (pHour !== oHour && (pHour - oHour) !== 1 && (pHour - oHour) !== -23) { // forward dst
        modifier = pHour - oHour
        // modifier = pHour - oHour //onchange
      } else if (nHour !== pHour && nHour !== oHour && oHour !== pHour) { // usual
        difference += oDiff
      } else if (
        nDiff === oDiff
      ) { // backward dst
        difference += pDiff
      } else if (
        pDiff === oDiff
      ) { // before backward dst
        difference += oDiff
      }
    }
    return { modifier, difference }
  }
  d.tz = function (iDate, tz) {
    const REGEX_OFFSET = /((-|\+)\d\d:\d\d|\.\d+|Z)+$/
    const offset = typeof iDate === 'string' && iDate.match(REGEX_OFFSET)
    const initialized = d(offset ? iDate.slice(0, -6) : iDate)
    const parsed = initialized.toDate()
    const zoned = new Date(parsed.toLocaleString('en-US', { timeZone: tz }))
    let iDifference = (parsed - zoned) / 1000 / 60
    const { modifier, difference } = dstCalculations(initialized, iDifference, tz)
    iDifference = difference + 0
    if (offset) {
      const minutes = iDifference + parsed.getTimezoneOffset()
      const hours = minutes / 60
      if (hours > 9 ? `${hours}` : `0${hours}` !== offset[0].slice(1, 3)) {
        const specOffset = Number(offset[0].slice(1, 3))
        iDifference += ((specOffset - Math.abs(hours)) * 60 * Math.sign(iDifference))
      }
    }
    const nDifference = new Date(initialized.add(iDifference, 'minutes').toDate().toLocaleString('en-US', { timeZone: tz }))
    const result = d(nDifference, { tzOffsetModifier: iDifference, timeZone: tz }).add(modifier, 'hour')
    return result
  }
  proto.tz = function (tz) {
    const { modifier, difference } = dstCalculations(this, 0, tz)
    const date = new Date(Date.parse(this.add(modifier || 0, 'hour').toDate()) + ((difference + this.$tzOffsetModifier) * 1000 * 60))
    const zoned = new Date(date.toLocaleString('en-US', { timeZone: tz }))
    // for getTimezoneOffset in minutes used for output thats rounded anyway
    const diff = (date - zoned) / 1000 / 60
    const clone = d(zoned)
    clone.$tzOffsetModifier = diff
    clone.timeZone = tz
    return clone
  }
  d.tz.guess = function () {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  }
  function subTz(date) {
    return date.slice(date.indexOf(',') + 2)
  }
  proto.zoneAbbr = function () {
    return subTz(this.clone().locale('en-US').format('', { timeZoneName: 'short' }))
  }
  proto.zoneName = function () {
    return subTz(this.clone().locale('en-US').format('', { timeZoneName: 'long' }))
  }
}
