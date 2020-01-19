export default (o, c, dayjs) => { // locale needed later
  const proto = c.prototype
  const getShort = (ins, target, full, num) => {
    const locale = ins.name ? ins : ins.$locale()
    if (!locale[target]) {
      return locale[full].map(f => f.substr(0, num))
    }
    return locale[target]
  }
  const localeData = function () {
    return {
      months: instance =>
        (instance ? instance.format('MMMM') : getShort(this, 'months')),
      monthsShort: instance =>
        (instance ? instance.format('MMM') : getShort(this, 'monthsShort', 'months', 3)),
      firstDayOfWeek: () => this.$locale().weekStart || 0,
      weekdaysMin: instance =>
        (instance ? instance.format('dd') : getShort(this, 'weekdaysMin', 'weekdays', 2)),
      weekdaysShort: instance =>
        (instance ? instance.format('ddd') : getShort(this, 'weekdaysShort', 'weekdays', 3)),
      longDateFormat: format => this.$locale().formats[format]
    }
  }
  proto.localeData = function () {
    return localeData.bind(this)()
  }

  dayjs.localeData = () => {
    const localeObject = dayjs.Ls[dayjs.locale()]
    return {
      firstDayOfWeek: () => localeObject.weekStart || 0,
      weekdays: () => localeObject.weekdays,
      weekdaysShort: () => getShort(localeObject, 'weekdaysShort', 'weekdays', 3),
      weekdaysMin: () => getShort(localeObject, 'weekdaysMin', 'weekdays', 2),
      months: () => localeObject.months,
      monthsShort: () => getShort(localeObject, 'monthsShort', 'months', 3)
    }
  }
}
