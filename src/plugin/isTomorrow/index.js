export default (o, c, d) => {
  const proto = c.prototype
  proto.isTomorrow = function () {
    const comparisonKey = ['$y', '$D', '$m']
    const tomorrow = d().add(1, 'day')

    return comparisonKey.filter(function (key) {
      return tomorrow[key] === this[key]
    }, this).length === 3
  }
}

