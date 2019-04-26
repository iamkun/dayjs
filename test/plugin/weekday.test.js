import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import weekday from '../../src/plugin/weekday'
import '../../src/locale/zh-cn'
import '../../src/locale/ar'

dayjs.extend(weekday)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
  moment.locale('en')
  dayjs.locale('en')
})

it('Sunday is the first day of the week', () => {
  expect(dayjs().weekday()).toBe(moment().weekday())
  expect(dayjs().weekday(0).date()).toBe(moment().weekday(0).date())
  expect(dayjs().weekday(-7).format()).toBe(moment().weekday(-7).format())
  expect(dayjs().weekday(7).format()).toBe(moment().weekday(7).format())
})

it('Monday is the first day of the week', () => {
  moment.locale('zh-cn')
  dayjs.locale('zh-cn')
  expect(dayjs().weekday()).toBe(moment().weekday())
  expect(dayjs().weekday(0).date()).toBe(moment().weekday(0).date())
  expect(dayjs().weekday(-7).format()).toBe(moment().weekday(-7).format())
  expect(dayjs().weekday(7).format()).toBe(moment().weekday(7).format())
})

it('Saturday is the first day of the week', () => {
  moment.locale('ar')
  dayjs.locale('ar')
  expect(dayjs().weekday()).toBe(moment().weekday())
  expect(dayjs().weekday(0).date()).toBe(moment().weekday(0).date())
  expect(dayjs().weekday(-7).valueOf()).toBe(moment().weekday(-7).valueOf())
  expect(dayjs().weekday(7).valueOf()).toBe(moment().weekday(7).valueOf())
})
