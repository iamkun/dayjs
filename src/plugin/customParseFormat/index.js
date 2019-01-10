import parseFormattedInput from './parseFormattedInput'

export default (o, C) => {
  const proto = C.prototype
  const oldParse = proto.parse
  proto.parse = function (cfg) {
    const { date: input, format } = cfg
    if (format) {
      try {
        const {
          year, month, day, hours, minutes, seconds, milliseconds, zone
        } = parseFormattedInput(input, format)
        let date
        if (zone) {
          const timestamp = Date.UTC(
            year, month - 1, day,
            hours || 0, minutes || 0, seconds || 0, milliseconds || 0
          ) + (zone.offset * 60 * 1000)
          date = new Date(timestamp)
        } else {
          date = new Date(
            year, month - 1, day,
            hours || 0, minutes || 0, seconds || 0, milliseconds || 0
          )
        }
        this.$d = date
      } catch (error) {
        this.$d = new Date(Number.NaN)
      }
      this.init(cfg)
    } else {
      oldParse.call(this, cfg)
    }
  }
}
