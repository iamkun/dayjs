import { FORMAT_DEFAULT } from '../../constant'

export default (o, c, d) => {
  const proto = c.prototype
  proto.dayOfYear = function (input) {
    // d(this) is for badMutable
    const dayOfYear = Math.round((d(this).startOf('day') - d(this).startOf('year')) / 864e5) + 1
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'day')
  }

  const oldFormat = proto.format
  proto.format = function (formatStr) {
    if (!this.isValid()) {
      return oldFormat.bind(this)(formatStr)
    }
    const utils = this.$utils()
    const str = formatStr || FORMAT_DEFAULT
    const result = str.replace(/\[([^\]]+)]|DDDD|DDD/g, (match) => {
      switch (match) {
        case 'DDD':
          return this.dayOfYear()
        case 'DDDD':
          return utils.s(this.dayOfYear(), 3, '0')
        default: // escaped text such as [DDD] is passed through untouched
          return match
      }
    })
    return oldFormat.bind(this)(result)
  }
}
