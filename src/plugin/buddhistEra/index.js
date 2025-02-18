import { FORMAT_DEFAULT } from '../../constant'

export default (o, c) => { // locale needed later
  const formatTokens = /(\[[^\]]+])|BBBB|BB/g

  const match2 = /\d\d/ // 00 - 99
  const match4 = /\d{4}/ // 0000 - 9999

  const yearBias = 543

  const parseTwoDigitYear = function (input) {
    return ((input + 2500) - yearBias) % 100
  }

  const proto = c.prototype
  const oldFormat = proto.format
  // extend en locale here
  proto.format = function (formatStr) {
    const str = formatStr || FORMAT_DEFAULT
    const result = str.replace(formatTokens, (match, a) => {
      const year = String(this.$y + yearBias)
      const args = match === 'BB' ? [year.slice(-2), 2] : [year, 4]
      return a || this.$utils().s(...args, '0')
    })
    return oldFormat.bind(this)(result)
  }

  // parse in Buddhist era
  const oldParse = proto.parse
  proto.parse = function (cfg) {
    const [date, format] = cfg.args
    let formatString = format || FORMAT_DEFAULT
    const array = formatString.match(formatTokens)
    let newDate
    if (array) {
      array.forEach((match) => {
        formatString = formatString.replace(match, (_, i) => {
          const yearString = cfg.args[0].substring(
            i,
            i + Math.min(match.length, 4)
          )
          let year
          if (yearString.match(match4)) {
            // replace buddhist era with common era
            year = parseInt(yearString, 10) - yearBias
          } else if (yearString.match(match2)) {
            year = parseTwoDigitYear(parseInt(yearString, 10))
          }
          newDate =
            date.substring(0, i) +
            (year || yearString) +
            date.substring(i + year.toString().length, date.length)
          // replace formatting with common era's
          return match.length === 4 ? 'YYYY' : 'YY'
        })
      })
    }
    // passes the date string with common era to other parsers
    oldParse.call(this, {
      ...cfg,
      args: [newDate || date, formatString],
      date: newDate || date
    })
  }
}
