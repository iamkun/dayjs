export default (o, c, dayjs) => {
  const proto = c.prototype
  const isObject = obj => obj !== null && !(obj instanceof Date) && !(obj instanceof Array)
        && !proto.$utils().u(obj) && (obj.constructor.name === 'Object')
  const prettyUnit = (u) => {
    const unit = proto.$utils().p(u)
    return unit === 'date' ? 'day' : unit
  }
  const parseDate = (cfg) => {
    const { date, utc } = cfg
    const $d = {}
    if (isObject(date)) {
      if (!Object.keys(date).length) {
        return new Date()
      }
      const now = utc ? dayjs.utc() : dayjs()
      Object.keys(date).forEach((k) => {
        $d[prettyUnit(k)] = date[k]
      })
      const d = $d.day || ((!$d.year && !($d.month >= 0)) ? now.date() : 1)
      const y = $d.year || now.year()
      const M = $d.month >= 0 ? $d.month : ((!$d.year && !$d.day) ? now.month() : 0)// eslint-disable-line no-nested-ternary,max-len
      const h = $d.hour || 0
      const m = $d.minute || 0
      const s = $d.second || 0
      const ms = $d.millisecond || 0
      if (utc) {
        return new Date(Date.UTC(y, M, d, h, m, s, ms))
      }
      return new Date(y, M, d, h, m, s, ms)
    }
    return date
  }

  const oldParse = proto.parse
  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg)
    oldParse.bind(this)(cfg)
  }

  const oldSet = proto.set
  const oldAdd = proto.add
  const oldSubtract = proto.subtract

  const callObject = function (call, argument, string, offset = 1) {
    const keys = Object.keys(argument)
    let chain = this
    keys.forEach((key) => {
      chain = call.bind(chain)(argument[key] * offset, key)
    })
    return chain
  }

  proto.set = function (unit, value) {
    value = value === undefined ? unit : value
    if (unit.constructor.name === 'Object') {
      return callObject.bind(this)(function (i, s) {
        return oldSet.bind(this)(s, i)
      }, value, unit)
    }
    return oldSet.bind(this)(unit, value)
  }
  proto.add = function (value, unit) {
    if (value.constructor.name === 'Object') {
      return callObject.bind(this)(oldAdd, value, unit)
    }
    return oldAdd.bind(this)(value, unit)
  }
  proto.subtract = function (value, unit) {
    if (value.constructor.name === 'Object') {
      return callObject.bind(this)(oldAdd, value, unit, -1)
    }
    return oldSubtract.bind(this)(value, unit)
  }
}
