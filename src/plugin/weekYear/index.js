import dayjs from '../../index'

export default (o, c) => {
  const proto = c.prototype
  proto.weekYear = function () {
    const month = this.month()
    const weekOfYear = this.week()
    const year = this.year()
    console.log(month, weekOfYear, year)
    console.log(dayjs('2025-12-31').format('YYYY年w周'))
    if (weekOfYear === 1 && month === 11) {
      return year + 1
    }
    if (month === 0 && weekOfYear >= 52) {
      return year - 1
    }
    return year
  }
}
