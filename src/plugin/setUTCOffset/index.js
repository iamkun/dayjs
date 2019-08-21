import { MILLISECONDS_A_MINUTE, MIN } from '../../constant'

export default (option, Dayjs) => {
  const proto = Dayjs.prototype
  const oldParse = proto.parse
  const localOffset = (new Date()).getTimezoneOffset()
  proto.parse = function (cfg) {
    if (!this.$utils().u(cfg.$offset)) {
      this.$offset = cfg.$offset
    }
    oldParse.call(this, cfg)
  }

  proto.valueOf = function () {
    const addedOffset = !this.$utils().u(this.$offset) ? (this.$offset || 0) + localOffset : 0
    return this.$d.valueOf() - (addedOffset * MILLISECONDS_A_MINUTE)
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
    return this.add(offset + localOffset, MIN)
  }

  // todo toString valueOf toDate shoud minus back to original date
}
