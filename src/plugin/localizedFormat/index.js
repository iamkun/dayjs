import { FORMAT_DEFAULT } from '../../constant'
import { t } from './utils'

const englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
}

export const u = (formatStr, formats) => formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
  const B = b && b.toUpperCase()
  return a || formats[b] || englishFormats[b] || t(formats[B])
})

export default (o, c, d) => {
  const proto = c.prototype
  const oldFormat = proto.format

  d.en.formats = englishFormats
  proto.format = function (formatStr = FORMAT_DEFAULT) {
    const { formats = {} } = this.$locale()
    const result = u(formatStr, formats)
    return oldFormat.call(this, result)
  }
}

