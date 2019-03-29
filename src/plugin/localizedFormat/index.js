import { FORMAT_DEFAULT } from '../../constant'

export default (o, c, d) => {
  const proto = c.prototype
  const oldFormat = proto.format
  const englishFormats = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
    l: 'M/D/YYYY',
    ll: 'MMM D, YYYY',
    lll: 'MMM D, YYYY h:mm A',
    llll: 'ddd, MMM D, YYYY h:mm A'
  }
  d.en.formats = englishFormats
  proto.format = function (formatStr) {
    const locale = this.$locale()
    const formats = locale.formats || {}
    const str = formatStr || FORMAT_DEFAULT
    const result = str.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) =>
      a || formats[b] || englishFormats[b])
    return oldFormat.call(this, result)
  }
}

