import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import localeData from '../../src/plugin/localeData'

dayjs.extend(localeData)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('localeData', () => {
  const d = dayjs()
  const m = moment()
  const dayjsLocaleData = dayjs().localeData()
  const momentLocaleData = moment().localeData()
  expect(dayjsLocaleData.firstDayOfWeek()).toBe(momentLocaleData.firstDayOfWeek())
  expect(dayjsLocaleData.months(d)).toBe(momentLocaleData.months(m))
  expect(dayjsLocaleData.monthsShort(d)).toBe(momentLocaleData.monthsShort(m))
  expect(dayjsLocaleData.weekdaysMin(d)).toBe(momentLocaleData.weekdaysMin(m))
  expect(dayjsLocaleData.weekdaysShort(d)).toBe(momentLocaleData.weekdaysShort(m))
})
