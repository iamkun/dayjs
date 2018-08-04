export default (o, c, d) => {
  const proto = c.prototype
  proto.isBetween = function (a, b) {
    const dA = d(a)
    const dB = d(b)

    return (this.isAfter(dA) && this.isBefore(dB)) || (this.isBefore(dA) && this.isAfter(dB))
  }
}

