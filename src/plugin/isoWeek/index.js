import { D, W, Y } from '../../constant'

export default (o, c, d) => {
  const days = day => day.day() || 7

  const getYearFirstThursday = (year) => {
    const yearFirstDay = d().year(year).startOf(Y)
    let addDiffDays = 4 - days(yearFirstDay)
    if (days(yearFirstDay) > 4) {
      addDiffDays += 7
    }
    return yearFirstDay.add(addDiffDays, D)
  }

  const getCurrentWeekThursday = ins => ins.add((4 - days(ins)), D)

  const proto = c.prototype

  proto.isoWeekYear = function () {
    const nowWeekThursday = getCurrentWeekThursday(this)
    return nowWeekThursday.year()
  }

  proto.isoWeek = function (isoWeek) {
    if (!this.$utils().u(isoWeek)) {
      return this.add((isoWeek - this.isoWeek()) * 7, D)
    }
    const nowWeekThursday = getCurrentWeekThursday(this)
    const diffWeekThursday = getYearFirstThursday(this.isoWeekYear())
    return nowWeekThursday.diff(diffWeekThursday, W) + 1
  }
}
