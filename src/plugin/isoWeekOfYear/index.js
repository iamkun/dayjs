export default (o, c, d) => {
  const days = function (day) {
    const weekDay = day.day()
    return weekDay === 0 ? 7 : weekDay
  }

  const getYearFirstThursday = function (year) {
    const yearFirstDay = d().year(year).startOf('year')
    let addDiffDays = 4 - days(yearFirstDay)
    if (days(yearFirstDay) > 4) {
      addDiffDays += 7
    }
    return yearFirstDay.add(addDiffDays, 'day')
  }

  const proto = c.prototype

  proto.isoWeekYear = function () {
    const nowWeekThursday = d(this).add((4 - days(this)), 'day')
    return nowWeekThursday.year()
  }

  proto.isoWeek = function (isoWeek = null) {
    if (isoWeek !== null) {
      return this.add((isoWeek - this.isoWeek()) * 7, 'day')
    }

    const nowWeekThursday = d(this).add((4 - days(this)), 'day')
    const diffWeekThursday = getYearFirstThursday(this.isoWeekYear())
    return nowWeekThursday.diff(diffWeekThursday, 'week') + 1
  }
}
