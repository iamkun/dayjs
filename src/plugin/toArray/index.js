export default (o, c) => {
  const proto = c.prototype
  proto.toArray = function () {
    return [
      this.$y,
      this.$M,
      this.$D,
      this.$H,
      this.$m,
      this.$s,
      this.$ms
    ]
  }
}

