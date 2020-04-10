import { MILLISECONDS_A_WEEK, MILLISECONDS_A_DAY, MILLISECONDS_A_HOUR, MILLISECONDS_A_MINUTE, MILLISECONDS_A_SECOND } from '../../constant'

const MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * 365
const MILLISECONDS_A_MONTH = MILLISECONDS_A_DAY * 30

const durationRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/

const unitToMS = {
  years: MILLISECONDS_A_YEAR,
  months: MILLISECONDS_A_MONTH,
  days: MILLISECONDS_A_DAY,
  hours: MILLISECONDS_A_HOUR,
  minutes: MILLISECONDS_A_MINUTE,
  seconds: MILLISECONDS_A_SECOND,
  weeks: MILLISECONDS_A_WEEK
}

const isDuration = d => (d instanceof Duration) // eslint-disable-line no-use-before-define

let $d
let $u

const wrapper = (input, instance, unit) =>
  new Duration(input, unit, instance.$l) // eslint-disable-line no-use-before-define

const prettyUnit = unit => `${$u.p(unit)}s`

class Duration {
  constructor(input, unit, locale) {
    this.$d = {}
    this.$l = locale || 'en'
    if (unit) {
      return wrapper(input * unitToMS[prettyUnit(unit)], this)
    }
    if (typeof input === 'number') {
      this.$ms = input
      this.parseFromMilliseconds()
      return this
    }
    if (typeof input === 'object') {
      Object.keys(input).forEach((k) => {
        this.$d[prettyUnit(k)] = input[k]
      })
      this.calMilliseconds()
      return this
    }
    if (typeof input === 'string') {
      const d = input.match(durationRegex)
      if (d) {
        [,,
          this.$d.years, this.$d.months,,
          this.$d.days, this.$d.hours, this.$d.minutes, this.$d.seconds] = d
        this.calMilliseconds()
        return this
      }
    }
    return this
  }

  calMilliseconds() {
    this.$ms = Object.keys(this.$d).reduce((total, unit) => (
      total + ((this.$d[unit] || 0) * (unitToMS[unit] || 1))
    ), 0)
  }

  parseFromMilliseconds() {
    let { $ms } = this
    this.$d.years = Math.floor($ms / MILLISECONDS_A_YEAR)
    $ms %= MILLISECONDS_A_YEAR
    this.$d.months = Math.floor($ms / MILLISECONDS_A_MONTH)
    $ms %= MILLISECONDS_A_MONTH
    this.$d.days = Math.floor($ms / MILLISECONDS_A_DAY)
    $ms %= MILLISECONDS_A_DAY
    this.$d.hours = Math.floor($ms / MILLISECONDS_A_HOUR)
    $ms %= MILLISECONDS_A_HOUR
    this.$d.minutes = Math.floor($ms / MILLISECONDS_A_MINUTE)
    $ms %= MILLISECONDS_A_MINUTE
    this.$d.seconds = $ms / MILLISECONDS_A_SECOND
  }

  toISOString() {
    const Y = this.$d.years ? `${this.$d.years}Y` : ''
    const M = this.$d.months ? `${this.$d.months}M` : ''
    let days = this.$d.days || 0
    if (this.$d.weeks) {
      days += this.$d.weeks * 7
    }
    const D = days ? `${days}D` : ''
    const H = this.$d.hours ? `${this.$d.hours}H` : ''
    const m = this.$d.minutes ? `${this.$d.minutes}M` : ''
    let seconds = this.$d.seconds || 0
    if (this.$d.milliseconds) {
      seconds += this.$d.milliseconds / 1000
    }
    const S = seconds ? `${seconds}S` : ''
    const T = (H || M || S) ? 'T' : ''
    const result = `P${Y}${M}${D}${T}${H}${m}${S}`
    return result === 'P' ? 'P0D' : result
  }

  toJSON() {
    return this.toISOString()
  }

  as(unit) {
    return this.$ms / (unitToMS[prettyUnit(unit)] || 1)
  }

  get(unit) {
    let base = this.$ms
    const pUnit = prettyUnit(unit)
    if (pUnit === 'milliseconds') {
      base %= 1000
    } else {
      base = Math.floor(base / unitToMS[pUnit])
    }
    return base
  }

  add(input, unit, isSubtract) {
    let another
    if (unit) {
      another = input * unitToMS[prettyUnit(unit)]
    } else if (isDuration(input)) {
      another = input.$ms
    } else {
      another = wrapper(input, this).$ms
    }
    return wrapper(this.$ms + (another * (isSubtract ? -1 : 1)), this)
  }

  subtract(input, unit) {
    return this.add(input, unit, true)
  }

  locale(l) {
    const that = this.clone()
    that.$l = l
    return that
  }

  clone() {
    return wrapper(this.$ms, this)
  }

  humanize(withSuffix) {
    return $d().add(this.$ms, 'ms').locale(this.$l).fromNow(!withSuffix)
  }

  milliseconds() { return this.get('milliseconds') }
  asMilliseconds() { return this.as('milliseconds') }
  seconds() { return this.get('seconds') }
  asSeconds() { return this.as('seconds') }
  minutes() { return this.get('minutes') }
  asMinutes() { return this.as('minutes') }
  hours() { return this.get('hours') }
  asHours() { return this.as('hours') }
  days() { return this.get('days') }
  asDays() { return this.as('days') }
  weeks() { return this.get('weeks') }
  asWeeks() { return this.as('weeks') }
  months() { return this.get('months') }
  asMonths() { return this.as('months') }
  years() { return this.get('years') }
  asYears() { return this.as('years') }
}
export default (option, Dayjs, dayjs) => {
  $d = dayjs
  $u = dayjs().$utils()
  dayjs.duration = function (input, unit) {
    return wrapper(input, {}, unit)
  }
  dayjs.isDuration = isDuration
}
