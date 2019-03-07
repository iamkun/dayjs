export default (option, Dayjs) => {
  const proto = Dayjs.prototype
  const oldParse = proto.parse
  proto.parse = function (cfg) {
    if (!this.$utils().u(cfg.$offset)) {
      this.$offset = cfg.$offset
    }
    oldParse.call(this, cfg)
  }

  const oldUtcOffset = proto.utcOffset
  proto.utcOffset = function (input) {
    const { u } = this.$utils()
    if (u(input)) {
      if (this.$u) {
        return 0
      }
      if (!u(this.$offset)) {
        return this.$offset
      }
      return oldUtcOffset.call(this)
    }
    const offset = Math.abs(input) <= 16 ? input * 60 : input
    this.$offset = offset
    return this.add(offset + this.$d.getTimezoneOffset(), 'minute')
  }

  // todo toString valueOf toDate shoud minus back to original date
}
