import MockDate from 'mockdate'
import dayjs from '../src'

const testPlugin = (proto) => {
  proto.newApi = () => ('hello world')
}
dayjs.extend(testPlugin)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Plugin extend method', () => {
  expect(dayjs().newApi()).toBe('hello world')
})

it('Plugin use core utils', () => {
  expect(dayjs().$utils().isUndefined).toBeInstanceOf(Function)
})
