import { Q, M, D } from '../../constant'

export default (o, c) => {
  const proto = c.prototype
  proto.quarter = function (quarter) {
    if (!this.$utils().u(quarter)) {
      return this.month((this.month() % 3) + ((quarter - 1) * 3))
    }

    const startMonth = this.$locale().quarterStart || 1
    const month = this.month() + 1
    const value = Math.ceil(((month - startMonth) + 1) / 3)

    return value > 0 ? value : 4 + value
  }

  const oldAdd = proto.add
  proto.add = function (number, units) {
    number = Number(number) // eslint-disable-line no-param-reassign
    const unit = this.$utils().p(units)
    if (unit === Q) {
      return this.add(number * 3, M)
    }
    return oldAdd.bind(this)(number, units)
  }

  const oldStartOf = proto.startOf
  proto.startOf = function (units, startOf) {
    const utils = this.$utils()
    const isStartOf = !utils.u(startOf) ? startOf : true
    const unit = utils.p(units)
    if (unit === Q) {
      const startMonth = (this.$locale().quarterStart || 1) - 1

      const quarter = this.quarter() - 1

      return isStartOf ? this.month(quarter * 3).add(startMonth, 'month')
        .startOf(M).startOf(D) :
        this.month((quarter * 3) + 2).add(startMonth, 'month').endOf(M).endOf(D)
    }
    return oldStartOf.bind(this)(units, startOf)
  }
}
