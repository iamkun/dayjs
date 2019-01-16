export default (o, c) => {
  const proto = c.prototype
  proto.daysInYear = function () {
    const isLeapYear = (this.$y % 4 === 0 && this.$y % 100 !== 0) || this.$y % 400 === 0
    return isLeapYear ? 366 : 365
  }
}
