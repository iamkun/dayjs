export default (o, c) => { // locale needed later
  const proto = c.prototype
  proto.$g = function (input, get, set) {
    if (this.$utils().u(input)) return this[get]
    return this.$set(set, input)
  }

  proto.set = function (string, int) {
    return this.$set(string, int)
  }

  const oldStartOf = proto.startOf
  proto.startOf = function (units, startOf) {
    this.$d = oldStartOf.bind(this)(units, startOf).toDate()
    this.init()
    return this
  }

  const oldAdd = proto.add
  proto.add = function (number, units) {
    this.$d = oldAdd.bind(this)(number, units).toDate()
    this.init()
    return this
  }

  const oldLocale = proto.locale
  proto.locale = function (preset, object) {
    if (!preset) return this.$L
    this.$L = oldLocale.bind(this)(preset, object).$L
    return this
  }

  const oldDaysInMonth = proto.daysInMonth
  proto.daysInMonth = function () {
    return oldDaysInMonth.bind(this.clone())()
  }

  const oldIsSame = proto.isSame
  proto.isSame = function (that, units) {
    return oldIsSame.bind(this.clone())(that, units)
  }

  const oldIsBefore = proto.isBefore
  proto.isBefore = function (that, units) {
    return oldIsBefore.bind(this.clone())(that, units)
  }

  const oldIsAfter = proto.isAfter
  proto.isAfter = function (that, units) {
    return oldIsAfter.bind(this.clone())(that, units)
  }
}

