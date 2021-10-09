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
      // Destruct date properties and set month
      let [_, YYYY, MM, DD, hh, mm, ss, ms] = d;
      MM -= 1
      // Treat this condition as an invalid date
      if (MM > 11 || MM < 0) return new Date(NaN)
      let daysPerMonth = DAYS_PER_MONTH[MM]
      if (MM === 1 // If month is February increase days per month by 1 if we are in a leap year
        && (((YYYY % 4 === 0) && (YYYY % 100 !== 0)) || (YYYY % 400 === 0))) daysPerMonth += 1
      // Treat this condition as an invalid date
      if ((!!DD && (DD > daysPerMonth || DD < 1))
        || (!!hh && (hh > 23 || hh < 0))
        || (!!mm && (mm > 59 || mm < 0))
        || (!!ss && (ss > 59 || ss < 0))) return new Date(NaN)
      ms = (ms || '0').substring(0, 3)
      if (utc) {
        return new Date(Date.UTC(YYYY, MM, DD || 1, hh || 0, mm || 0, ss || 0, ms))
      }
      return new Date(YYYY, MM, DD || 1, hh || 0, mm || 0, ss || 0, ms)
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
