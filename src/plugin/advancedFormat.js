export default (proto) => { // locale needed
  const oldFormat = proto.format
  proto.format = function (formatStr, locale) {
    const utils = this.$utils()
    const str = formatStr || 'YYYY-MM-DDTHH:mm:ssZ'
    const suffixes = ['th', 'st', 'nd', 'rd']
    const result = str.replace(/Q|Do|X|x|k{1,2}|S/g, (match) => {
      switch (match) {
        case 'Q':
          return Math.ceil((this.$M + 1) / 3)
        case 'Do': {
          const digits = utils.padStart(String(this.$D), 2, '0').slice(-2)
          const ls = parseInt(digits[1], 10)
          return `${this.$D}[${suffixes[digits[0] === '1' || ls > 3 ? 0 : ls]}]`
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
