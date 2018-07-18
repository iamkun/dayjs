export default (o, c, d) => {
  const STRINGS = {
    nodiff: '',
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
    day: 'day',
    days: 'days',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    second: 'second',
    seconds: 'seconds',
    delimiter: ' '
  }
  function pluralize(num, word) {
    return `${num} ${STRINGS[word + (num === 1 ? '' : 's')]}`
  }
  function buildStringFromValues(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff) {
    const result = []
    if (yDiff) {
      result.push(pluralize(yDiff, 'year'))
    }
    if (mDiff) {
      result.push(pluralize(mDiff, 'month'))
    }
    if (dDiff) {
      result.push(pluralize(dDiff, 'day'))
    }
    if (hourDiff) {
      result.push(pluralize(hourDiff, 'hour'))
    }
    if (minDiff) {
      result.push(pluralize(minDiff, 'minute'))
    }
    if (secDiff) {
      result.push(pluralize(secDiff, 'second'))
    }
    return result.join(STRINGS.delimiter)
  }
  function buildValueObject(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff, firstDateWasLater) {
    return {
      years: yDiff,
      months: mDiff,
      days: dDiff,
      hours: hourDiff,
      minutes: minDiff,
      seconds: secDiff,
      firstDateWasLater
    }
  }
  d.preciseDiff = function (d1, d2, returnValueObject) {
    let m1 = d(d1)
    let m2 = d(d2)
    let firstDateWasLater
    if (m1.isSame(m2)) {
      if (returnValueObject) {
        return buildValueObject(0, 0, 0, 0, 0, 0, false)
      }
      return STRINGS.nodiff
    }
    if (m1.isAfter(m2)) {
      const tmp = m1
      m1 = m2
      m2 = tmp
      firstDateWasLater = true
    } else {
      firstDateWasLater = false
    }

    let yDiff = m2.year() - m1.year()
    let mDiff = m2.month() - m1.month()
    let dDiff = m2.date() - m1.date()
    let hourDiff = m2.hour() - m1.hour()
    let minDiff = m2.minute() - m1.minute()
    let secDiff = m2.second() - m1.second()

    if (secDiff < 0) {
      secDiff = 60 + secDiff
      minDiff -= 1
    }
    if (minDiff < 0) {
      minDiff = 60 + minDiff
      hourDiff -= 1
    }
    if (hourDiff < 0) {
      hourDiff = 24 + hourDiff
      dDiff -= 1
    }
    if (dDiff < 0) {
      const daysInLastFullMonth = d(`${m2.year()}-${m2.month() + 1}`).subtract(1, 'M').daysInMonth()
      if (daysInLastFullMonth < m1.date()) { // 31/01 -> 2/03
        dDiff = daysInLastFullMonth + dDiff + (m1.date() - daysInLastFullMonth)
      } else {
        dDiff = daysInLastFullMonth + dDiff
      }
      mDiff -= 1
    }
    if (mDiff < 0) {
      mDiff = 12 + mDiff
      yDiff -= 1
    }
    if (returnValueObject) {
      return buildValueObject(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff, firstDateWasLater)
    }
    return buildStringFromValues(yDiff, mDiff, dDiff, hourDiff, minDiff, secDiff)
  }
}
