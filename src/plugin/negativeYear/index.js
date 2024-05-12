export default (_, c, dayjs) => {
  const proto = c.prototype

  const parseDate = (cfg) => {
    const { date } = cfg
    if (typeof date === 'string' && date.charAt(0) === '-') {
      const newDate = new Date(date.slice(1))
      const fullYear = newDate.getFullYear()
      if (date.indexOf(`-${fullYear}`) !== -1) {
        return dayjs(newDate).subtract(fullYear * 2, 'year').toDate()
      }
      return date
    }
    return date
  }

  const oldParse = proto.parse
  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg)
    oldParse.bind(this)(cfg)
  }
}

