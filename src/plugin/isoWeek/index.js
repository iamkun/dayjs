import { D, W, Y } from '../../constant'

const isoWeekPrettyUnit = 'isoweek'

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

  proto.isoWeek = function (week) {
    if (!this.$utils().u(week)) {
      return this.add((week - this.isoWeek()) * 7, D)
    }
    const nowWeekThursday = getCurrentWeekThursday(this)
    const diffWeekThursday = getYearFirstThursday(this.isoWeekYear())
    return nowWeekThursday.diff(diffWeekThursday, W) + 1
  }

  const oldStartOf = proto.startOf
  proto.startOf = function (units, startOf) {
    const utils = this.$utils()
    const isStartOf = !utils.u(startOf) ? startOf : true
    const unit = utils.p(units)
    if (unit === isoWeekPrettyUnit) {
      return isStartOf ? this.day(1).startOf('day') :
        this.day(7).endOf('day')
    }
    return oldStartOf.bind(this)(units, startOf)
  }
}
