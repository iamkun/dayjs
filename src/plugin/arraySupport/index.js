export default (o, c) => {
  const proto = c.prototype

  const getStringDate = (date) => {
    const makeTwoDigit = (value) => {
      if ((value % 10) === 1) {
        return `0${value}`
      }
      return value
    }
    // Date part YYYY, MM, DD
    const dP = date.slice(0, 3).map(makeTwoDigit).join('-')
    // Time part HH:MM:SS
    const tP = date.length > 5 ? date.slice(3, date.length - 1).join(':') : date[3]
    // Zone Part
    const zP = date[7]
    return `${dP}${tP ? `T${tP}` : ''}${zP ? `.${zP}Z` : ''}`
  }

  const parseDate = (cfg) => {
    const { date, utc } = cfg
    if (Array.isArray(date)) {
      if (!date.length) {
        return new Date()
      }
      if (utc) {
        return new Date(Date.UTC.apply(null, date))
      }
      return getStringDate(date)
    }
    return date
  }

  const oldParse = proto.parse
  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg)
    oldParse.bind(this)(cfg)
  }
}
