export default (o, c, d) => {
  const proto = c.prototype
  proto.isTomorrow = function () {
    const comparisonTemplate = 'YYYY-MM-DD'
    const tomorrow = d().add(1, 'day')

    return (
      this.format(comparisonTemplate) === tomorrow.format(comparisonTemplate)
    )
  }
}
