import { DEFAULT_FORMAT } from '../constants'
import {
  englishFormats,
  formatToLocalizedFormat,
} from './localizedFormat.utils'
import type { Plugin } from 'src/types'

const plugin: Plugin = (cls, fn) => {
  const proto = cls.prototype
  const oldFormat = proto.format

  fn.en.formats = englishFormats
  proto.format = function (formatStr = DEFAULT_FORMAT) {
    const { formats = {} } = this.loadedLocale()
    const result = formatToLocalizedFormat(formatStr, formats)
    return oldFormat.call(this, result)
  }
}
export default plugin
