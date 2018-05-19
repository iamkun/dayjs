import dayjs from '../../../src'
import utcPlugin from '../../../src/plugin/utc'

dayjs.extend(utcPlugin) // only one API

it('utc and local', () => {
  const m = dayjs(Date.UTC(2011, 1, 2, 3, 4, 5, 6))
  m.utc()
  // utc
  expect(m.date()).toBe(2)
  expect(m.day()).toBe(3)
  expect(m.hour()).toBe(3)

  // local
  m.local()
  if (m.utcOffset() < -180) {
    expect(m.date()).toBe(1)
    expect(m.day()).toBe(2)
  } else {
    expect(m.date()).toBe(2)
    expect(m.day()).toBe(3)
  }
  const offset = Math.floor(m.utcOffset() / 60)
  const expected = (24 + 3 + offset) % 24
  expect(m.hour()).toBe(expected)
  expect(dayjs().utc().utcOffset()).toBe(0)
})

it('creating with utc and no arguments', () => {
  const startOfTest = new Date().valueOf()
  const momentDefaultUtcTime = dayjs.utc().valueOf()
  const afterMomentCreationTime = new Date().valueOf()

  expect(startOfTest <= momentDefaultUtcTime).toBe(true)
  expect(momentDefaultUtcTime <= afterMomentCreationTime).toBe(true)
})

it('creating with utc', () => {
  const m = dayjs.utc('2011-02-02T03:04:05+00:00')
  expect(m.date()).toBe(2)
  expect(m.hour()).toBe(3)
})

it('creating with utc without timezone', () => {
  let m = dayjs.utc('2012-01-02T08:20:00')
  expect(m.date()).toBe(2)
  expect(m.hour()).toBe(8)

  m = dayjs.utc('2012-01-02T08:20:00+09:00')
  expect(m.date()).toBe(1)
  expect(m.hour()).toBe(23)
})

it('isValid', () => {
  let m = dayjs.utc('2012-01-02T08:20:00')
  expect(m.isValid()).toBe(true)

  m = dayjs.utc(NaN)
  expect(m.isValid()).toBe(false)
})
