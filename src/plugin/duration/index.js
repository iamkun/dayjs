import { MILLISECONDS_A_DAY, MILLISECONDS_A_HOUR, MILLISECONDS_A_MINUTE, MILLISECONDS_A_SECOND } from '../../constant'

const MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * 365
const MILLISECONDS_A_MONTH = MILLISECONDS_A_DAY * 30

const durationRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/

const unitToMS = {
  years: MILLISECONDS_A_YEAR,
  months: MILLISECONDS_A_MONTH,
  days: MILLISECONDS_A_DAY,
  hours: MILLISECONDS_A_HOUR,
  minutes: MILLISECONDS_A_MINUTE,
  seconds: MILLISECONDS_A_SECOND
}
class Duration {
  constructor(input, unit) {
    if (unit) {
      return new Duration(input * unitToMS[unit])
    }
    if (typeof input === 'number') {
      this.milliseconds = input
      this.parseFromMilliseconds()
      return this
    }
    if (typeof input === 'object') {
      Object.keys(input).forEach((k) => {
        this[k] = input[k]
      })
      return this
    }
    if (typeof input === 'string') {
      const d = input.match(durationRegex)
      if (d) {
        [this.years, this.months, this.days, this.hours, this.minutes, this.seconds] = d
      }
      return this
    }
  }

  parseFromMilliseconds() {
    let { milliseconds } = this
    this.years = Math.floor(milliseconds / MILLISECONDS_A_YEAR)
    milliseconds %= MILLISECONDS_A_YEAR
    this.months = Math.floor(milliseconds / MILLISECONDS_A_MONTH)
    milliseconds %= MILLISECONDS_A_MONTH
    this.days = Math.floor(milliseconds / MILLISECONDS_A_DAY)
    milliseconds %= MILLISECONDS_A_DAY
    this.hours = Math.floor(milliseconds / MILLISECONDS_A_HOUR)
    milliseconds %= MILLISECONDS_A_HOUR
    this.minutes = Math.floor(milliseconds / MILLISECONDS_A_MINUTE)
    milliseconds %= MILLISECONDS_A_MINUTE
    this.seconds = Math.floor(milliseconds / MILLISECONDS_A_SECOND)
    milliseconds %= MILLISECONDS_A_SECOND
  }

  toISOString() {
    const Y = this.years ? `${this.years}Y` : ''
    const M = this.months ? `${this.months}M` : ''
    const D = this.days ? `${this.days}D` : ''
    const H = this.hours ? `${this.hours}H` : ''
    const m = this.minutes ? `${this.minutes}M` : ''
    const S = this.seconds ? `${this.seconds}S` : ''
    const T = (H || M || S) ? 'T' : ''
    return `P${Y}${M}${D}${T}${H}${m}${S}`
  }

  toJSON() {
    return this.toISOString()
  }
}
export default (option, Dayjs, dayjs) => {
  // const proto = Dayjs.prototype
  dayjs.duration = function (input, unit) {
    return new Duration(input, unit)
  }
}
