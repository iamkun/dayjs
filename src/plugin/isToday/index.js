export default (o, c, d) => {
  const proto = c.prototype
  proto.isToday = function () {
    const date = this
    const now = d()
    return date.year() === now.year() && date.month() === now.month() && date.date() === now.date()
  }
}
