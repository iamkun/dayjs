export default (o, c, d) => {
  const proto = c.prototype
  proto.isToday = function () {
    const comparisonTemplate = 'YYYY-MM-DD'
    const now = d().locale(this.$L)

    return this.format(comparisonTemplate) === now.format(comparisonTemplate)
  }
}
