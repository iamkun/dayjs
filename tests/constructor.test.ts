import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Dayjs, dayjs, unix } from '../src'

describe('dayjs constructor', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date())
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('creates instance of Dayjs', () => {
    expect(dayjs() instanceof Dayjs).toBeTruthy()
  })

  it('does not break isDayjs', () => {
    expect(dayjs.isDayjs(dayjs())).toBeTruthy()
  })

  it('creates valid date from no input parameter', () => {
    const newDate = dayjs()
    expect(newDate instanceof Dayjs).toBeTruthy()
    expect(newDate.isValid()).toBeTruthy()
  })

  it('creates valid date from string', () => {
    const newDate = dayjs('2022-04-05T16:25:36.987Z')
    expect(newDate instanceof Dayjs).toBeTruthy()
    expect(newDate.isValid()).toBeTruthy()
  })

  it('creates valid date from number', () => {
    const newDate = dayjs(86400)
    expect(newDate instanceof Dayjs).toBeTruthy()
    expect(newDate.isValid()).toBeTruthy()
    expect(newDate.valueOf()).toBe(86400)
  })

  it('should parse from unix timestamp', () => {
    const newDate = unix(86400)
    expect(newDate instanceof Dayjs).toBeTruthy()
    expect(newDate.isValid()).toBeTruthy()
    expect(newDate.valueOf()).toBe(86400000)
  })

  it('creates valid date from empty object', () => {
    const newDate = dayjs({})
    expect(newDate instanceof Dayjs).toBeTruthy()
    expect(newDate.isValid()).toBeTruthy()
  })

  it('creates valid date from Dayjs object', () => {
    const basicDateObject = dayjs()
    expect(basicDateObject instanceof Dayjs).toBeTruthy()
    const newDate = dayjs(basicDateObject)
    expect(newDate !== undefined).toBeTruthy()
    expect(newDate instanceof Dayjs).toBeTruthy()
    expect(newDate.isValid()).toBeTruthy()
  })

  it('creates valid date from Date object', () => {
    const basicDateObject = new Date()
    expect(basicDateObject instanceof Date).toBeTruthy()

    const newDate = dayjs(basicDateObject)
    expect(newDate instanceof Dayjs).toBeTruthy()
    expect(newDate.isValid()).toBeTruthy()
  })

  it('creates valid date from null', () => {
    const newDate = dayjs(null)
    expect(newDate instanceof Dayjs).toBeTruthy()
    expect(newDate.isValid()).toBeFalsy()
  })

  it('creates valid date from undefined', () => {
    const newDate = dayjs(undefined)
    expect(newDate instanceof Dayjs).toBeTruthy()
    expect(newDate.isValid()).toBeTruthy()
  })
})
