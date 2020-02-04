export default (o, c, dayjs) => { // locale needed later
  const proto = c.prototype
  const getShort = (ins, target, full, num) => {
    const locale = ins.name ? ins : ins.$locale()
    if (!locale[target]) {
      return locale[full].map(f => f.substr(0, num))
    }
    return locale[target]
  }
  const getDayjsLocaleObject = () => dayjs.Ls[dayjs.locale()]
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
    const localeObject = getDayjsLocaleObject()
    return {
      firstDayOfWeek: () => localeObject.weekStart || 0,
      weekdays: () => dayjs.weekdays(),
      weekdaysShort: () => dayjs.weekdaysShort(),
      weekdaysMin: () => dayjs.weekdaysMin(),
      months: () => dayjs.months(),
      monthsShort: () => dayjs.monthsShort()
    }
  }

  dayjs.months = () => getDayjsLocaleObject().months

  dayjs.monthsShort = () => getShort(getDayjsLocaleObject(), 'monthsShort', 'months', 3)

  dayjs.weekdays = () => getDayjsLocaleObject().weekdays

  dayjs.weekdaysShort = () => getShort(getDayjsLocaleObject(), 'weekdaysShort', 'weekdays', 3)

  dayjs.weekdaysMin = () => getShort(getDayjsLocaleObject(), 'weekdaysMin', 'weekdays', 2)
}
