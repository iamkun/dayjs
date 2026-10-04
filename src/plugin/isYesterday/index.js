export default (o, c, d) => {
  const proto = c.prototype
  proto.isYesterday = function () {
    const date = this
    const yesterday = d().subtract(1, 'day')

    return (
      date.year() === yesterday.year() &&
      date.month() === yesterday.month() &&
      date.date() === yesterday.date()
    )
  }
}
