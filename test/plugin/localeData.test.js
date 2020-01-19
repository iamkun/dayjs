import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import localeData from '../../src/plugin/localeData'
import localizedFormat from '../../src/plugin/localizedFormat'
import '../../src/locale/zh-cn'

dayjs.extend(localizedFormat)
dayjs.extend(localeData)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Instance localeData', () => {
  const d = dayjs()
  const m = moment()
  const dayjsLocaleData = dayjs().localeData()
  const momentLocaleData = moment().localeData()
  expect(dayjsLocaleData.firstDayOfWeek()).toBe(momentLocaleData.firstDayOfWeek())
  expect(dayjsLocaleData.months(d)).toBe(momentLocaleData.months(m))
  expect(dayjsLocaleData.months()).toEqual(momentLocaleData.months())
  expect(dayjsLocaleData.monthsShort(d)).toBe(momentLocaleData.monthsShort(m))
  expect(dayjsLocaleData.monthsShort()).toEqual(momentLocaleData.monthsShort())
  expect(dayjsLocaleData.weekdaysMin(d)).toBe(momentLocaleData.weekdaysMin(m))
  expect(dayjsLocaleData.weekdaysMin()).toEqual(momentLocaleData.weekdaysMin())
  expect(dayjsLocaleData.weekdaysShort(d)).toBe(momentLocaleData.weekdaysShort(m))
  expect(dayjsLocaleData.weekdaysShort()).toEqual(momentLocaleData.weekdaysShort())
  const longDateFormats = ['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL']
  longDateFormats.forEach((f) => {
    expect(dayjsLocaleData.longDateFormat(f)).toEqual(momentLocaleData.longDateFormat(f))
  })
})


it('Global localeData', () => {
  ['zh-cn', 'en'].forEach((lo) => {
    dayjs.locale(lo)
    moment.locale(lo)
    const dayjsLocaleData = dayjs.localeData()
    const momentLocaleData = moment.localeData()
    expect(dayjsLocaleData.firstDayOfWeek()).toBe(momentLocaleData.firstDayOfWeek())
    expect(dayjsLocaleData.months()).toEqual(momentLocaleData.months())
    expect(dayjsLocaleData.monthsShort()).toEqual(momentLocaleData.monthsShort())
    expect(dayjsLocaleData.weekdays()).toEqual(momentLocaleData.weekdays())
    expect(dayjsLocaleData.weekdaysShort()).toEqual(momentLocaleData.weekdaysShort())
    expect(dayjsLocaleData.weekdaysMin()).toEqual(momentLocaleData.weekdaysMin())
  })
})


it('Listing the months and weekdays', () => {
  ['zh-cn', 'en'].forEach((lo) => {
    dayjs.locale(lo)
    moment.locale(lo)
    expect(dayjs.months()).toEqual(moment.months())
    expect(dayjs.monthsShort()).toEqual(moment.monthsShort())
    expect(dayjs.weekdays()).toEqual(moment.weekdays())
    expect(dayjs.weekdaysShort()).toEqual(moment.weekdaysShort())
    expect(dayjs.weekdaysMin()).toEqual(moment.weekdaysMin())
  })
})
