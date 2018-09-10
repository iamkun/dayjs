export default (o, c, d) => {
  const proto = c.prototype
  proto.isYesterday = function () {
    const comparisonKey = ['$y', '$D', '$m']
    const yesterday = d().subtract(1, 'day')

    return comparisonKey.filter(function (key) {
      return yesterday[key] === this[key]
    }, this).length === 3
  }
}

