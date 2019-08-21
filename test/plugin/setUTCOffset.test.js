import MockDate from 'mockdate'
import moment from 'moment'
import dayjs from '../../src'
import setUTCOffset from '../../src/plugin/setUTCOffset'

dayjs.extend(setUTCOffset)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Set utcOffset -> Get utcOffset', () => {
  expect(dayjs().utcOffset(540).utcOffset()).toBe(moment().utcOffset(540).utcOffset())
  expect(dayjs().utcOffset(540).format()).toBe(moment().utcOffset(540).format())
  expect(dayjs().utcOffset(60).format()).toBe(moment().utcOffset(60).format())
  expect(dayjs().utcOffset(8).format()).toBe(moment().utcOffset(8).format())

  expect(dayjs().utcOffset(-540).utcOffset()).toBe(moment().utcOffset(-540).utcOffset())
  expect(dayjs().utcOffset(-540).format()).toBe(moment().utcOffset(-540).format())

  expect(dayjs().utcOffset(-60).format()).toBe(moment().utcOffset(-60).format())
  expect(dayjs().utcOffset(-8).format()).toBe(moment().utcOffset(-8).format())
  // expect(dayjs().utcOffset(0).format()).toBe(moment().utcOffset(0).format())
})
