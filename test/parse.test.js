import moment from 'moment'
import MockDate from 'mockdate'
import dayjs from '../src'

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

test('Now', () => {
  expect(dayjs().unix()).toBe(moment().unix())
})

test('String 20130208', () => {
  expect(dayjs('20130208').unix()).toBe(moment('20130208').unix())
})

test('String timestamp 1523520536000 ms', () => {
  const timestamp = 1523520536000
  expect(dayjs(timestamp).unix()).toBe(moment(timestamp).unix())
})

test('String Other', () => {
  global.console.warn = jest.genMockFunction()// moment.js otherString will throw warn
  expect(dayjs('otherString').toString().toLowerCase()).toBe(moment('otherString').toString().toLowerCase())
})

it('Clone not affect each other', () => {
  const base = dayjs(20170101)
  const year = base.year()
  const another = base.clone()
  another.set('year', year + 1)
  expect(another.unix() - base.unix()).toBe(31536000)
})

it('Clone with same value', () => {
  const base = dayjs()
  const year = base.year()
  base.set('year', year + 1)
  const another = base.clone()
  expect(base.toString()).toBe(another.toString())
})
