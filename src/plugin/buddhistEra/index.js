import { FORMAT_DEFAULT } from '../../constant'

export default (o, c) => { // locale needed later
  const proto = c.prototype
  const oldFormat = proto.format
  // extend en locale here
  proto.format = function (formatStr) {
    const yearBias = 543
    const utils = this.$utils()
    const str = formatStr || FORMAT_DEFAULT
    const result = str.replace(/BBBB|BB/g, (match) => {
      switch (match) {
        case 'BB':
          return utils.padStart(String(this.$y + yearBias).slice(-2), 2, '0')
        default: // BBBB
          return utils.padStart(String(this.$y + yearBias), 4, '0')
      }
    })
    return oldFormat.bind(this)(result)
  }
}
