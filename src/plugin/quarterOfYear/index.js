export default (o, c) => {
  const proto = c.prototype
  proto.quarter = function () {
    return Math.ceil((this.month() + 1) / 3)
  }
}
