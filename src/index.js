class Moment {
  constructor(config = new Date().getTime()) {
    this.date = new Date(config)
  }

  toString() {
    return this.date.toString()
  }
}

export default config => (
  new Moment(config)
)
