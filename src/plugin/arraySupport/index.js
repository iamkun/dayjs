export default (o, c, dayjs) => {
  const proto = c.prototype
  const parseDate = (cfg) => {
    const { date, utc } = cfg
    if (Array.isArray(date)) {
      const isEmptyArray = date.length === 0
      const isYearOnly = date.length === 1
      if (utc) {
        if (isEmptyArray) {
          return new Date()
        }
        return new Date(Date.UTC.apply(null, date))
      }
      if (isYearOnly) {
        return dayjs(String(date[0])).toDate()
      }
      return new (Function.prototype.bind.apply(Date, [null].concat(date)))()
    }
    return date
  }

  const oldParse = proto.parse
  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg)
    oldParse.bind(this)(cfg)
  }
}
