export default (o, c, dayjs) => {
  const proto = c.prototype
  const parseDate = (cfg) => {
    const { date, utc } = cfg
    if (Array.isArray(date)) {
      if (typeof date[0] === 'number' && date[0] >= 0 && date[0] < 100) {
        // A full Gregorian cycle avoids Date's 1900 mapping without losing leap days.
        const args = date.slice()
        args[0] += 400
        if (args.length === 1) args.push(0)
        const result = utc ? new Date(Date.UTC.apply(null, args)) :
          new (Function.prototype.bind.apply(Date, [null].concat(args)))()
        if (utc) {
          result.setUTCFullYear(result.getUTCFullYear() - 400)
        } else {
          result.setFullYear(result.getFullYear() - 400)
        }
        return result
      }
      if (utc) {
        if (!date.length) {
          return new Date()
        }
        return new Date(Date.UTC.apply(null, date))
      }
      if (date.length === 1) {
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
