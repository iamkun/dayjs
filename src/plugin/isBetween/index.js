export default (o, c, d) => {
  const proto = c.prototype
  proto.isBetween = function (a, b) {
    const dayA = d(a)
    const dayB = d(b)

    if (this.isAfter(dayA) && this.isBefore(dayB)) {
      return true
    } else if (this.isBefore(dayA) && this.isAfter(dayB)) {
      return true
    }

    return false
  }
}

