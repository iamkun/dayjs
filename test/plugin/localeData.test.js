import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import localeData from '../../src/plugin/localeData'
import '../../src/locale/zh-cn'

dayjs.extend(localeData)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('instance localeData', () => {
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
})

it('global localeData', () => {
  dayjs.locale('zh-cn')
  moment.locale('zh-cn')
  let dayjsLocaleData = dayjs.localeData()
  let momentLocaleData = moment.localeData()
  expect(dayjsLocaleData.firstDayOfWeek()).toBe(momentLocaleData.firstDayOfWeek())
  dayjs.locale('en')
  moment.locale('en')
  dayjsLocaleData = dayjs.localeData()
  momentLocaleData = moment.localeData()
  expect(dayjsLocaleData.firstDayOfWeek()).toBe(momentLocaleData.firstDayOfWeek())
})
