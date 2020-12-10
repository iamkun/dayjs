import { t } from '../localizedFormat/utils'

export default (o, c, dayjs) => { // locale needed later
  const proto = c.prototype
  const getLocalePart = part => (part && (part.indexOf ? part : part.s))
  const getShort = (ins, target, full, num, localeOrder) => {
    const locale = ins.name ? ins : ins.$locale()
    const targetLocale = getLocalePart(locale[target])
    const fullLocale = getLocalePart(locale[full])
    const result = targetLocale || fullLocale.map(f => f.substr(0, num))
    if (!localeOrder) return result
    const { weekStart } = locale
    return result.map((_, index) => (result[(index + (weekStart || 0)) % 7]))
  }
  const getDayjsLocaleObject = () => dayjs.Ls[dayjs.locale()]
  const getLongDateFormat = (l, format) =>
    l.formats[format] || t(l.formats[format.toUpperCase()])

  const localeData = function () {
    return {
      months: instance =>
        (instance ? instance.format('MMMM') : getShort(this, 'months')),
      monthsShort: instance =>
        (instance ? instance.format('MMM') : getShort(this, 'monthsShort', 'months', 3)),
      firstDayOfWeek: () => this.$locale().weekStart || 0,
      weekdays: instance => (instance ? instance.format('dddd') : getShort(this, 'weekdays')),
      weekdaysMin: instance =>
        (instance ? instance.format('dd') : getShort(this, 'weekdaysMin', 'weekdays', 2)),
      weekdaysShort: instance =>
        (instance ? instance.format('ddd') : getShort(this, 'weekdaysShort', 'weekdays', 3)),
      longDateFormat: format => getLongDateFormat(this.$locale(), format),
      meridiem: this.$locale().meridiem,
      ordinal: this.$locale().ordinal
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
      monthsShort: () => dayjs.monthsShort(),
      longDateFormat: format => getLongDateFormat(localeObject, format),
      meridiem: localeObject.meridiem,
      ordinal: localeObject.ordinal
    }
  }

  dayjs.months = () => getShort(getDayjsLocaleObject(), 'months')

  dayjs.monthsShort = () => getShort(getDayjsLocaleObject(), 'monthsShort', 'months', 3)

  dayjs.weekdays = localeOrder => getShort(getDayjsLocaleObject(), 'weekdays', null, null, localeOrder)

  dayjs.weekdaysShort = localeOrder => getShort(getDayjsLocaleObject(), 'weekdaysShort', 'weekdays', 3, localeOrder)

  dayjs.weekdaysMin = localeOrder => getShort(getDayjsLocaleObject(), 'weekdaysMin', 'weekdays', 2, localeOrder)
}
