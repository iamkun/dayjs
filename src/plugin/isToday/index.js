export default (o, c, d) => {
  const proto = c.prototype
  proto.isToday = function () {
    return this.isSame(d(), 'day')
  }
}
