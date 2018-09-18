import { findTimeZone, setTimeZone, getZonedTime } from 'timezone-support'
import { FORMAT_DEFAULT } from '../../constant'

function updateTime(instance, {
  year, month, day, dayOfWeek, hours, minutes, epoch, zone
}, convertTimeZone) {
  const date = instance.$d
  // Update the Date object with the epoch time from the date
  // after applying the specified time zone on it.
  date.setTime(epoch)
  if (convertTimeZone) {
    // If the date was converted to a specified time zone for formatting
    // purposes, replace date parts from the zoned time object.
    instance.$Y = year
    instance.$M = month - 1
    instance.$D = day
    instance.$W = dayOfWeek
    instance.$H = hours
    instance.$m = minutes
    const { abbreviation, offset } = zone
    instance.$z = abbreviation
    instance.$o = offset
  } else {
    // If the time zone was applied to a zone-less input string only
    // to convert it to UTC, update date parts in the local time zone.
    instance.$Y = date.getFullYear()
    instance.$M = date.getMonth()
    instance.$D = date.getDate()
    instance.$W = date.getDay()
    instance.$H = date.getHours()
    instance.$m = date.getMinutes()
  }
}

function padToTwoDigits(number) {
  return number > 9 ? number : `0${number}`
}

function formatTimeZoneOffset(offset, separator) {
  let sign
  if (offset <= 0) {
    offset = -offset
    sign = '+'
  } else {
    sign = '-'
  }
  const hours = padToTwoDigits(Math.floor(offset / 60))
  const minutes = padToTwoDigits(offset % 60)
  return sign + hours + separator + minutes
}

function formatTimeZoneTokens(instance, format) {
  const str = format || FORMAT_DEFAULT
  return str.replace(/z|ZZ|Z/g, (match) => {
    switch (match) {
      case 'z':
        return `[${instance.$z}]`
      case 'Z':
        return formatTimeZoneOffset(instance.$o, ':')
      default: // 'ZZ'
        return formatTimeZoneOffset(instance.$o, '')
    }
  })
}

export default (o, C) => {
  const proto = C.prototype
  const oldParse = proto.parse
  const oldFormat = proto.format
  proto.parse = function (cfg) {
    oldParse.call(this, cfg)
    const { timeZone: timeZoneName, convertTimeZone } = cfg
    if (timeZoneName) {
      const date = this.$d
      try {
        const timeZone = findTimeZone(timeZoneName)
        const zonedTime = convertTimeZone
          // Temporary object created for formatting purposes receives
          // a date in UTC and needs to convert it to the specified TZ.
          ? getZonedTime(date, timeZone)
          // Input string without time zone passed to the constructor
          // needs to get the specified TZ assigned without conversion.
          : setTimeZone(date, timeZone, { useUTC: false })
        updateTime(this, zonedTime, convertTimeZone)
      } catch (error) {
        date.setTime(Number.NaN)
        this.init(cfg)
      }
    }
  }
  proto.format = function (format, options = {}) {
    if (typeof format === 'object' && !(format instanceof String)) {
      options = format
      format = undefined
    }
    const { timeZone } = options
    let date
    if (timeZone) {
      // Run the format on a temporary instance, which will use
      // the date converted to the specified time zone.
      date = new C({
        date: this.$d.valueOf(), locale: this.$L, timeZone, convertTimeZone: true
      })
      // Replace tokens supported by this plugin; the rest will
      // be replaced by the original method.
      format = formatTimeZoneTokens(date, format)
    } else {
      date = this
    }
    return oldFormat.call(date, format)
  }
}
