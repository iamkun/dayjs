import { FORMAT_DEFAULT } from '../constant'

export default (o, c, d) => { // locale needed later
  const proto = c.prototype
  const oldFormat = proto.format
  // eslint-disable-next-line no-nested-ternary
  d.en.ordinal = number => `${number}[${number === 1 ? 'st' : number === 2 ? 'nd' : number === 3 ? 'rd' : 'th'}]`
  // extend en locale here
  proto.format = function (formatStr, localeObject) {
    const locale = localeObject || this.$locale()
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
          return utils.padStart(String(this.$H === 0 ? 24 : this.$H), match === 'k' ? 1 : 2, '0')
        case 'X':
          return Math.floor(this.$d.getTime() / 1000)
        default: // 'x'
          return this.$d.getTime()
      }
    })
    return oldFormat.bind(this)(result, locale)
  }
}

