export default (o, c, d) => {
  c.prototype.isBetween = function (a, b, u) {
    const dA = d(a)
    const dB = d(b)

    return (this.isAfter(dA, u) && this.isBefore(dB, u))
        || (this.isBefore(dA, u) && this.isAfter(dB, u))
  }
}
