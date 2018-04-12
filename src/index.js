class Dayjs {
  constructor(config) {
    this.utc = false
    const args = this.parseConfig(config)
    this.date = new Date(args)
    this.timeZone = this.date.getTimezoneOffset() / 60
    this.timeZoneString = String(this.timeZone * -1).replace(/^(.)?(\d)/, '$10$200').padStart(5, '+')
  }

  parseConfig(config) {
    if (!config) return new Date()
    if (config instanceof Date) return config
    if (/^(\d){8}$/.test(config)) {
      this.utc = true
      const y = config.substr(0, 4)
      const m = config.substr(4, 2)
      const d = config.substr(6, 2)
      return `${y}-${m}-${d}`
    }
    return config
  }

  year() {
    return this.date.getFullYear()
  }

  month() {
    return this.date.getMonth()
  }

  unix() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    const zonePad = !this.utc ? 0 : this.timeZone * 60 * 60 * 1000
    return Math.floor((this.date.getTime() + zonePad) / 1000)
  }

  toString() {
    return this.date.toUTCString()
  }

  startOf(arg) {
    switch (arg) {
      case 'year':
        return new Dayjs(new Date(this.year(), 0, 1))
      case 'month':
        return new Dayjs(new Date(this.year(), this.month(), 1))
      default:
        return this
    }
  }

  format(formatStr = 'YYYY-MM-DDTHH:mm:ssZ') {
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const { date } = this
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const week = date.getDay()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return formatStr.replace(/Y{2,4}|M{1,2}|D{1,2}|d{1,4}|H{1,2}|m{1,2}|s{1,2}|Z{1,2}/g, (match) => {
      switch (match) {
        case 'YY':
          return String(year).slice(-2)
        case 'YYYY':
          return String(year)
        case 'M':
          return String(month)
        case 'MM':
          return String(month).padStart(2, '0')
        case 'D':
          return String(day)
        case 'DD':
          return String(day).padStart(2, '0')
        case 'd':
          return String(week)
        case 'dddd':
          return weeks[week]
        case 'H':
          return String(hour)
        case 'HH':
          return String(hour).padStart(2, '0')
        case 'm':
          return String(minute)
        case 'mm':
          return String(minute).padStart(2, '0')
        case 's':
          return String(second)
        case 'ss':
          return String(second).padStart(2, '0')
        case 'Z':
          return this.timeZoneString.replace('00', ':00')
        case 'ZZ':
          return this.timeZoneString
        default:
          return match
      }
    })
  }
}

export default config => (
  new Dayjs(config)
)
