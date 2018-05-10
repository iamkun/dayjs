import MockDate from 'mockdate'
import dayjs from '../src'

const testPlugin = (o, c, d) => {
  c.prototype.newApi = () => ('hello world')
  d.newFunc = () => ('hi world')
}
const testPluginWithConfig = (o, c) => {
  c.prototype.newApiWithConfig = () => (`hello world ${o || ''}`)
}

dayjs.extend(testPlugin)
dayjs.extend(testPluginWithConfig, 'good')

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Plugin extend method and option', () => {
  expect(dayjs().newApi()).toBe('hello world')
  expect(dayjs().newApiWithConfig()).toBe('hello world good')
})

it('Plugin extend dayjs', () => {
  expect(dayjs.newFunc()).toBe('hi world')
})

it('Plugin use core utils', () => {
  expect(dayjs().$utils().isUndefined).toBeInstanceOf(Function)
})
