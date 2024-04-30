export default (_, c, dayjs) => {
  const proto = c.prototype

  const parseDate = (cfg) => {
    const { date } = cfg
    const newDate = new Date(date)
    const fullYear = newDate.getFullYear()
    if (typeof date === 'string' && date.indexOf(`-${fullYear}`) !== -1) {
      return dayjs(newDate).subtract(fullYear * 2, 'year').toDate()
    }
    return newDate
  }

  const oldParse = proto.parse
  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg)
    oldParse.bind(this)(cfg)
  }
}

