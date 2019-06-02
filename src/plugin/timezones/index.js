import { utcToZonedTime, toDate } from 'date-fns-tz'
import polyfill from './polyfillLoader'
// basically smaller copy from date-fns-tz
function zonedTimeToUtc(date, timeZone) {
  return toDate(date, { timeZone })
}

export default (o, c) => {
  polyfill()
  const proto = c.prototype
  // zonedTimeToUtc expects formated input, therefore with the custom version a dayjs instance
  // proto.zonedTimeToUtc = zonedTimeToUtc
  // proto.utcToZonedTime = utcToZonedTime
  proto.toUTC = function (tz = Intl.DateTimeFormat().resolvedOptions().timeZone) {
    const utils = this.$utils()
    return utils.w(zonedTimeToUtc(
      this.format('YYYY-MM-DDTHH:mm:ss'),
      tz
    ), this)
  }
  proto.toZone = function (tz = Intl.DateTimeFormat().resolvedOptions().timeZone) {
    const utils = this.$utils()
    return utils.w(utcToZonedTime(
      this.$d,
      tz
    ), this)
  }
}
