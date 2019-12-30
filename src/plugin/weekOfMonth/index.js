export default (o, c) => {
  // 获取每周第一天的判定标准偏移量 offset
  // 默认为 0 即星期日为每周第一天，否则如 1 即星期一为每周第一天，以此类推
  const isOffsetNumber = () => o && o.offset && typeof o.offset === 'number'
  const isOffsetValid = () => o.offset > 0 && o.offset < 7
  const offset = isOffsetNumber() && isOffsetValid() ? o.offset : 0

  const proto = c.prototype

  // 获取当前 dayjs 对象在当前月中的第几周
  proto.weekOfMonth = function () {
    // 根据 offset 计算实际偏移量 actualOffset
    const firstDay = this.date(1).day()
    const actualOffset = (firstDay === 0 ? firstDay : 7 - firstDay) + offset

    // 根据实际偏移量 actualOffset 计算属于第几周
    function getWeek(date, week = 0) {
      if (date - actualOffset <= 0) {
        return week
      }

      return getWeek(date - 7, week + 1)
    }

    return getWeek(this.date())
  }

  // 获取当前月的星期分布
  proto.weekMapOfMonth = function () {
    const dateList = Array.from({ length: this.daysInMonth() }, (_, index) => index + 1)

    const weekMap = dateList.reduce((res, date) => {
      const weekKey = this.date(date).weekOfMonth()

      if (!res[weekKey]) {
        res[weekKey] = []
      }

      res[weekKey].push(date)

      return res
    }, {})

    return weekMap
  }
}
