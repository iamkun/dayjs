export default (o, c) => {
  const proto = c.prototype
  proto.dayOfYear = function (input) {
    const dayOfYear = Math.round((this.startOf('day') - this.startOf('year')) / 864e5) + 1
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'day')
  }
}
