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
}

