export default (o, c, dayjs) => { // locale needed later
  const proto = c.prototype
  const localeData = function () {
    return {
      months: instance =>
        (instance ? instance.format('MMMM') : this.$locale().months),
      monthsShort: instance =>
        (instance ? instance.format('MMM') : this.$locale().monthsShort),
      firstDayOfWeek: () => this.$locale().weekStart || 0,
      weekdaysMin: instance =>
        (instance ? instance.format('dd') : this.$locale().weekdaysMin),
      weekdaysShort: instance =>
        (instance ? instance.format('ddd') : this.$locale().weekdaysShort)
    }
  }
  proto.localeData = function () {
    return localeData.bind(this)()
  }

  dayjs.localeData = () => {
    const localeObject = dayjs.Ls[dayjs.locale()]
    return {
      firstDayOfWeek: () => localeObject.weekStart || 0
    }
  }
}
