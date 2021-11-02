export default (o, c, d) => {
  const proto = c.prototype
  proto.isYesterday = function () {
    const comparisonTemplate = 'YYYY-MM-DD'
    const yesterday = d().subtract(1, 'day')

    return (
      this.format(comparisonTemplate) === yesterday.format(comparisonTemplate)
    )
  }
}
