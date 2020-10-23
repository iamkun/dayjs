import MockDate from 'mockdate'
import dayjs from '../../src'
import minMax from '../../src/plugin/minMax'

dayjs.extend(minMax)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

const arg1 = dayjs('2019-01-01')
const arg2 = dayjs('2018-01-01')
const arg3 = dayjs('2017-01-01')
const arg4 = dayjs('Invalid Date')

it('Return current time if no argument', () => {
  expect(dayjs.max())
    .toBe(null)
  expect(dayjs.min())
    .toBe(null)
  expect(dayjs.max(null))
    .toBe(null)
  expect(dayjs.min(null))
    .toBe(null)
})

it('Return current time if passing empty array', () => {
  expect(dayjs.max([]))
    .toBe(null)
  expect(dayjs.min([]))
    .toBe(null)
})

it('Compare between arguments', () => {
  expect(dayjs.max(arg1, arg2, arg3).format())
    .toBe(arg1.format())
  expect(dayjs.min(arg1, arg2, arg3).format())
    .toBe(arg3.format())
})

it('Compare in array', () => {
  expect(dayjs.max([arg1, arg2, arg3]).format())
    .toBe(arg1.format())
  expect(dayjs.min([arg1, arg2, arg3]).format())
    .toBe(arg3.format())
})

it('If Invalid Date return Invalid Date', () => {
  expect(dayjs.max(arg1, arg2, arg3, arg4).format())
    .toBe(arg4.format())
  expect(dayjs.min([arg1, arg2, arg3, arg4]).format())
    .toBe(arg4.format())
})
