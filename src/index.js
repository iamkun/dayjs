class Moment {
  constructor(config = new Date().getTime()) {
    this.date = new Date(config)
  }

  toString() {
    return this.date.toDateString()
  }
}

export default config => (
  new Moment(config)
)
