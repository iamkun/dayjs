import replaceFormat from '../../format'

// eslint-disable-next-line import/prefer-default-export
export const t = format =>
  replaceFormat(
    format,
    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
    /MMMM|MM|DD|dddd/g,
    (match, escaped) => escaped || match.slice(1)
  )

export const englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
}

export const u = (formatStr, formats) => {
  const replace = (match, escaped) => {
    if (escaped) return escaped
    const B = match.toUpperCase()
    return formats[match] || englishFormats[match] || t(formats[B])
  }
  return replaceFormat(
    formatStr,
    /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
    /LTS?|l{1,4}|L{1,4}/g,
    replace
  )
}
