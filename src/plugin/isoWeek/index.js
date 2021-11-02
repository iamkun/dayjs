import { D, W, Y } from '../../constant'

const isoWeekPrettyUnit = 'isoweek'

export default (o, c, d) => {
  const getYearFirstThursday = (year, isUtc) => {
    const yearFirstDay = (isUtc ? d.utc : d)().year(year).startOf(Y)
    let addDiffDays = 4 - yearFirstDay.isoWeekday()
    if (yearFirstDay.isoWeekday() > 4) {
      addDiffDays += 7
    }
    return yearFirstDay.add(addDiffDays, D)
  }

  const getCurrentWeekThursday = ins => ins.add((4 - ins.isoWeekday()), D)

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
    const diffWeekThursday = getYearFirstThursday(this.isoWeekYear(), this.$u)
    return nowWeekThursday.diff(diffWeekThursday, W) + 1
  }

  proto.isoWeekday = function (week) {
    if (!this.$utils().u(week)) {
      return this.day(this.day() % 7 ? week : week - 7)
    }
    return this.day() || 7
  }

  const oldStartOf = proto.startOf
  proto.startOf = function (units, startOf) {
    const utils = this.$utils()
    const isStartOf = !utils.u(startOf) ? startOf : true
    const unit = utils.p(units)
    if (unit === isoWeekPrettyUnit) {
      return isStartOf ? this.date(this.date() - (this.isoWeekday() - 1)).startOf('day') :
        this.date((this.date() - 1 - (this.isoWeekday() - 1)) + 7).endOf('day')
    }
    return oldStartOf.bind(this)(units, startOf)
  }
}
