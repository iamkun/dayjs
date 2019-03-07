export default (o, c) => { // locale needed later
  const proto = c.prototype
  const localeData = function () {
    return {
      months: instance => instance.format('MMMM'),
      monthsShort: instance => instance.format('MMM'),
      firstDayOfWeek: () => this.$locale().weekStart || 0,
      weekdaysMin: instance => instance.format('dd'),
      weekdaysShort: instance => instance.format('ddd')
    }
  }
  proto.localeData = function () {
    return localeData.bind(this)()
  }
}

