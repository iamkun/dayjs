export default (option, dayjsClass) => {
  /**
     * 当天开始时间
     */
  dayjsClass.prototype.dayStart = function () {
    return this.set('hour', 0)
      .set('minute', 0)
      .set('second', 0)
      .set('millisecond', 0)
  }

  /**
     * 当天结束时间
     */
  dayjsClass.prototype.dayEnd = function () {
    return this.set('hour', 23)
      .set('minute', 59)
      .set('second', 59)
      .set('millisecond', 999)
  }

  /**
     * 月初日期
     */
  dayjsClass.prototype.monthStart = function () {
    return this.set('date', 1)
  }

  /**
     * 月末日期
     */
  dayjsClass.prototype.monthEnd = function () {
    const days = this.daysInMonth()
    return this.set('date', days)
  }
}
