import { FORMAT_DEFAULT } from '../../constant'

export default (o, c, d) => { // locale needed later
  const proto = c.prototype
  const oldFormat = proto.format
  d.en.ordinal = (number) => {
    const s = ['th', 'st', 'nd', 'rd']
    const v = number % 100
    return `[${number}${(s[(v - 20) % 10] || s[v] || s[0])}]`
  }
  // extend en locale here
  proto.format = function (formatStr) {
    const locale = this.$locale()
    const utils = this.$utils()
    const str = formatStr || FORMAT_DEFAULT
    const result = str.replace(/Q|Do|X|x|k{1,2}|S/g, (match) => {
      switch (match) {
        case 'Q':
          return Math.ceil((this.$M + 1) / 3)
        case 'Do': {
          return locale.ordinal(this.$D)
        }
        case 'k':
        case 'kk':
          return utils.s(String(this.$H === 0 ? 24 : this.$H), match === 'k' ? 1 : 2, '0')
        case 'X':
          return Math.floor(this.$d.getTime() / 1000)
        default: // 'x'
          return this.$d.getTime()
      }
    })
    return oldFormat.bind(this)(result)
  }
}

