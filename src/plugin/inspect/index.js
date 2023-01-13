export default (o, c, d) => {
  c.prototype[Symbol.for('nodejs.util.inspect.custom')] = function () {
    return `Dayjs<${this.format()}>`
  }
}
