import Utils from '../src/utils'

const {
  prettyUnit,
  padZoneStr,
  padStart
} = Utils

it('PrettyUnit', () => {
  expect(prettyUnit('Days')).toBe('day')
  expect(prettyUnit('days')).toBe('day')
  expect(prettyUnit('day')).toBe('day')
  expect(prettyUnit()).toBe('')
})

it('PadZoneStr', () => {
  expect(padZoneStr(0)).toBe('+00:00')
  expect(padZoneStr(1 * 60)).toBe('-01:00')
  expect(padZoneStr(-1 * 60)).toBe('+01:00')
  expect(padZoneStr(-10 * 60)).toBe('+10:00')
  expect(padZoneStr(10 * 60)).toBe('-10:00')
  expect(padZoneStr((-5 * 60) - 30)).toBe('+05:30')
})

it('PadStart', () => {
  expect(padStart(1, 2, '0')).toBe('01')
  expect(padStart(0, 2, '0')).toBe('00')
})

it('SetDate', () => {
  const day = Math.floor((Math.random() * 7) % 6)

  expect(Utils.setDay((new Date()), day).getDay()).toBe(day)
})
