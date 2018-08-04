export default (o, c) => {
  const proto = c.prototype
  proto.isBetween = function (a, b) {
    if (!(a instanceof c && b instanceof c)) {
      throw new Error('isBetween arguments must be dayjs-like!')
    }

    return this.isAfter(a) && this.isBefore(b)
  }
}

