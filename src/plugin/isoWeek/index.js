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

  const oldAdd = proto.add
  proto.add = function (number, units) {
    number = Number(number) // eslint-disable-line no-param-reassign
    const unit = this.$utils().p(units)
    if (unit === isoWeekPrettyUnit) {
      return this.add(number * 7, D)
    }
    return oldAdd.bind(this)(number, units)
  }

  const oldDiff = proto.diff
  proto.diff = function (input, units, float) {
    const unit = this.$utils().p(units)
    if (unit === isoWeekPrettyUnit) {
      return oldDiff.bind(this)(input, W, float)
    }
    return oldDiff.bind(this)(input, units, float)
  }

  const oldGet = proto.get
  proto.get = function (unit) {
    if (this.$utils().p(unit) === isoWeekPrettyUnit) {
      return this.isoWeek()
    }
    return oldGet.bind(this)(unit)
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
