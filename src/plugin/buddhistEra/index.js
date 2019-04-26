import { FORMAT_DEFAULT } from '../../constant'

export default (o, c) => { // locale needed later
  const proto = c.prototype
  const oldFormat = proto.format
  // extend en locale here
  proto.format = function (formatStr) {
    const yearBias = 543
    const str = formatStr || FORMAT_DEFAULT
    const result = str.replace(/(\[[^\]]+])|BBBB|BB/g, (match, a) => {
      const year = String(this.$y + yearBias)
      const args = match === 'BB' ? [year.slice(-2), 2] : [year, 4]
      return a || this.$utils().s(...args, '0')
    })
    return oldFormat.bind(this)(result)
  }
}
