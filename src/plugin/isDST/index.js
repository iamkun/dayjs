export default (o, c) => {
  const proto = c.prototype
  proto.isDST = function () {
    const firstDayOfYear = this.startOf('year')
    return this.toDate().getTimezoneOffset() !== firstDayOfYear.toDate().getTimezoneOffset()
  }
}
