export default (o, c, d) => {
  const LT = 'h:mm A'
  const L = 'MM/DD/YYYY'
  const calendarFormat = {
    lastDay: `[Yesterday at] ${LT}`,
    sameDay: `[Today at] ${LT}`,
    nextDay: `[Tomorrow at] ${LT}`,
    nextWeek: `dddd [at] ${LT}`,
    lastWeek: `[Last] dddd [at] ${LT}`,
    sameElse: L
  }
  const proto = c.prototype
  proto.calendar = function (referenceTime, callbacks) {
    const format = callbacks || this.$locale().calendar || calendarFormat
    const referenceStartOfDay = d(referenceTime || undefined).startOf('d')
    const diff = this.diff(referenceStartOfDay, 'd', true)
    const sameElse = 'sameElse'
    /* eslint-disable no-nested-ternary */
    const retVal = diff < -6 ? sameElse :
      diff < -1 ? 'lastWeek' :
        diff < 0 ? 'lastDay' :
          diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
              diff < 7 ? 'nextWeek' : sameElse
    /* eslint-enable no-nested-ternary */
    const currentFormat = format[retVal] || calendarFormat[retVal]
    if (typeof currentFormat === 'function') {
      return currentFormat(referenceStartOfDay)
    }
    const formattedDate = this.format(currentFormat)
    return formattedDate
  }
}

