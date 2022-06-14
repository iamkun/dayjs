import {
  MILLISECONDS_A_DAY,
  MILLISECONDS_A_HOUR,
  MILLISECONDS_A_MINUTE,
  MILLISECONDS_A_SECOND,
  MILLISECONDS_A_WEEK
} from '../../constant'

export default (_, c, d) => {
  c.prototype.diff = function (u, v) {
    if (!u) throw new Error('Unit is not defined!')

    const t = this.valueOf()
    const vt = d(v).valueOf()
    const df = Math.abs(t - vt)

    switch (u) {
      case 'millisecond':
      case 'milliseconds':
        return df
      case 'second':
      case 'seconds':
        return Math.round(df / MILLISECONDS_A_SECOND)
      case 'minute':
      case 'minutes':
        return Math.round(df / MILLISECONDS_A_MINUTE)
      case 'hour':
      case 'hours':
        return Math.round(df / MILLISECONDS_A_HOUR)
      case 'day':
      case 'days':
        return Math.round(df / MILLISECONDS_A_DAY)
      case 'week':
      case 'weeks':
        return Math.round(df / MILLISECONDS_A_WEEK)
      default:
        throw new Error(`Unit "${u}" is not supported!`)
    }
  }
}
