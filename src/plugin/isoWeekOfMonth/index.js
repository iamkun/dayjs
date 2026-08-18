export default (o, dayjsClass) => {
  dayjsClass.prototype.isoWeekOfMonth = function () {
    const day = this.day()
    const daysToSubtract = day === 0 ? 6 : day - 1
    const monday = this.subtract(daysToSubtract, 'day')

    const thursday = monday.add(3, 'day')
    const year = thursday.year()
    const month = thursday.month()

    const firstDayOfMonth = thursday.startOf('month')

    const firstDayOfMonthDay = firstDayOfMonth.day()
    const daysToFirstMonday =
      firstDayOfMonthDay === 0 ? 6 : firstDayOfMonthDay - 1
    const firstMonday = firstDayOfMonth.subtract(daysToFirstMonday, 'day')
    let firstThursday = firstMonday.add(3, 'day')

    if (firstThursday.month() < month || firstThursday.year() < year) {
      firstThursday = firstThursday.add(1, 'week')
    }

    const week =
      Math.round((thursday.valueOf() - firstThursday.valueOf()) /
          (7 * 24 * 60 * 60 * 1000)) + 1

    return {
      year,
      month: month + 1,
      week
    }
  }
}
