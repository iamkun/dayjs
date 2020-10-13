import { FORMAT_DEFAULT } from '../../constant'
import { t } from './utils'

export default (o, c, d) => {
  const proto = c.prototype
  const oldFormat = proto.format
  const englishFormats = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  }
  d.en.formats = englishFormats
  proto.format = function (formatStr = FORMAT_DEFAULT) {
    const { formats = {} } = this.$locale()
    const result = formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
      const B = b && b.toUpperCase()
      return a || formats[b] || englishFormats[b] || t(formats[B])
    })
    return oldFormat.call(this, result)
  }
}

