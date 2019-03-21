import Utils from '../src/utils'

const prettyUnit = Utils.p
const padStart = Utils.s
const padZoneStr = Utils.z

it('PrettyUnit', () => {
  expect(prettyUnit('Days')).toBe('day')
  expect(prettyUnit('days')).toBe('day')
  expect(prettyUnit('day')).toBe('day')
  expect(prettyUnit('Q')).toBe('quarter')
  expect(prettyUnit('quarter')).toBe('quarter')
  expect(prettyUnit('quarters')).toBe('quarter')
  expect(prettyUnit()).toBe('')
})

it('PadZoneStr', () => {
  const instance = {}
  instance.utcOffset = () => 0 * -1
  expect(padZoneStr(instance)).toBe('+00:00')
  instance.utcOffset = () => 1 * 60 * -1
  expect(padZoneStr(instance)).toBe('-01:00')
  instance.utcOffset = () => -1 * 60 * -1
  expect(padZoneStr(instance)).toBe('+01:00')
  instance.utcOffset = () => -10 * 60 * -1
  expect(padZoneStr(instance)).toBe('+10:00')
  instance.utcOffset = () => 10 * 60 * -1
  expect(padZoneStr(instance)).toBe('-10:00')
  instance.utcOffset = () => ((-5 * 60) - 30) * -1
  expect(padZoneStr(instance)).toBe('+05:30')
})

it('PadStart', () => {
  expect(padStart(1, 2, '0')).toBe('01')
  expect(padStart(0, 2, '0')).toBe('00')
})
