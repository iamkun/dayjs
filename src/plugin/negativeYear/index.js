export default (_, c, dayjs) => {
  const proto = c.prototype

  const parseDate = (cfg) => {
    const { date, utc } = cfg
    if (typeof date === 'string' && date.charAt(0) === '-') {
      const normalData = date.slice(1)
      let newDate = dayjs(normalData)
      if (utc) {
        newDate = dayjs.utc(normalData)
      } else {
        newDate = dayjs(normalData)
      }
      const fullYear = newDate.year()
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

