import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Year', () => {
  expect(dayjs().year()).toBe(moment().year())
})

it('Month', () => {
  expect(dayjs().month()).toBe(moment().month())
})

it('Date', () => {
  expect(dayjs().date()).toBe(moment().date())
})

it('Set Unknown String', () => {
  expect(dayjs().set('Unknown String', 1).unix())
    .toBe(moment().set('Unknown String', 1).unix())
})

it('Set Not Int', () => {
  expect(dayjs().set('year', 'Not Int').unix())
    .toBe(moment().set('year', 'Not Int').unix())
})

