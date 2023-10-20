export default (o, c) => {
  c.prototype.diff360 = function (t, m) {
    let startDay = parseInt(this.date(), 10)
    const startMonth = parseInt(this.month(), 10) + 1
    const startYear = parseInt(this.year(), 10)

    let endDay = parseInt(t.date(), 10)
    let endMonth = parseInt(t.month(), 10) + 1
    let endYear = parseInt(t.year(), 10)

    const isLeapYear =
      (((startYear % 4) === 0) && ((startYear % 100) !== 0)) || ((startYear % 400) === 0)

    if (startDay === 31) {
      startDay -= 1
    } else if (m && (startMonth === 2 && (startDay === 29 || (startDay === 28 && !isLeapYear)))) {
      startDay = 30
    }

    if (endDay === 31) {
      if (m && startDay !== 30) {
        endDay = 1
        if (endMonth === 12) {
          endYear += 1
          endMonth = 1
        } else {
          endMonth += 1
        }
      } else {
        endDay = 30
      }
    }

    let result = endDay
    result += (endMonth * 30)
    result += (endYear * 360)
    result -= startDay
    result -= (startMonth * 30)
    result -= (startYear * 360)

    return result
  }
}
