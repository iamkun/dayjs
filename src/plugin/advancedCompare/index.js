export default (option, dayjsClass) => {
  const proto = dayjsClass.prototype
  const v = (l, r) => l.isValid() && r.isValid()

  proto.isSame = function (o, u) {
    return v(this, o) && this.startOf(u).valueOf() <= o && o <= this.endOf(u).valueOf()
  }

  proto.isAfter = function (o, u) {
    return v(this, o) && o.valueOf() < this.startOf(u).valueOf()
  }

  proto.isBefore = function (o, u) {
    return v(this, o) && this.endOf(u).valueOf() < o.valueOf()
  }

  proto.isSameOrAfter = function (other, units) {
    return this.isSame(other, units) || this.isAfter(other, units)
  }

  proto.isSameOrBefore = function (other, units) {
    return this.isSame(other, units) || this.isBefore(other, units)
  }
}
