export default (o, c, d) => {
  const proto = c.prototype
  proto.isTomorrow = function () {
    const date = this
    const tomorrow = d().add(1, 'day')

    return (
      date.year() === tomorrow.year() &&
      date.month() === tomorrow.month() &&
      date.date() === tomorrow.date()
    )
  }
}
