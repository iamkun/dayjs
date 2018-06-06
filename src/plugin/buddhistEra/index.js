import { FORMAT_DEFAULT } from '../../constant'

export default (o, c) => { // locale needed later
  const proto = c.prototype
  const oldFormat = proto.format
  // extend en locale here
  proto.format = function (formatStr, localeObject) {
    const locale = localeObject || this.$locale()
    const str = formatStr || FORMAT_DEFAULT
    const result = str.replace(/BBBB|BB/g, (match) => {
      switch (match) {
        case 'BB':
          return (this.$y + 543) % 100
        default: // BBBB
          return this.$y + 543
      }
    })
    return oldFormat.bind(this)(result, locale)
  }
}
