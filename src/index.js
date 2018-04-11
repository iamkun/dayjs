class Dayjs {
  constructor(config = new Date().getTime()) {
    this.date = new Date(config)
  }

  toString() {
    return this.date.toString().replace(' (CST)', '')
  }
}

export default config => (
  new Dayjs(config)
)
