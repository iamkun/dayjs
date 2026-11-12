import { FORMAT_DEFAULT } from '../../constant'
import replaceFormat from '../../format'

export default (o, c) => { // locale needed later
  const proto = c.prototype
  const oldFormat = proto.format
  // extend en locale here
  proto.format = function (formatStr) {
    const yearBias = 543
    const str = formatStr || FORMAT_DEFAULT
    const replace = (match, escaped) => {
      const year = String(this.$y + yearBias)
      const args = match === 'BB' ? [year.slice(-2), 2] : [year, 4]
      return escaped || this.$utils().s(...args, '0')
    }
    const result = replaceFormat(
      str,
      /(\[[^\]]+])|BBBB|BB/g,
      /BBBB|BB/g,
      replace
    )
    return oldFormat.bind(this)(result)
  }
}
