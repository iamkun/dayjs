export default (o, c) => {
  const proto = c.prototype
  proto.toObject = function () {
    return {
      years: this.$y,
      months: this.$M,
      date: this.$D,
      hours: this.$H,
      minutes: this.$m,
      seconds: this.$s,
      milliseconds: this.$ms
    }
  }
}
