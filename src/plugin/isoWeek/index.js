import { D, MILLISECONDS_A_DAY } from '../../constant'

const isoWeekPrettyUnit = 'isoweek'

export default (o, c) => {
  const getNumberOfDayToThursday = date => (date.getDay() + 6) % 7

  const getThursdayDate = (that) => {
    const date = new Date(that.$d)
    date.setDate(date.getDate() + (3 - getNumberOfDayToThursday(date)))
    return date
  }

  const proto = c.prototype

  proto.isoWeekYear = function () {
    return getThursdayDate(this).getFullYear()
  }

  proto.isoWeek = function (week) {
    const dateThursday = getThursdayDate(this)
    const firstWeekOfYear = new Date(dateThursday.getFullYear(), 0, 4)
    if (!this.$utils().u(week)) {
      return this.add((week - this.isoWeek()) * 7, D)
    }
    const weekDiffByDay = (dateThursday.getTime() - firstWeekOfYear.getTime()) / MILLISECONDS_A_DAY
    const adjustedToThursday = (weekDiffByDay - 3) + getNumberOfDayToThursday(firstWeekOfYear)
    return Math.round(adjustedToThursday / 7) + 1
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
