import * as C from '../../constant'

export default (option, dayjsClass) => {
  const proto = dayjsClass.prototype
  const oldSame = proto.isSame
  const oldIsAfter = proto.isAfter
  const oldIsBefore = proto.isBefore
  const pretty = proto.$utils().prettyUnit

  const v = (l, r) => l.isValid() && r.isValid()

  proto.isSame = function (o, u) {
    if (!v(this, o)) return false

    return pretty(u) === C.MS
      ? oldSame.bind(this)(o)
      : this.startOf(u).valueOf() <= o && o <= this.endOf(u).valueOf()
  }

  proto.isAfter = function (o, u) {
    if (!v(this, o)) return false

    return pretty(u) === C.MS
      ? oldIsAfter.bind(this)(o)
      : o.valueOf() < this.startOf(u).valueOf()
  }

  proto.isBefore = function (o, u) {
    if (!v(this, o)) return false

    return pretty(u) === C.MS
      ? oldIsBefore.bind(this)(o)
      : this.endOf(u).valueOf() < o.valueOf()
  }

  proto.isSameOrAfter = function (other, units) {
    return this.isSame(other, units) || this.isAfter(other, units)
  }

  proto.isSameOrBefore = function (other, units) {
    return this.isSame(other, units) || this.isBefore(other, units)
  }
}
