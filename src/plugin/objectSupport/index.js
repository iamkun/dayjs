export default (o, c) => {
  const proto = c.prototype

  /**
   * Array to date
   * @param d
   * @param utc
   * @returns {Date}
   */
  const parseArrayArgument = (d, utc) => {
    if (utc) {
      return new Date(Date.UTC(d[1], d[2] - 1, d[3]
        || 1, d[4] || 0, d[5] || 0, d[6] || 0, d[7] || 0))
    }
    return new Date(d[1], d[2] - 1, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, d[7] || 0)
  }

  /**
   * Converts the object to a date array
   * @param d Object { years, months, date, hours, minutes, seconds, milliseconds}
   * @param utc
   */
  const parseObjectArgument = (d, utc) => parseArrayArgument([
    0,
    d.y || d.year || d.years || 1970,
    d.M || d.month || d.months || 1,
    d.d || d.day || d.days || d.date || 1,
    d.h || d.hour || d.hours || 0,
    d.m || d.minute || d.minutes || 0,
    d.s || d.second || d.seconds || 0,
    d.ms || d.millisecond || d.milliseconds || 0
  ], utc)

  const isObject = obj => !(obj instanceof Date) && !(obj instanceof Array) && obj instanceof Object
  const parseDate = (cfg) => {
    const { date, utc } = cfg
    // if (Array.isArray(date)) return parseArrayArgument([0, ...date], utc)
    if (isObject(date)) return parseObjectArgument(date, utc)
    return date
  }

  const oldParse = proto.parse
  proto.parse = function (cfg) {
    // console.log(cfg)
    cfg.date = parseDate(cfg)
    oldParse.bind(this)(cfg)
  }

  const setObject = function (argument) {
    const keys = Object.keys(argument)
    let chain = this.clone()
    keys.forEach((key) => {
      chain = chain.$set(key, argument[key])
    })
    return chain
  }
  const addObject = function (argument) {
    const keys = Object.keys(argument)
    let chain = this
    keys.forEach((key) => {
      chain = chain.add(argument[key], key)
    })
    return chain
  }

  const subtractObject = function (argument) {
    const keys = Object.keys(argument)
    let chain = this
    keys.forEach((key) => {
      chain = chain.subtract(argument[key], key)
    })
    return chain
  }

  const oldSet = proto.set
  proto.set = function (string, int) {
    if (string instanceof Object) {
      return setObject.bind(this)(string)
    }
    return oldSet.bind(this)(string, int)
  }
  const oldAdd = proto.add
  proto.add = function (number, string) {
    if (number instanceof Object) {
      return addObject.bind(this)(number)
    }
    return oldAdd.bind(this)(number, string)
  }
  const oldSubtract = proto.subtract
  proto.subtract = function (number, string) {
    if (number instanceof Object) {
      return subtractObject.bind(this)(number)
    }
    return oldSubtract.bind(this)(number, string)
  }
}
