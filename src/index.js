class Dayjs {
  constructor(config) {
    this.utc = false
    const args = this.parseConfig(config)
    this.date = new Date(args)
  }

  parseConfig(config) {
    if (!config) return new Date()
    if (/^(\d){8}$/.test(config)) {
      this.utc = true
      const y = config.substr(0, 4)
      const m = config.substr(4, 2)
      const d = config.substr(6, 2)
      return `${y}-${m}-${d}`
    }
    return false
  }

  unix() {
    const zonePad = this.utc ? this.date.getTimezoneOffset() * 60 * 1000 : 0
    return Math.floor((this.date.getTime() + zonePad) / 1000)
  }

  toString() {
    return this.date.toUTCString()
  }
}

export default config => (
  new Dayjs(config)
)
