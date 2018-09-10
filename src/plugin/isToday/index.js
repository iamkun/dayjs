export default (o, c, d) => {
  const proto = c.prototype
  proto.isToday = function () {
    const comparisonKey = ['$y', '$D', '$m']
    const now = d()

    return comparisonKey.filter(function (key) {
      return now[key] !== this[key]
    }, this).length === 0
  }
}
