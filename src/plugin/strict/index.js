import { REGEX_PARSE } from '../../constant'
import U from '../../utils'

const DAYS_PER_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const parseDateStrict = (cfg) => {
  const { date, utc } = cfg
  if (date === null) return new Date(NaN) // null is invalid
  if (U.u(date)) return new Date() // today
  if (date instanceof Date) return new Date(date)
  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE)
    if (d) {
      const m = d[2] - 1 || 0
      // Treat this condition as an invalid date
      if (!m || m > 11 || m < 0) return new Date(NaN)
      let daysPerMonth = DAYS_PER_MONTH[d[2] - 1]
      if (m === 1 // If month is February increase days per month by 1 if we are in a leap year
        && (((d[1] % 4 === 0) && (d[1] % 100 !== 0)) || (d[1] % 400 === 0))) daysPerMonth += 1
      // Treat this condition as an invalid date
      if ((!!d[3] && (d[3] > daysPerMonth || d[3] < 1))
        || (!!d[4] && (d[4] > 23 || d[4] < 0))
        || (!!d[5] && (d[5] > 59 || d[5] < 0))
        || (!!d[6] && (d[6] > 59 || d[6] < 0))) return new Date(NaN)
      const ms = (d[7] || '0').substring(0, 3)
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3]
          || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms))
      }
      return new Date(d[1], m, d[3]
        || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms)
    }
  }

  return new Date(date) // everything else
}

export default (o, c) => {
  const proto = c.prototype
  proto.parse = function (cfg) {
    this.$d = parseDateStrict(cfg)
    this.$x = cfg.x || {}
    this.init()
  }
}
