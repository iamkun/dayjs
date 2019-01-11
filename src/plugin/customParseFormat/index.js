import parseFormattedInput from './parseFormattedInput'

export default (o, C) => {
  const proto = C.prototype
  const oldParse = proto.parse
  proto.parse = function (cfg) {
    const { date: input, format } = cfg
    if (format) {
      try {
        this.$d = parseFormattedInput(input, format)
      } catch (error) {
        this.$d = new Date(Number.NaN)
      }
      this.init(cfg)
    } else {
      oldParse.call(this, cfg)
    }
  }
}
