export default (format, formatRegex, tokenRegex, replaceFormat) => {
  const escapedEnd = format.lastIndexOf(']') + 1
  return format.slice(0, escapedEnd).replace(formatRegex, replaceFormat)
    + format.slice(escapedEnd).replace(tokenRegex, match => replaceFormat(match))
}
