export default (option, dayjsClass) => {
  const proto = dayjsClass.prototype
  const oldSame = proto.isSame
  const oldIsAfter = proto.isAfter
  const oldIsBefore = proto.isBefore

  const v = (l, r) => l.isValid() && r.isValid()

  dayjsClass.prototype.isSame = function (o, u) {
    if (!v(this, o)) return false

    return (u && u === 'millisecond')
      ? oldSame.bind(this)(o)
      : this.startOf(u).valueOf() <= o && o <= this.endOf(u).valueOf()
  }

  dayjsClass.prototype.isAfter = function (o, u) {
    if (!v(this, o)) return false

    return (u && u === 'millisecond')
      ? oldIsAfter.bind(this)(o)
      : o.valueOf() < this.startOf(u).valueOf()
  }

  dayjsClass.prototype.isBefore = function (o, u) {
    if (!v(this, o)) return false

    return (u && u === 'millisecond')
      ? oldIsBefore.bind(this)(o)
      : this.endOf(u).valueOf() < o.valueOf()
  }

  dayjsClass.prototype.isSameOrAfter = function (other, units) {
    return this.isSame(other, units) || this.isAfter(other, units)
  }

  dayjsClass.prototype.isSameOrBefore = function (other, units) {
    return this.isSame(other, units) || this.isBefore(other, units)
  }
}
