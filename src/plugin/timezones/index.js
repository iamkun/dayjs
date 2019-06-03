import { utcToZonedTime, toDate } from 'date-fns-tz'
import polyfill from './polyfillLoader'
import dayjs from '../..'
// basically smaller copy from date-fns-tz
function zonedTimeToUtc(date, timeZone) {
  return toDate(date, { timeZone })
}
// considering just calculating offset
export default (o, c, d) => {
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
  // constructor
  d.tz = function (date, tz) {
    const zoned = new Date(dayjs(date).toDate().toLocaleString('en-US', { timeZone: tz }))
    // for getTimezoneOffset in minutes used for output thats rounded anyway
    const difference = (dayjs(date).toDate() - zoned) / 1000 / 60
    // new Date(date).toLocaleString("en-US", { timeZone: tz })

    return dayjs(date, { tzOffsetModifier: difference, timeZone: tz })
  }
  proto.tz = function (tz) {
    const date = new Date(Date.parse(this.toDate()) + (this.$tzOffsetModifier * 1000 * 60))
    const utils = this.$utils()
    const zoned = new Date(date.toLocaleString('en-US', { timeZone: tz }))
    // for getTimezoneOffset in minutes used for output thats rounded anyway
    const difference = (date - zoned) / 1000 / 60
    // new Date(date).toLocaleString("en-US", { timeZone: tz })
    this.$tzOffsetModifier = difference
    this.timeZone = tz
    return utils.w(zoned, this)
  }
  proto.tz = function (tz) {
    const date = new Date(Date.parse(this.toDate()) + (this.$tzOffsetModifier * 1000 * 60))
    const utils = this.$utils()
    const zoned = new Date(date.toLocaleString('en-US', { timeZone: tz }))
    // for getTimezoneOffset in minutes used for output thats rounded anyway
    const difference = (date - zoned) / 1000 / 60
    // new Date(date).toLocaleString("en-US", { timeZone: tz })
    this.$tzOffsetModifier = difference
    this.timeZone = tz
    return utils.w(zoned, this)
  }
}
