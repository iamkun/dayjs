import U from '../../utils'

export default (o, c) => {
  const proto = c.prototype
  proto.isLeapYear = function () {
    return U.yearIsLeap(this.$y)
  }
}

