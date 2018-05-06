let advFormat
export default advFormat = Dayjs => {
  const oldFormat = Dayjs.prototype.format
  Dayjs.prototype.format = function(formatStr = 'YYYY-MM-DDTHH:mm:ssZ') {
    let oldResult = oldFormat.bind(this)(formatStr)

    const suffixes = ['th', 'st', 'nd', 'rd']

    return oldResult.replace(/Q|ddd|X|x|k{1,2}|S/g, (match) => {
      switch (match) {
        case 'Q':
          return Math.ceil((this.$M + 1) / 3)
        case 'ddd': {
          const digits = this.Utils().padStart(String(this.$D), 2, '0').slice(-2)
          const ls = parseInt(digits[1], 10)
          return this.$D + suffixes[digits[0] === '1' || ls > 3 ? 0 : ls]
        }
        case 'k':
          return this.$H === 0 ? 24 : this.$H
        case 'kk':
          return this.Utils().padStart(String(this.$H === 0 ? 24 : this.$H), 2, '0')
        case 'X':
          return Math.floor(this.$d.getTime() / 1000)
        case 'x':
          return this.$d.getTime()
        default: //'S'
          return this.Utils().padStart(String(this.$ms), 3, '0')
      }
    })
  }
}
