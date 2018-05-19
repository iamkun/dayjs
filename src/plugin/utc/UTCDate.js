import U from '../../utils'

export const LOCAL_TIMEZONE_OFFSET = new Date().getTimezoneOffset()

function getTimestampOffset(timezoneOffset, pastTimezoneOffset = LOCAL_TIMEZONE_OFFSET) {
  return (timezoneOffset - pastTimezoneOffset) * 60000
}

class UTCDate {
  constructor(arg = new Date(), $timezoneOffset = arg.getTimezoneOffset()) {
    this.$d = new Date(arg.getTime() - getTimestampOffset($timezoneOffset))
    this.$timezoneOffset = $timezoneOffset
  }
  getTimezoneOffset() {
    return this.$timezoneOffset
  }
  setTimezoneOffset($timezoneOffset = this.$timezoneOffset) {
    this.$d.setTime(this.$d.getTime() + getTimestampOffset(this.$timezoneOffset, $timezoneOffset))
    this.$timezoneOffset = $timezoneOffset
  }
}

const proxyProperties = [
  'toDateString', 'toLocaleString', 'toLocaleDateString', 'toLocaleTimeString',
  'setDate', 'setFullYear', 'setHours', 'setMilliseconds', 'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setYear',
  'getDate', 'getDay', 'getFullYear', 'getHours', 'getMilliseconds', 'getMinutes', 'getMonth', 'getSeconds', 'getYear'
]
const proxyUTCGetProperties = [
  'toISOString', 'toUTCString', 'toGMTString', 'toJSON', 'getUTCDate', 'getUTCDay', 'getUTCFullYear', 'getUTCHours', 'getUTCMilliseconds', 'getUTCMinutes', 'getUTCMonth', 'getUTCSeconds', 'valueOf', 'getTime'
]
const proxyUTCSetProperties = [
  'setUTCDate', 'setUTCFullYear', 'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds'
]

Object.assign(
  UTCDate.prototype,
  ['toString', 'toTimeString'].reduce(
    (r, key) => ({
      ...r,
      [key](...arg) {
        return this.$d[key](...arg).replace(/GMT(.*)$/, `GMT${U.padZoneStr(this.$timezoneOffset)}`)
      }
    }),
    {}
  ),
  proxyProperties.reduce(
    (r, key) => ({
      ...r,
      [key](...arg) {
        return this.$d[key](...arg)
      }
    }),
    {}
  ),
  proxyUTCGetProperties.reduce(
    (r, key) => ({
      ...r,
      [key](...arg) {
        return new Date(this.$d.getTime() + getTimestampOffset(this.$timezoneOffset))[key](...arg)
      }
    }),
    {}
  ),
  proxyUTCSetProperties.reduce(
    (r, key) => ({
      ...r,
      [key](...arg) {
        const tmp = new Date(this.$d.getTime() + getTimestampOffset(this.$timezoneOffset))
        tmp[key](...arg)
        tmp.setTime(tmp.getTime() - getTimestampOffset(this.$timezoneOffset))
        this.$d = tmp
      }
    }),
    {}
  )
)

export default UTCDate
