import parseFormattedInput from './parseFormattedInput'

export default (o, C) => {
  const proto = C.prototype
  const oldParse = proto.parse
  proto.parse = function (cfg) {
    const { date: input, format } = cfg
    if (format) {
      this.$d = parseFormattedInput(input, format)
      this.init(cfg)
    } else {
      oldParse.call(this, cfg)
    }
  }
}
